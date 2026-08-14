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
- Multiple glass-style color themes with selected theme tick

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
├── main.py                     # Flask app entry point
├── requirements.txt            # Python dependencies
├── README.md                   # project documentation
├── .gitignore                  # ignores cache and editor files
├── thirukural_tamil.csv        # main Kural dataset used by the app
├── static/
│   ├── script.js               # theme, UI, and interaction logic
│   └── style.css               # layout and styling
├── templates/
│   ├── index.html              # home page for Kural lookup
│   └── kural.html              # Kural detail view
└── README-assets/              # optional local screenshots if added later
```

## UI Screenshots

### Home screen

![Home screen](https://raw.githubusercontent.com/Prawin-tech7/Thirukural/master/README-assets/home-screen-fire-ice.svg)

This screen allows the user to enter a Kural number and instantly search for the matching verse. The Fire & Ice theme gives the app a vibrant, modern look while keeping the interface clean and readable.

### Kural detail page

![Kural detail page](https://raw.githubusercontent.com/Prawin-tech7/Thirukural/master/README-assets/kural-detail-fire-ice.svg)

This screen shows the selected Kural in Tamil, with an option to toggle English translation and view the meaning. The Fire & Ice palette keeps the reading area visually rich without reducing clarity.

## Run

```bash
pip install -r requirements.txt
python main.py
```

Open:

```text
http://127.0.0.1:5000
```

The app reads the local `thirukural_tamil.csv` file directly, so no extra dataset build step is required.
