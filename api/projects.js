const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Initialize SQLite database
const dbPath = path.join(process.cwd(), 'portfolio.db');
const db = new sqlite3.Database(dbPath);

// Initialize database if it doesn't exist
function initializeDatabase() {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      // Create university_projects table
      db.run(`CREATE TABLE IF NOT EXISTS university_projects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        course TEXT,
        year INTEGER NOT NULL,
        year_label TEXT,
        grade TEXT,
        description TEXT NOT NULL,
        technologies TEXT,
        skills TEXT,
        focus_area TEXT,
        image_url TEXT,
        github_url TEXT,
        download_url TEXT,
        assignment_type TEXT,
        project_type TEXT DEFAULT 'university',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )`);

      // Create technical_projects table
      db.run(`CREATE TABLE IF NOT EXISTS technical_projects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        technologies TEXT,
        skills TEXT,
        focus_area TEXT,
        image_url TEXT,
        github_url TEXT,
        live_demo_url TEXT,
        project_type TEXT DEFAULT 'technical',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )`, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  });
}

// Seed data
const universityProjects = [
  {
    title: "ADHD Research Study",
    course: "Final Year Project",
    year: 3,
    year_label: "Year 3",
    grade: "71%",
    description: "A comprehensive research study examining the intersection of ADHD and technology use, focusing on how digital tools can both help and hinder individuals with ADHD.",
    technologies: "Research Methodology, Data Analysis, Academic Writing",
    skills: "Research Design, Statistical Analysis, Literature Review, Report Writing",
    focus_area: "Human-Computer Interaction",
    assignment_type: "Final Year Project"
  },
  {
    title: "Library Management System",
    course: "Software Engineering Culture", 
    year: 3,
    year_label: "Year 3",
    grade: "64%",
    description: "A full-stack library management system built with modern web technologies, featuring book cataloguing, user management, and borrowing tracking.",
    technologies: "JavaScript, Node.js, Express, SQLite, HTML, CSS",
    skills: "Full-Stack Development, Database Design, API Development, User Interface Design",
    focus_area: "Web Development",
    assignment_type: "Coursework"
  },
  {
    title: "LinkedIn Professional Network Study",
    course: "Usability Engineering",
    year: 3,
    year_label: "Year 3", 
    grade: "60%",
    description: "An in-depth usability analysis of LinkedIn's professional networking features, examining user experience patterns and accessibility considerations.",
    technologies: "Usability Testing, User Research, Prototyping Tools",
    skills: "UX Research, Usability Testing, User Interface Analysis, Accessibility Evaluation",
    focus_area: "User Experience",
    assignment_type: "Coursework"
  },
  {
    title: "Project Management Framework",
    course: "Project Management",
    year: 3,
    year_label: "Year 3",
    grade: "56%", 
    description: "Development and implementation of a comprehensive project management framework tailored for software development teams.",
    technologies: "Project Management Tools, Documentation, Process Design",
    skills: "Project Planning, Team Management, Risk Assessment, Process Optimization",
    focus_area: "Project Management",
    assignment_type: "Coursework"
  },
  {
    title: "Recipe Sharing Mobile App",
    course: "Web Programming",
    year: 2,
    year_label: "Year 2",
    grade: "56%",
    description: "A mobile-responsive web application for sharing and discovering recipes, featuring user authentication, recipe categorization, and social sharing capabilities.",
    technologies: "HTML5, CSS3, JavaScript, PHP, MySQL, Bootstrap",
    skills: "Mobile-First Design, Database Management, User Authentication, Responsive Design",
    focus_area: "Web Development",
    assignment_type: "Coursework"
  },
  {
    title: "Inclusive Cooking Platform",
    course: "Usability Engineering", 
    year: 2,
    year_label: "Year 2",
    grade: "53%",
    description: "An accessible cooking platform designed with inclusivity in mind, featuring voice navigation, high contrast modes, and simplified interfaces for users with disabilities.",
    technologies: "HTML, CSS, JavaScript, Accessibility APIs, ARIA",
    skills: "Accessibility Design, Inclusive UX, WCAG Compliance, User Testing",
    focus_area: "Accessibility",
    assignment_type: "Coursework"
  },
  {
    title: "CityFit Urban Fitness Tracker",
    course: "Database Principles",
    year: 2,
    year_label: "Year 2", 
    grade: "58%",
    description: "A comprehensive fitness tracking application focused on urban activities, featuring route mapping, progress tracking, and community challenges.",
    technologies: "SQL, Database Design, Data Modeling, PHP",
    skills: "Database Architecture, Query Optimization, Data Relationships, Backend Development",
    focus_area: "Database Systems",
    assignment_type: "Coursework"
  },
  {
    title: "ControlCal Calendar Management",
    course: "Data Structures & Algorithms",
    year: 2,
    year_label: "Year 2",
    grade: "50%",
    description: "An advanced calendar management system implementing complex data structures and algorithms for efficient scheduling and conflict resolution.",
    technologies: "Java, Data Structures, Algorithm Implementation",
    skills: "Algorithm Design, Data Structure Implementation, Problem Solving, Java Programming",
    focus_area: "Computer Science Fundamentals",
    assignment_type: "Coursework"
  },
  {
    title: "Doggy Love Pet Care App",
    course: "Introduction to Programming",
    year: 1,
    year_label: "Year 1",
    grade: "N/A",
    description: "A beginner-friendly pet care application for dog owners, featuring feeding schedules, vet appointments, and care tips.",
    technologies: "Basic Programming Concepts, Simple UI Design",
    skills: "Programming Fundamentals, Basic Problem Solving, User Interface Basics",
    focus_area: "Programming Fundamentals",
    assignment_type: "Coursework"
  }
];

const technicalProjects = [
  {
    title: "Personal Portfolio Website",
    description: "A modern, responsive portfolio website built with Bootstrap 5, featuring a clean design, project showcase, and mobile-optimized user experience.",
    technologies: "HTML5, CSS3, JavaScript, Bootstrap 5, Node.js, Express, SQLite",
    skills: "Frontend Development, Responsive Design, Backend Development, Database Management",
    focus_area: "Full-Stack Web Development",
    github_url: "https://github.com/MaelPorts/portfolio"
  }
];

async function seedDatabase() {
  await initializeDatabase();
  
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      // Clear existing data
      db.run("DELETE FROM university_projects");
      db.run("DELETE FROM technical_projects");
      
      // Insert university projects
      const insertUniversityProject = db.prepare(`INSERT INTO university_projects 
        (title, course, year, year_label, grade, description, technologies, skills, focus_area, assignment_type) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
      
      universityProjects.forEach(project => {
        insertUniversityProject.run(
          project.title, project.course, project.year, project.year_label, 
          project.grade, project.description, project.technologies, 
          project.skills, project.focus_area, project.assignment_type
        );
      });
      insertUniversityProject.finalize();
      
      // Insert technical projects
      const insertTechnicalProject = db.prepare(`INSERT INTO technical_projects 
        (title, description, technologies, skills, focus_area, github_url) 
        VALUES (?, ?, ?, ?, ?, ?)`);
      
      technicalProjects.forEach(project => {
        insertTechnicalProject.run(
          project.title, project.description, project.technologies, 
          project.skills, project.focus_area, project.github_url
        );
      });
      insertTechnicalProject.finalize();
      
      resolve();
    });
  });
}

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    // Initialize database on first request
    await seedDatabase();
    
    if (req.method === 'GET') {
      const { type, year } = req.query;
      
      if (type === 'university') {
        const query = year ? 
          "SELECT * FROM university_projects WHERE year = ? ORDER BY year DESC, id DESC" :
          "SELECT * FROM university_projects ORDER BY year DESC, id DESC";
        
        const params = year ? [year] : [];
        
        db.all(query, params, (err, rows) => {
          if (err) {
            res.status(500).json({ error: err.message });
          } else {
            res.status(200).json(rows);
          }
        });
      } else if (type === 'technical') {
        db.all("SELECT * FROM technical_projects ORDER BY id DESC", (err, rows) => {
          if (err) {
            res.status(500).json({ error: err.message });
          } else {
            res.status(200).json(rows);
          }
        });
      } else {
        // Get all projects
        db.all("SELECT * FROM university_projects ORDER BY year DESC, id DESC", (err, universityRows) => {
          if (err) {
            res.status(500).json({ error: err.message });
          } else {
            db.all("SELECT * FROM technical_projects ORDER BY id DESC", (err, technicalRows) => {
              if (err) {
                res.status(500).json({ error: err.message });
              } else {
                res.status(200).json({
                  university: universityRows,
                  technical: technicalRows
                });
              }
            });
          }
        });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
