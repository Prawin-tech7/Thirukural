import csv
import json
from pathlib import Path

import requests


SOURCE_URL = "https://gist.githubusercontent.com/mambaz/27f4d628aa0fbab1a4118a1ae81375d9/raw/thirukkural.json"
APP_ROOT = Path(__file__).parent
CSV_OUT_FILE = APP_ROOT / "thirukural_tamil.csv"
JSON_OUT_FILE = APP_ROOT / "thirukural_tamil.json"


def download_dataset():
    response = requests.get(SOURCE_URL, timeout=30)
    response.raise_for_status()
    return response.json()


def normalize_row(item):
    line1 = (item.get("Line1") or "").strip()
    line2 = (item.get("Line2") or "").strip()
    return {
        "number": int(item["Number"]),
        "line1": line1,
        "line2": line2,
        "tamil": f"{line1}\n{line2}".strip(),
        "translation": (item.get("Translation") or "").strip(),
        "explanation": (item.get("explanation") or "").strip(),
        "mv": (item.get("mv") or "").strip(),
        "sp": (item.get("sp") or "").strip(),
        "mk": (item.get("mk") or "").strip(),
    }


def build():
    payload = download_dataset()
    rows = [normalize_row(item) for item in payload.get("kural", [])]
    rows.sort(key=lambda row: row["number"])

    if len(rows) != 1330:
        raise RuntimeError(f"Expected 1330 Kurals, got {len(rows)}")

    fieldnames = ["number", "line1", "line2", "tamil", "translation", "explanation", "mv", "sp", "mk"]
    with CSV_OUT_FILE.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)

    with JSON_OUT_FILE.open("w", encoding="utf-8") as handle:
        json.dump(rows, handle, ensure_ascii=False, indent=2)

    print(f"Wrote {len(rows)} Kurals to {CSV_OUT_FILE}")
    print(f"Wrote JSON backup to {JSON_OUT_FILE}")


if __name__ == "__main__":
    build()
