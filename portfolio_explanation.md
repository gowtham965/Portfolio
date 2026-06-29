# Comprehensive Portfolio Codebase Guide

This document provides a line-by-line and section-by-section explanation of the retro-futuristic `tmux` dashboard portfolio code. It covers high-level concepts, state design, global event loops, and styling mathematics.

---

## 1. Architectural Concepts

### The tmux Multiplexer Model
A Terminal Multiplexer (like `tmux`) splits a single terminal window into multiple workspaces called "panes." In this application:
- We divide the viewport into a **2x2 grid** (four panes).
- Only **one pane is active (focused) at a time**. Focus dictates style (active highlights) and keyboard input capture.
- Standard scrollbars are disabled on the global document window; instead, **each individual pane manages its own scroll state**.

### Global Focus Hook Pattern
Unlike traditional websites where focus is strictly mouse-driven, this application implements terminal-like keyboard navigation:
1. **Ctrl+b Prefix (tmux standard):** Triggers a "prefix active" state. For the next 2 seconds, the dashboard intercepts standard navigation keys.
2. **Alt Direct Jump:** Direct key shortcuts (`Alt+0` to `Alt+3`) trigger instant pane jumps.
3. **Esc Blur:** Allows a user to press Escape to escape from any active inputs, yielding control back to global keyboard navigation.

---

## 2. File-by-File Line Explanations

### A. React State & Core Loop: `src/App.jsx`

#### Imports & Helper Utilities
```javascript
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { skills } from "./data/skills";
import { projects } from "./data/projects";
import { credentials } from "./data/credentials";
import "./App.css";
```
- **Lines 1–6:** Imports hooks (`useState` for component local memory, `useEffect` for system event binding) alongside sub-components, data files, and styles.

#### State Handlers
```javascript
const [activePane, setActivePane] = useState(0);
const [prefixActive, setPrefixActive] = useState(false);
const [filterStatus, setFilterStatus] = useState("all");
```
- **`activePane`:** Holds an integer from `0` to `3` representing which quadrant is focused.
- **`prefixActive`:** Boolean indicating if the user has pressed `Ctrl+b` and the system is waiting for a follow-up focus key.
- **`filterStatus`:** String state (`"all"`, `"completed"`, `"in-progress"`, `"target"`) which controls the data filter in the credentials pane.

#### Global Keyboard Event Loop (`useEffect`)
```javascript
useEffect(() => {
  let prefixTimeout = null;

  const handleKeyDown = (e) => {
    // 1. Direct focus using Alt + 0-3
    if (e.altKey && e.key >= "0" && e.key <= "3") {
      e.preventDefault();
      setActivePane(parseInt(e.key, 10));
      return;
    }
```
- **Line 65:** Binds a global keydown event listener.
- **Lines 66–70:** Intercepts `Alt + [0-3]`. It prevents default browser actions (like switching browser tabs) and calls `setActivePane()` with the parsed integer base 10.

```javascript
    // 2. Ctrl + b prefix toggler
    if (e.ctrlKey && e.key === "b") {
      e.preventDefault();
      setPrefixActive(true);
      if (prefixTimeout) clearTimeout(prefixTimeout);
      prefixTimeout = setTimeout(() => {
        setPrefixActive(false);
      }, 2000);
      return;
    }
```
- **Lines 73–81:** Detects if the user pressed `Ctrl+b`. If true, it activates the overlay banner (`prefixActive = true`) and sets a timer. If no key is pressed within **2000 milliseconds**, the prefix expires and hides the banner.

```javascript
    // 3. Handle key after Ctrl + b prefix
    if (prefixActive) {
      if (e.key >= "0" && e.key <= "3") {
        e.preventDefault();
        setActivePane(parseInt(e.key, 10));
        setPrefixActive(false);
        return;
      }
```
- **Lines 84–90:** If the prefix is active and the user presses `0` to `3`, focus is updated and the prefix banner immediately hides.

```javascript
      // Arrow navigation
      const currentCol = activePane % 2;
      const currentRow = Math.floor(activePane / 2);
      let nextPane = activePane;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        nextPane = currentRow * 2 + Math.max(0, currentCol - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        nextPane = currentRow * 2 + Math.min(1, currentCol + 1);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        nextPane = Math.max(0, currentRow - 1) * 2 + currentCol;
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        nextPane = Math.min(1, currentRow + 1) * 2 + currentCol;
      }
```
- **Lines 93–115 (Pane Coordinates Math):** Converts the `activePane` index into standard row/column coordinates on a 2x2 grid:
  - Column coordinate: `activePane % 2` (returns `0` for left column, `1` for right column).
  - Row coordinate: `Math.floor(activePane / 2)` (returns `0` for top row, `1` for bottom row).
  - Left move decreases column (lower bound 0).
  - Right move increases column (upper bound 1).
  - Up move decreases row (lower bound 0).
  - Down move increases row (upper bound 1).
  - Calculates `nextPane = row * 2 + col` and shifts focus.

#### Data Binding & Component Render
```javascript
{/* Pane 0: about */}
<section
  className={`pane ${activePane === 0 ? "focused" : ""}`}
  onClick={() => setActivePane(0)}
  tabIndex={0}
>
```
- **`focused` class:** Applied conditionally if `activePane === 0`.
- **`tabIndex={0}`:** Makes the HTML section focusable via standard tab loops, ensuring accessibility.

---

### B. Tactile Status Tabs: `src/components/Footer.jsx`

```javascript
function Footer({ activePane, onSelectPane }) {
  const tabs = [
    { idx: 0, label: "about" },
    { idx: 1, label: "skills" },
    { idx: 2, label: "projects" },
    { idx: 3, label: "credentials" },
  ];
```
- **Footer component:** Takes the current active index (`activePane`) and a click callback (`onSelectPane`) from `App.jsx`.

```javascript
      <span>
        {tabs.map((tab) => (
          <button
            key={tab.idx}
            className={`tab ${activePane === tab.idx ? "active" : ""}`}
            onClick={() => onSelectPane(tab.idx)}
            type="button"
          >
            [{tab.idx}] {tab.label}
          </button>
        ))}
      </span>
```
- **Button rendering:** Maps over the status keys. If `activePane === tab.idx`, it applies the `.active` class representing a pressed keycap.

---

### C. Glassmorphism CSS Math: `src/App.css`

#### The tmux Grid
```css
.tmux-grid {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1px;
  background: var(--claude-divider);
  overflow: hidden;
  position: relative;
}
```
- **`grid-template-columns: 1fr 1fr`:** Splitting the columns into two equal fractions (`fr`).
- **`gap: 1px` with colored background:** Creates thin tmux-like pane borders using the divider line background leaking through the 1px grid gap.

#### Iridescent Text Perspective (Logo Hover Effect)
```css
.brand-iridescent {
  background: linear-gradient(
    105deg,
    var(--claude-cream) 0%,
    var(--claude-coral) 22%,
    var(--claude-gold)  42%,
    var(--claude-sky)   62%,
    var(--claude-moss)  82%,
    var(--claude-cream) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  transform-origin: center center;
  transform-style: preserve-3d;
  transition: transform 420ms cubic-bezier(0.2, 0.8, 0.2, 1),
              filter 320ms ease-out;
}

.brand-iridescent:hover {
  transform: perspective(720px) rotateX(5deg) rotateY(-8deg) scale(1.04);
  filter: drop-shadow(0 0 10px rgba(217, 119, 87, 0.45));
}
```
- **`background-clip: text`:** Masks the text geometry, making the letters take on the linear gradient colors.
- **`perspective(720px) rotateX(...) rotateY(...)`:** Projects a 3D depth field where the letters tilt slightly toward the cursor position.

#### Tactile Calculator-style Tab Buttons
```css
.tmux-status .tab {
  background: linear-gradient(180deg, #2a2f3a 0%, #1b1f29 100%);
  border: 1px solid rgba(0, 0, 0, 0.45);
  border-top-color: rgba(255, 255, 255, 0.14);
  border-radius: 4px;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.09),
    0 1px 0 rgba(0, 0, 0, 0.4),
    0 2px 3px rgba(0, 0, 0, 0.28);
}

.tmux-status .tab:active,
.tmux-status .tab.active {
  background: linear-gradient(180deg, #a85d3c 0%, #d97757 100%);
  transform: translateY(1px);
  border-top-color: rgba(0, 0, 0, 0.35);
  box-shadow:
    inset 0 2px 3px rgba(0, 0, 0, 0.45),
    inset 0 -1px 0 rgba(255, 255, 255, 0.10);
}
```
- **Tabs shadow calculations:** Use an inset highlight (`inset 0 1px 0...`) at the top, a dark border outline, and a drop-shadow beneath.
- **Active state:** Inverts the linear gradient (mimicking light shifting), displaces the button downwards by `translateY(1px)`, and replaces the light shadow with an inset dark shadow (`inset 0 2px 3px...`) to simulate a button physically clicked down.
