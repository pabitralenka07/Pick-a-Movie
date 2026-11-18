# 🎬 Pick a Movie ✨

An interactive, responsive movie selector featuring smooth, staggered card transitions powered by modern CSS math and vanilla JavaScript. 🍿🎞️

---

## ✨ Features

- ⚡ **Dynamic Staggered Transitions**: Cards collapse sequentially from the outer edges inward when a movie is selected, and return outward when deselected.
- 🎯 **Focus Highlighting**: Selected card smoothly elevates, expands, and stays centered while neighbor cards collapse.
- 📐 **Modern CSS Math**: Employs CSS custom properties (`--n`) and `calc()` for dynamic delay mapping with future-ready `@supports (order: sibling-index())`.
- 🪄 **Zero Dependencies**: Pure web standards — vanilla JavaScript, modern CSS3 (`:has()`, flexbox, `@layer`), and semantic HTML5.
- 📱 **Fully Responsive**: Fluid, responsive layout optimized for both desktop and mobile viewports.

---

## 🚀 Quick Start

### 1️⃣ Clone the Repository 📥
```bash
git clone https://github.com/pabitralenka07/Pick-a-Movie.git
cd Pick-a-Movie
```

### 2️⃣ Run Locally 💻
Open `index.html` directly in your browser, or spin up a local development server:

```bash
# Using Python 🐍
python3 -m http.server 3000

# Using Node.js 🟢
npx serve .
```

🌐 Open your browser and navigate to: `http://localhost:3000`

---

## 🧠 How It Works

1. 🖱️ **User Selection**: When a user clicks a movie card, the checkbox state changes.
2. 🧮 **Stagger Delay Calculation**: JavaScript determines the distance of each sibling card relative to the chosen one and injects a custom property `--n`.
3. 🎭 **Cascading Animation**: CSS evaluates `calc(var(--n) * 0.12s)` to delay and sequence the transitions, causing outer cards to fold away first.
4. 🔄 **Reversible Interaction**: Deselecting the active card reverses the calculation, allowing all cards to ripple back into view.

---

## 📁 Project Structure

```
📂 Pick-a-Movie/
├── 📄 index.html        # 🧱 Semantic HTML structure
├── 🎨 index.css         # 🖌️ Layout, styling & staggered animation rules
├── 📜 index.js          # ⚙️ Stagger calculations & single-selection logic
├── 🖼️ omoide.jpg        # 🎬 Movie poster asset
├── 🖼️ kazetachinu.jpg   # 🎬 Movie poster asset
├── 🖼️ howl.jpg          # 🎬 Movie poster asset
├── 🖼️ ponyo.jpg         # 🎬 Movie poster asset
├── 🖼️ baron.jpg         # 🎬 Movie poster asset
└── 📝 README.md         # 📖 Project documentation
```

---

## 👨‍💻 Author

Created with ❤️ by **[Pabitra](https://github.com/pabitralenka07)** 🌟

---

## 📄 License

Distributed under the **MIT License**. 📜
