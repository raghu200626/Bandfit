# Requirements & Prerequisites – BandFit

This document outlines the software, runtime, hardware, and environment requirements for running, developing, and deploying **BandFit**.

---

## 1. System & Runtime Requirements

### Minimum Requirements
- **Node.js**: `v16.0.0` or higher (Recommended: `v18.x`, `v20.x`, or `v22.x LTS`)
- **Package Manager**:
  - `npm` (v7.0.0+) *(bundled with Node.js)*
  - Alternatively: `pnpm` (v8.0.0+) or `yarn` (v1.22.0+)
- **Operating System**: Cross-platform
  - Windows 10/11
  - macOS 10.15+ (Catalina or later)
  - Linux (Ubuntu 20.04+, Debian 10+, Fedora 34+, Arch Linux)

---

## 2. Dependencies

### Backend Dependencies (`package.json`)
The backend is intentionally lightweight and has minimal external dependencies:

| Package | Version | Purpose |
| :--- | :--- | :--- |
| [`express`](https://www.npmjs.com/package/express) | `^5.2.1` | Web server framework for serving static assets and RESTful API endpoints |
| [`cors`](https://www.npmjs.com/package/cors) | `^2.8.6` | Cross-Origin Resource Sharing middleware for safe API requests |

### Native Node.js Modules
- `fs`: File system interaction to persist user profiles into `profiles.json`.
- `path`: Cross-platform resolution of static directory paths.

### Frontend Dependencies & CDNs
No frontend build step or bulky JavaScript frameworks (React/Vue/Angular) are required. The frontend runs directly in any modern browser:
- **Typography (CDN)**:
  - [Google Fonts - Syne](https://fonts.google.com/specimen/Syne) (Weights: 400, 600, 700, 800)
  - [Google Fonts - Inter](https://fonts.google.com/specimen/Inter) (Weights: 300, 400, 500, 600)
- **Kinematics Engine**: Custom pure JavaScript SVG skeletal animation engine using linear interpolation (`lerp`).

---

## 3. Client & Browser Compatibility

BandFit utilizes modern HTML5, CSS3 Custom Properties (variables), and SVG rendering:

| Browser | Minimum Version | Recommended Version |
| :--- | :--- | :--- |
| **Google Chrome / Chromium** | 90+ | Latest |
| **Microsoft Edge** | 90+ | Latest |
| **Mozilla Firefox** | 88+ | Latest |
| **Apple Safari / iOS Safari** | 14+ | Latest |
| **Android WebView / Chrome Mobile** | 90+ | Latest |

**Required Browser Capabilities:**
- ES6+ JavaScript (`async/await`, Arrow Functions, Fetch API)
- Scalable Vector Graphics (SVG 1.1 / 2.0)
- CSS Grid & CSS Flexbox layout models
- LocalStorage / Window fetch capability

---

## 4. Mobile & Android WebView Integration Requirements

If embedding BandFit inside an Android application using WebView:
- **Android OS**: Android 7.0 (API level 24) or higher
- **Android WebView**: Enabled JavaScript execution (`WebSettings.setJavaScriptEnabled(true)`)
- **JavaScript Interface**: Optional `window.Android` object with the following methods:
  - `Android.getProfiles()`: Returns a JSON array string of saved profile names.
  - `Android.loadProfile(name)`: Returns a JSON string of the requested profile.
  - `Android.saveProfile(name, jsonString)`: Saves the profile to native device storage.

*(If `window.Android` is not detected, BandFit seamlessly falls back to the Node.js Express REST API).*

---

## 5. Storage Requirements

- **Disk Space**: Less than 100 MB (including `node_modules`).
- **RAM**: Minimum 512 MB available memory (Node server consumes ~30-50 MB).
- **Data Persistence**: Uses a local file-based database (`profiles.json`) created automatically at server start if not present.

