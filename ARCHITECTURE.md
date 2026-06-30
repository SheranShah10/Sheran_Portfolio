# Sheran Shah - Portfolio Architecture & Documentation

This document provides a comprehensive overview of the portfolio's codebase, architecture, state management, and design decisions.

## 📍 Local File Location
The entire source code for this project is safely stored on your local machine at the following path:
**`C:\Users\Sheran\.gemini\antigravity\scratch\sheran-portfolio`**

---

## 🏗️ Folder Structure

The project follows a standard React + Vite modular architecture.

```text
sheran-portfolio/
├── public/                 # Static assets (Favicon, CV, Images)
├── src/                    # Source Code
│   ├── components/         # All React Components (Decoupled & modular)
│   │   ├── About.jsx       # About me section
│   │   ├── App.css         # Global styles & layout variables
│   │   ├── BackToTop.jsx   # Floating back-to-top button
│   │   ├── Chatbot.jsx     # AI Gemini Chatbot implementation
│   │   ├── CommandCenter.jsx # Ctrl+K interactive terminal
│   │   ├── DotPath.jsx     # SVG Scroll-driven dot animation
│   │   ├── Footer.jsx      # Bottom branding & links
│   │   ├── Hero.jsx        # Landing section with parallax orbs
│   │   ├── Navbar.jsx      # Glassmorphism top navigation
│   │   ├── Preloader.jsx   # Initial cinematic loading screen
│   │   ├── Projects.jsx    # Project showcase cards
│   │   ├── ScrollJourney.jsx # Experience timeline
│   │   └── SkillTree.jsx   # Expandable interactive skill branches
│   ├── App.jsx             # Main application orchestrator
│   ├── index.css           # CSS Variables, Design Tokens, and Base resets
│   └── main.jsx            # React DOM entry point
├── index.html              # HTML Entry Point (Contains instant HTML Preloader)
├── package.json            # Dependencies and scripts
└── vite.config.js          # Vite configuration
```

---

## ⚙️ Technologies & Trade-offs

### 1. React.js + Vite
*   **Why:** React provides a component-driven architecture, making it easy to isolate complex UI pieces (like the Chatbot and Skill Tree). Vite provides near-instant Hot Module Replacement (HMR) and fast builds.
*   **Trade-off:** React introduces a larger JavaScript bundle size compared to vanilla JS or Astro. This is mitigated by our custom `index.html` Preloader which masks the initial JS parsing time.

### 2. Framer Motion
*   **Why:** Essential for the premium cinematic feel. It handles complex physics (springs), layout transitions (`layoutId` in Navbar), and scroll-driven animations (DotPath).
*   **Trade-off:** Adds ~30-40kb (gzipped) to the bundle. We accepted this tradeoff because motion design is a core requirement of this specific portfolio.

### 3. Vanilla CSS (No Tailwind)
*   **Why:** Maximum control. We built a custom design system in `index.css` using CSS Variables (`--violet`, `--glass`). It keeps the JSX clean and allows for highly specific, handcrafted glassmorphism and glowing effects that are difficult to achieve cleanly with utility classes.
*   **Trade-off:** Writing custom CSS takes longer than using Tailwind, and requires strict discipline to prevent dead code.

### 4. Lenis Smooth Scroll
*   **Why:** Overrides the browser's clunky scrollbar to provide a buttery-smooth 60fps scrolling experience.
*   **Trade-off:** Hijacks native scrolling behavior, which can occasionally conflict with specific touch-screen gestures, though Lenis is highly optimized to prevent this.

---

## 🧠 State Management & Hooks

Because the app is fundamentally a single-page scrolling portfolio, we avoided heavy state management libraries like Redux or Zustand. All state is localized using native React Hooks.

### Commonly Used Hooks
1.  **`useState`**: Used for local UI toggles.
    *   *Examples:* `isOpen` in Navbar (mobile menu), `isChatOpen` in Chatbot, `openId` in SkillTree (expanding branches), `isVisible` in BackToTop.
2.  **`useEffect`**: Used for side effects and event listeners.
    *   *Examples:* Initializing Lenis scroll in `App.jsx`, listening for `keydown` (Ctrl+K) in CommandCenter, setting timers in `Preloader.jsx`.
3.  **`useRef`**: Used to grab DOM elements for animations.
    *   *Examples:* Tracking the `heroRef` for mouse parallax, `chatEndRef` to auto-scroll the Chatbot.

### Framer Motion Hooks
1.  **`useScroll`**: Tracks how far the user has scrolled down the page or a specific container. Used in `DotPath` to track the SVG ball progress.
2.  **`useTransform`**: Maps one value to another. Used in `DotPath` to map the 0-1 scroll progress to SVG path length and label opacities.
3.  **`useSpring`**: Applies spring physics to values. Used in `App.jsx` for the top scroll-progress bar.

---

## 🎨 Design System (CSS Variables)
Located in `index.css`, this is the heart of the UI:
*   **Colors**: Deep space backgrounds (`#07070F`), Violet/Cyan gradients, and text hierarchy.
*   **Glassmorphism**: The `--glass` token uses `rgba(255, 255, 255, 0.03)` with `backdrop-filter: blur(12px)` and a subtle border to create the frosted glass effect seen on all cards and the navbar.

## 🚀 Deployment Strategy
The app is entirely statically generated. Running `npm run build` generates a `dist/` folder containing pure HTML/CSS/JS, which can be deployed to any static host (Vercel, Netlify, GitHub Pages) for free, with instant edge-caching.
