# MaelFedero Portfolio

This is a full-stack portfolio web application, designed to showcase professional experience, skills, and projects. The application serves as both an interactive CV and a demonstration of web development capabilities.

## Features

- **Modern Responsive Frontend:**  
  Built with HTML, CSS, and vanilla JavaScript for smooth navigation and a clean, professional look.
- **Dynamic Projects Section:**  
  Projects are fetched dynamically from a SQLite database via a Node.js/Express backend.
- **Backend API:**  
  RESTful API endpoints allow for retrieving and (soon) adding projects without editing code or the database manually.
- **Database Integration:**  
  Uses SQLite for easy local development and data persistence.
- **Separation of Concerns:**  
  Clear separation between frontend and backend codebases.

## What’s Been Done So Far

- Initial project structure and folder organization.
- Express backend set up with CORS, static file serving, and SQLite integration.
- API endpoint `/api/projects` for fetching project data.
- Frontend fetches and displays projects dynamically.
- Responsive and modern CSS for a professional appearance.
- Sticky header and footer, card-style sections, and smooth scrolling navigation.

## What Still Needs Work

- **Adding Projects:**  
  Implementing a frontend form or admin interface to add new projects directly from the site.
- **Project Management:**  
  Additional endpoints for editing and deleting projects.
- **Styling Improvements:**  
  Fine-tuning section backgrounds, ensuring the footer always sticks to the bottom, and improving mobile responsiveness.
- **Error Handling & Validation:**  
  Better user feedback for failed API requests or form submissions.
- **Deployment:**  
  Preparing the app for deployment to a production environment.

## How to Run Locally

1. Clone the repository.
2. Install backend dependencies:
   ```
   cd server
   npm install
   ```
3. Start the backend server:
   ```
   node index.js
   ```
4. Visit `http://localhost:3001/Html/index.html` in your browser.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

© 2025 Mael Federo. All rights reserved.