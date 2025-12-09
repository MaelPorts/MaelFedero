# Portfolio React Version

This is a React implementation of the Mael Federo portfolio website, built with Vite and React Router.

## 🚀 Getting Started

### Prerequisites

- Node.js v20.19+ or v22.12+ (currently using v21.7.1 - works but shows warnings)

### Installation

```bash
cd portfolio-react
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio-react/
├── public/
│   ├── favicon.svg
│   └── image.jpg
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   └── ProjectCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── styles/
│   │   ├── modern.css
│   │   └── projects.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## 🛠️ Tech Stack

- **React 19.2** - UI library
- **React Router 7.10** - Client-side routing
- **Vite 7.2** - Build tool and dev server
- **Bootstrap 5.3** - CSS framework
- **Bootstrap Icons** - Icon library

## 📄 Features

- ✅ Responsive navigation with React Router
- ✅ Home page with hero, academic journey, about, and certifications
- ✅ Projects page with dynamic data fetching
- ✅ Contact form with API integration
- ✅ Reusable React components
- ✅ Modern hooks-based architecture

## 🔄 API Integration

The React app uses the same API endpoints as the vanilla JS version:

- `/api/projects` - Fetches project data
- `/api/contact` - Handles contact form submissions

## 📝 Notes

- This React version lives alongside the vanilla JS version
- Same visual design and functionality as the original
- Built to demonstrate React proficiency
- Can be deployed separately or replace the vanilla version

---

Built with React by Mael Federo © 2025
