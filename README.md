# YOLO Detection Portfolio

Visual portfolio of a **Computer Vision** project built with **YOLOv8** (Ultralytics).

> This repository showcases **results and demos**.
> Source code lives in a separate repo:
> **[github.com/voksir/image-detection](https://github.com/voksir/image-detection)**

---

## Live site

| Language | URL |
|----------|-----|
| **English (default)** | https://voksir.github.io/yolo-detection-portfolio/ |
| **French** | https://voksir.github.io/yolo-detection-portfolio/fr/ |

Deployed automatically via **GitHub Actions** on every push to `main`.

### GitHub Pages setup

In repository **Settings → Pages**, set **Source** to **GitHub Actions** (not “Deploy from branch”).

---

## Local development

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev      # http://localhost:4321/yolo-detection-portfolio/
npm run build    # output in dist/
npm run preview  # preview production build
```

---

## Project structure

```
yolo-detection-portfolio/
├── .github/workflows/deploy.yml
├── public/
│   └── assets/
│       ├── results/          # WebP screenshots
│       └── videos/           # Compressed video preview
├── src/
│   ├── components/           # Astro UI components
│   ├── data/model-pages.ts   # Model detail page content
│   ├── i18n/                 # EN / FR translations
│   ├── layouts/
│   ├── pages/                # Routes (EN + FR + model pages)
│   └── styles/style.css
├── astro.config.mjs
└── package.json
```

Content is centralized in `src/i18n/` — one edit updates both languages for shared data (images, metrics).

---

## Content

| Section | Description |
|---------|-------------|
| **Image detection** | Bounding boxes on parking photo (4 cars) |
| **Segmentation** | Instance masks with polygon contours |
| **Video** | test_video_1 → test_video_2 (721 frames, 1080p) + embedded preview |
| **Graduation scene** | Multi-person detection (NIUISTERS demo) |
| **Tracking** | Multi-object tracking with ByteTrack and persistent IDs |
| **Fine-tuning** | Documented pipeline for custom models |

---

## Link

```
Portfolio : https://voksir.github.io/yolo-detection-portfolio/
Code      : https://github.com/voksir/image-detection
```

---

*Computer Vision learning project*
