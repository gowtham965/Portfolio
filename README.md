# Retro-Futuristic tmux Dashboard Portfolio

A premium, interactive developer portfolio designed around the **Terminal Multiplexer (`tmux`)** layout and keyboard navigation patterns. Built with **React**, **Vite**, and styled with custom glassmorphism and tactical retro-futuristic aesthetics.

---

## 🚀 Key Features

*   **tmux Multiplexer Model**: The screen is split into a **2x2 grid** of interactive panes. Each pane operates independently, managing its own scrolling and state.
*   **Tactile Keyboard Navigation**:
    *   **Ctrl+b Prefix**: Press `Ctrl+b` (like tmux) to activate the navigation prefix state, then use **Arrow Keys** or numbers `0-3` to switch panes.
    *   **Alt Quick Jumps**: Use `Alt + 0`, `Alt + 1`, `Alt + 2`, or `Alt + 3` for instant direct jumps between panes.
    *   **Mouse Interaction**: Click any pane to instantly focus it.
*   **Calculator-style Status Bar**: Physical-like push buttons at the footer representing active workspace segments.
*   **Iridescent Text Effects**: Elegant glassmorphism and 3D tilting logo effect using pure CSS perspective math on hover.

---

## 📂 Pane Structure

1.  **`[0] about`**: Introduction, bio, and background.
2.  **`[1] skills`**: Technical capabilities visualized in clean categorizations.
3.  **`[2] projects`**: Filterable grid displaying personal creations, code details, and deployment targets.
4.  **`[3] credentials`**: Professional achievements, certifications, and target milestones.

---

## 🛠️ Technology Stack

*   **Core**: React (HTML5 / JS / JSX)
*   **Styling**: Pure CSS (Vanilla CSS with CSS Custom Properties, flexbox/grid layout, 3D transform effects)
*   **Build Tool**: Vite (Ultra-fast Hot Module Replacement)

---

## 💻 Local Setup & Development

To get this project running on your computer:

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Start the local development server**:
    ```bash
    npm run dev
    ```

3.  **Build the production-ready bundle**:
    ```bash
    npm run build
    ```

4.  **Preview the production build locally**:
    ```bash
    npm run preview
    ```

---

## ⌨️ Command Shortcuts Reference

| Shortcut | Action |
| :--- | :--- |
| `Ctrl + b` | Activate tmux navigation prefix (expires after 2s if no input) |
| `Arrow Keys` (after `Ctrl + b`) | Switch focus to adjacent pane (Up / Down / Left / Right) |
| `0` - `3` (after `Ctrl + b`) | Switch focus directly to Pane `0`, `1`, `2`, or `3` |
| `Alt + 0` to `Alt + 3` | Instantly jump to corresponding pane |
| `Click` on Pane | Focus selected pane |
