import csv
from pathlib import Path

from flask import Flask, abort, jsonify, render_template, request


APP_ROOT = Path(__file__).parent
CSV_FILE = APP_ROOT / "thirukural_tamil.csv"
KURAL_MIN = 1
KURAL_MAX = 1330

app = Flask(__name__, static_folder="static", template_folder="templates")


def load_kurals():
    kurals = {}
    if not CSV_FILE.exists():
        return kurals

    with CSV_FILE.open("r", encoding="utf-8-sig", newline="") as handle:
        reader = csv.DictReader(handle)
        for row in reader:
            try:
                number = int(row.get("number", "0"))
            except ValueError:
                continue

            line1 = (row.get("line1") or "").strip()
            line2 = (row.get("line2") or "").strip()
            tamil = (row.get("tamil") or "\n".join([line1, line2])).strip()

            kurals[number] = {
                "number": number,
                "line1": line1,
                "line2": line2,
                "tamil": tamil,
                "translation": (row.get("translation") or "").strip(),
                "explanation": (row.get("explanation") or "").strip(),
                "mv": (row.get("mv") or "").strip(),
                "sp": (row.get("sp") or "").strip(),
                "mk": (row.get("mk") or "").strip(),
            }
    return kurals


KURALS = load_kurals()


def get_kural_or_404(number):
    if number < KURAL_MIN or number > KURAL_MAX:
        abort(404)
    kural = KURALS.get(number)
    if not kural or not kural["tamil"]:
        abort(404)
    return kural


@app.route("/")
def index():
    return render_template(
        "index.html",
        total=len(KURALS),
        kural_min=KURAL_MIN,
        kural_max=KURAL_MAX,
    )


@app.route("/kural")
def kural_page():
    number = request.args.get("n", type=int)
    if number is None:
        abort(400)
    return render_template("kural.html", kural=get_kural_or_404(number))


@app.route("/api/kural/<int:number>")
def api_kural(number):
    return jsonify(get_kural_or_404(number))


@app.errorhandler(404)
def not_found(_error):
    return render_template("index.html", error="Kural not found. Enter a number from 1 to 1330.", total=len(KURALS), kural_min=KURAL_MIN, kural_max=KURAL_MAX), 404


@app.errorhandler(400)
def bad_request(_error):
    return render_template("index.html", error="Please enter a valid Kural number.", total=len(KURALS), kural_min=KURAL_MIN, kural_max=KURAL_MAX), 400


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
