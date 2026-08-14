# Thirukural Finder

A mobile-friendly Flask app for searching any Thirukural by number from 1 to 1330.

## Project Overview

This project helps users quickly look up and read Thirukkural verses in Tamil, toggle between Tamil and English views, and explore the meaning of each Kural in a clean, modern interface. It is designed for simple browsing on both desktop and mobile screens.

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

## Good starting Kurals

If you want a few well-known and meaningful choices to try first, the app works great with numbers like:

- 1
- 25
- 38
- 71
- 100
- 127

These are a few of the more memorable Kurals and make a nice starting point for exploring the collection.

## Project Structure

```text
Thirukural/
├── app.py                      # Flask app entry point
├── build_thirukural_dataset.py # dataset generation script
├── requirements.txt            # Python dependencies
├── README.md                   # project documentation
├── run_app.bat                 # run app on Windows
├── thirukural_tamil.csv        # Kural dataset in CSV format
├── thirukural_tamil.json       # Kural dataset in JSON format
├── static/
│   ├── script.js               # theme, UI, and interaction logic
│   └── style.css               # layout and styling
├── templates/
│   ├── index.html              # home page for Kural lookup
│   └── kural.html              # Kural detail view
└── docs/
    └── screenshots/
        ├── home-screen.svg     # home page UI mockup
        └── kural-detail.svg    # detail page UI mockup
```

## UI Screenshots

### Home screen

![Home screen](docs/screenshots/home-screen.svg)

This screen allows the user to enter a Kural number and instantly search for the matching verse. The layout is simple, mobile-friendly, and includes search history for quick revisits.

### Kural detail page

![Kural detail page](docs/screenshots/kural-detail.svg)

This screen shows the selected Kural in Tamil, with an option to toggle English translation and view the meaning. It gives a focused reading experience for one verse at a time.

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
