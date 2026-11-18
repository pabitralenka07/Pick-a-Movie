# Pick a Movie

An interactive card selection UI showcasing staggered entry and exit transitions powered by modern CSS and vanilla JavaScript.

## Features

- **Staggered Animations**: Cards collapse sequentially from the outer edges inward when a card is selected, and return outward when deselected.
- **Relational Selectors**: Uses `:has()` and CSS custom properties (`--n`) to dynamically orchestrate animation delays.
- **Pure Web Standards**: Built without external frameworks or dependencies — just HTML, CSS, and vanilla JS.
- **Responsive Layout**: Fluid flexbox structure that adapts across desktop and mobile screens.

## Quick Start

Open `index.html` directly in your browser, or start a local static server:

```bash
# Using Python
python3 -m http.server 3000

# Using Node.js
npx serve .
```

Navigate to `http://localhost:3000`.

## Project Structure

```
Pick-a-Movie/
├── index.html        # Markup and structure
├── index.css         # Styling, layout, and staggered animation rules
├── index.js          # Stagger calculations and selection handling
├── *.jpg             # Card visual assets
└── README.md         # Documentation
```

## How It Works

When an item is clicked, JavaScript calculates relative distances from the selected item and sets a CSS variable `--n` on each sibling card. The CSS transition delay uses `calc(var(--n) * 0.12s)` to achieve a cascading exit and entry effect.
