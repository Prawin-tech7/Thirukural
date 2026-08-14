# Thirukural Finder

A mobile-friendly Flask app for searching any Thirukural by number from 1 to 1330.

## Features

- Flask API endpoint: `/api/kural/<number>`
- Mobile-first HTML, CSS, and JavaScript frontend
- Full local dataset with all 1330 Kurals
- Tamil Kural display by default
- English meaning toggle on the Kural page
- Tamil/English interface language switch
- Search history stored in the browser
- Clear history button
- Eight glass-style color themes with selected theme tick

## Run

```bash
pip install -r requirements.txt
python app.py
```

Open:

```text
http://127.0.0.1:5000
```

## Rebuild Dataset

The CSV is already built, but you can regenerate it from the public source:

```bash
python build_thirukural_dataset.py
```

This creates:

- `thirukural_tamil.csv`
- `thirukural_tamil.json`

The app loads the CSV once when Flask starts, so searches are fast and do not need internet access.
