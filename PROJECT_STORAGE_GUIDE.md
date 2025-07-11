# Project Storage Guide

## How to Store Your Projects

Your portfolio now supports comprehensive project storage with images, links, and downloads. Here's how to organize your projects:

## Academic Projects (University Work)

### Required Fields:
- **Title**: Project name
- **Course**: The university course/module
- **Year**: Academic year (1, 2, 3)
- **Grade**: Your grade/mark received
- **Description**: What the project does
- **Technologies**: Tech stack used (comma-separated)
- **Assignment Type**: Type of assignment (Research Project, Software Project, etc.)

### Optional Fields:
- **Image**: Project screenshot/preview (`./assets/projects/your-image.jpg`)
- **GitHub URL**: Link to source code repository
- **Download URL**: Link to download files (PDFs, assignments, etc.)

### Example Academic Project Structure:
```
client/assets/projects/
├── research-project.jpg          # Project screenshot
├── research-report.pdf           # Downloadable assignment
├── library-system.jpg            # Another project image
└── linkedin-usability-report.pdf # Report download
```

## Technical Projects (Personal/Side Projects)

### Required Fields:
- **Title**: Project name
- **Category**: Project type (Full-Stack Development, E-Commerce, etc.)
- **Description**: What the project does
- **Technologies**: Tech stack used (comma-separated)
- **Features**: Key features (comma-separated)

### Optional Fields:
- **Image**: Project screenshot (`./assets/projects/your-image.jpg`)
- **GitHub URL**: Source code repository
- **Live URL**: Working deployment link
- **Demo URL**: Demo/preview link

### Example Technical Project Structure:
```
client/assets/projects/
├── portfolio-website.jpg    # Project screenshots
├── bshark-ecommerce.jpg
├── bmi-calculator.jpg
└── chess-game.jpg
```

## Adding New Projects

### Method 1: Using the Database API (Recommended)

**For Academic Projects:**
```javascript
// POST to: http://localhost:3001/api/university-projects
{
  "title": "Your Project Title",
  "course": "Course Name",
  "year": 3,
  "year_label": "Year 3 (Final Year) - 2024/25",
  "grade": "75%",
  "description": "Project description...",
  "technologies": "JavaScript, React, Node.js",
  "image_url": "./assets/projects/your-image.jpg",
  "github_url": "https://github.com/yourusername/project",
  "download_url": "./assets/projects/your-file.pdf",
  "assignment_type": "Software Project"
}
```

**For Technical Projects:**
```javascript
// POST to: http://localhost:3001/api/technical-projects
{
  "title": "Your Project Title",
  "category": "Full-Stack Development",
  "description": "Project description...",
  "technologies": "React, Node.js, MongoDB",
  "features": "Authentication, Real-time updates, Responsive design",
  "image_url": "./assets/projects/your-image.jpg",
  "github_url": "https://github.com/yourusername/project",
  "live_url": "https://yourproject.netlify.app",
  "demo_url": "https://demo.yourproject.com"
}
```

### Method 2: Direct Database Editing

You can also directly edit the seed data in `server/index.js` and restart the server.

## Image Guidelines

### Recommended Image Specifications:
- **Format**: JPG or PNG
- **Size**: 800x600px or similar aspect ratio
- **File Size**: Under 500KB for fast loading
- **Content**: Clean screenshot showing your project interface

### Image Naming Convention:
- Use lowercase with hyphens: `project-name.jpg`
- Be descriptive: `library-management-system.jpg`
- Match your project title: "Portfolio Website" → `portfolio-website.jpg`

## File Organization

```
client/assets/
├── projects/                    # Project images and downloads
│   ├── academic/               # Academic project files
│   │   ├── images/            # Project screenshots
│   │   └── downloads/         # PDFs, reports, assignments
│   └── technical/             # Technical project files
│       ├── images/           # Project screenshots
│       └── demos/            # Demo files if needed
├── CV.docx                    # Your CV
├── Melz.png                   # Profile picture
└── icon/                      # Social media icons
    ├── github-24.png
    └── linkedin-48.png
```

## Project Categories

### Academic Project Types:
- Research Project
- Software Project
- Research Assignment
- Academic Report
- Web Project
- Mobile App
- Database Assignment
- Design Assignment

### Technical Project Categories:
- Full-Stack Development
- E-Commerce
- Health & Fitness
- Game Development
- Music & Audio
- Productivity
- Utilities
- Mobile Development
- Data Science
- AI/Machine Learning

## API Endpoints for Project Management

- `GET /api/university-projects` - Get all academic projects
- `GET /api/technical-projects` - Get all technical projects
- `POST /api/university-projects` - Add new academic project
- `POST /api/technical-projects` - Add new technical project
- `GET /api/technical-categories` - Get all technical categories
- `GET /api/university-projects/year/3` - Get projects by year

## Tips

1. **Keep descriptions concise** but informative (2-3 sentences)
2. **Use consistent technology naming** (e.g., "JavaScript" not "JS")
3. **Organize images** by project type for easy management
4. **Test all links** before adding them to ensure they work
5. **Backup your database** (`server/portfolio.db`) regularly
6. **Use relative paths** for local files (`./assets/...`)
7. **Use absolute URLs** for external links (`https://...`)

Your portfolio now demonstrates full-stack capabilities with database-driven content management!
