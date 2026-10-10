# Music Player Web App

A lightweight browser-based music player built with HTML, CSS, and JavaScript. The app includes a login/sign-up interface, a responsive music library UI, and playback controls for a curated collection of songs.

## Features

- Dark-themed music player layout
- Login and registration screens
- Song card grid with album art and titles
- Play, pause, next, previous, and seek controls
- Volume control slider
- Persistent playback state using `localStorage`
- Responsive design for smaller screens

## Project Structure

- `index.html` – login page
- `login.html` – sign-up page
- `musicplayer.html` – main music player interface
- `musicplayer.css` – styling for the player layout
- `musicplayer.js` – audio playback logic and interactive controls
- `musicplayersongs/` – MP3 audio files
- `musicplayerCover/` – cover art images

## Getting Started

Because this project is a static frontend app, you can run it using any local web server.

### Option 1: Python local server

```bash
cd "c:\Users\saisa\Downloads\MusicPlayer"
python -m http.server 8000
```

Then open:

- `http://localhost:8000/index.html` for the login screen
- `http://localhost:8000/musicplayer.html` for the music player

### Option 2: VS Code Live Server

Open the project in VS Code and launch it with the Live Server extension.

## Notes

- This is a front-end demo app, so it does not connect to a real backend or database.
- The login/signup UI is for demonstration purposes.
- Audio files and artwork are stored locally in the project folders.

## License

This project is for educational/demo purposes and can be freely modified and reused.
