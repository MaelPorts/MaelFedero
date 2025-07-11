
const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static frontend files from the client folder
app.use(express.static(path.join(__dirname, '../client')));

// SQLite database setup
const db = new sqlite3.Database('./portfolio.db', (err) => {
  if (err) {
    console.error('Could not connect to database', err);
  } else {
    console.log('Connected to SQLite database');
    initializeDatabase();
  }
});

// Initialize database tables and seed data
function initializeDatabase() {
  // Create tables
  db.serialize(() => {
    // University Projects table
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

    // Technical Projects table
    db.run(`CREATE TABLE IF NOT EXISTS technical_projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      category TEXT NOT NULL,
      description TEXT NOT NULL,
      technologies TEXT NOT NULL,
      features TEXT,
      skills TEXT,
      focus_area TEXT,
      image_url TEXT,
      github_url TEXT,
      live_url TEXT,
      demo_url TEXT,
      project_type TEXT DEFAULT 'technical',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Academic Performance table
    db.run(`CREATE TABLE IF NOT EXISTS academic_performance (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      year INTEGER NOT NULL,
      year_label TEXT NOT NULL,
      subject TEXT NOT NULL,
      grade TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Personal Information table
    db.run(`CREATE TABLE IF NOT EXISTS personal_info (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      skills TEXT,
      profile_image TEXT,
      cv_file TEXT,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Social Links table
    db.run(`CREATE TABLE IF NOT EXISTS social_links (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      platform TEXT NOT NULL,
      url TEXT NOT NULL,
      icon_path TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Check if data exists, if not, seed the database
    db.get("SELECT COUNT(*) as count FROM university_projects", (err, row) => {
      if (!err && row.count === 0) {
        seedDatabase();
      }
    });
  });
}

// Seed database with initial data
function seedDatabase() {
  console.log('Seeding database with initial data...');

  // Seed University Projects
  const universityProjects = [
    // Year 3
    {
      title: 'Evaluating ADHD Technologies (Final Year Project)',
      course: 'Final Year Project',
      year: 3,
      year_label: 'Year 3 (Final Year) - 2024/25',
      grade: '71%',
      description: 'Individually researched and evaluated ADHD-supportive technologies to identify productivity-enhancing features. Explored barriers in usability for neurodivergent users and provided practical design recommendations.',
      technologies: 'Trello, Google Forms, Hypotheses, UX Research',
      skills: 'Research, Analytical thinking, Problem-solving, Empathy, Independent work',
      focus_area: 'Accessibility, UX design, Psychology-driven evaluation',
      image_url: './assets/Fyp',
      github_url: null,
      download_url: './assets/Fyp',
      assignment_type: 'UX Research / Accessibility / HCI'
    },
    {
      title: 'Inclusive Cooking App',
      course: 'Usability Engineering',
      year: 3,
      year_label: 'Year 3 (Final Year) - 2024/25',
      grade: 'Completed',
      description: 'Redesigned and evaluated a cooking app for vulnerable users (ADHD, dyslexia, dyspraxia). Conducted heuristic analysis, created targeted personas, and ran think-aloud usability tests.',
      technologies: 'Figma, Nielsen heuristics, HTA, usability protocols',
      skills: 'User research, Critical thinking, Empathy, Attention to detail, Communication',
      focus_area: 'Neurodivergent accessibility, Inclusive design',
      image_url: './assets/projects/cooking-app.jpg',
      github_url: null,
      download_url: './client/assets/Usability Engineering coursework',
      assignment_type: 'Usability Engineering / Accessibility / HCI'
    },
    {
      title: 'Library Management System',
      course: 'Software Engineering Culture',
      year: 3,
      year_label: 'Year 3 (Final Year) - 2024/25',
      grade: '64%',
      description: 'Group project to enhance an existing library management system. Assessed the current architecture and implemented improvements focused on scalability, data integrity, and maintainability. Delivered technical documentation outlining DevOps-oriented recommendations.',
      technologies: 'GitHub Actions, CI/CD planning, ERDs, Docker',
      skills: 'Teamwork, Analytical thinking, Documentation, Strategic planning, Problem-solving',
      focus_area: 'DevOps principles, Infrastructure improvement, System performance',
      image_url: './assets/projects/library-system.jpg',
      github_url: 'https://github.com/54d1q/soft-cult',
      download_url: './client/assets/Software Engineering Cult',
      assignment_type: 'DevOps / Systems Improvement'
    },
    {
      title: 'LinkedIn Usability Study',
      course: 'Usability Testing',
      year: 3,
      year_label: 'Year 3 (Final Year) - 2024/25',
      grade: '60%',
      description: 'Comprehensive usability study analyzing LinkedIn\'s user interface and user experience patterns.',
      technologies: 'UX Research, Usability Testing, Data Analysis',
      skills: 'UX Research, Critical analysis, Data interpretation, Report writing',
      focus_area: 'Usability analysis, User experience evaluation',
      image_url: './assets/projects/linkedin-study.jpg',
      github_url: null,
      download_url: './assets/projects/linkedin-usability-report.pdf',
      assignment_type: 'Research Assignment'
    },
    {
      title: 'Project Management Study',
      course: 'Project Management',
      year: 3,
      year_label: 'Year 3 (Final Year) - 2024/25',
      grade: '56%',
      description: 'Analysis of project management methodologies and their application in software development.',
      technologies: 'Agile, Scrum, Project Planning, Risk Management',
      skills: 'Project planning, Risk assessment, Methodology analysis, Strategic thinking',
      focus_area: 'Project management methodologies, Software development lifecycle',
      image_url: './client/assets/Projet Management.docx',
      github_url: null,
      download_url: './client/assets/Projet Management.docx',
      assignment_type: 'Academic Report'
    },
    // Year 2
    {
      title: 'Recipe App',
      course: 'SETAP',
      year: 2,
      year_label: 'Year 2 - 2023/24',
      grade: 'Completed',
      description: 'Mobile application for recipe management and meal planning built with Flutter framework.',
      technologies: 'Dart, Flutter, Firebase, Mobile Development',
      skills: 'Mobile development, Cross-platform development, Database integration',
      focus_area: 'Mobile application development, User interface design',
      image_url: './assets/projects/recipe-app.jpg',
      github_url: 'https://github.com/MaelPorts/RecipeApp',
      download_url: null,
      assignment_type: 'Mobile App'
    },
    {
      title: 'UI/UX Prototypes',
      course: 'Usability Engineering',
      year: 2,
      year_label: 'Year 2 - 2023/24',
      grade: '53%',
      description: 'Series of interactive prototypes demonstrating user-centered design principles and usability best practices.',
      technologies: 'Figma, Adobe XD, Prototyping, User Testing',
      skills: 'UI/UX design, Prototyping, User testing, Design thinking',
      focus_area: 'User-centered design, Interactive prototyping',
      image_url: './assets/projects/ux-prototypes.jpg',
      github_url: null,
      download_url: './assets/projects/ux-portfolio.pdf',
      assignment_type: 'Design Assignment'
    },
    {
      title: 'Web Programming Project',
      course: 'Web Programming',
      year: 2,
      year_label: 'Year 2 - 2023/24',
      grade: '56%',
      description: 'Dynamic web application demonstrating modern web development practices.',
      technologies: 'HTML5, CSS3, JavaScript, PHP, MySQL',
      skills: 'Web development, Database integration, Full-stack development',
      focus_area: 'Dynamic web applications, Server-side programming',
      image_url: './assets/projects/web-project.jpg',
      github_url: 'https://github.com/MaelPorts/WebProgramming',
      download_url: null,
      assignment_type: 'Web Application'
    },
    {
      title: 'Database Design Project',
      course: 'Database Principles',
      year: 2,
      year_label: 'Year 2 - 2023/24',
      grade: '58%',
      description: 'Comprehensive database design and implementation for a business scenario.',
      technologies: 'MySQL, Database Design, SQL, Data Modeling',
      skills: 'Database design, SQL programming, Data modeling, System analysis',
      focus_area: 'Relational database design, Business data modeling',
      image_url: './assets/projects/database-project.jpg',
      github_url: null,
      download_url: './assets/projects/database-design.pdf',
      assignment_type: 'Database Assignment'
    },
    // Year 1
    {
      title: 'DoggyLove',
      course: 'Introduction to Programming',
      year: 1,
      year_label: 'Year 1',
      grade: 'Completed',
      description: 'First-year project focusing on fundamental programming concepts and basic web development.',
      technologies: 'HTML, CSS, Basic JavaScript',
      skills: 'Basic programming, Web fundamentals, Problem-solving',
      focus_area: 'Introduction to programming, Basic web development',
      image_url: './assets/projects/doggy-love.jpg',
      github_url: 'https://github.com/MaelPorts/DoggyLove',
      download_url: null,
      assignment_type: 'Web Project'
    }
  ];

  universityProjects.forEach(project => {
    db.run(`INSERT INTO university_projects (title, course, year, year_label, grade, description, technologies, skills, focus_area, image_url, github_url, download_url, assignment_type) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [project.title, project.course, project.year, project.year_label, project.grade, project.description, project.technologies, project.skills, project.focus_area, project.image_url, project.github_url, project.download_url, project.assignment_type]);
  });

  // Seed Technical Projects
  const technicalProjects = [
    {
      title: 'Portfolio Website',
      category: 'Full-Stack Development',
      description: 'Full-stack portfolio website showcasing professional experience and projects with dynamic content management.',
      technologies: 'HTML5, CSS3, JavaScript, Node.js, Express, SQLite',
      features: 'Responsive Design,Dynamic Content,Component-Based Architecture,Database Integration',
      skills: 'Full-stack development, Problem-solving, Database design, UI/UX design',
      focus_area: 'Web development, Portfolio showcase, Professional presentation',
      image_url: './assets/projects/portfolio-website.jpg',
      github_url: 'https://github.com/MaelPorts/PersonalPortfolio',
      live_url: '../index.html',
      demo_url: null
    },
    {
      title: 'Recipe Web App',
      category: 'Web Development',
      description: 'Group project to build a full-stack app with authentication, CRUD operations, and user-specific favourites.',
      technologies: 'Flutter, Dart',
      features: 'Authentication,CRUD Operations,User Favourites,Team Collaboration',
      skills: 'Teamwork, Collaboration, Communication, Problem-solving, Agile practices',
      focus_area: 'Software Engineering Theory and Practice',
      image_url: './assets/projects/recipe-app.jpg',
      github_url: 'https://github.com/MaelPorts/recipe-management-app',
      live_url: null,
      demo_url: null
    },
    {
      title: 'CityFit',
      category: 'Database Systems',
      description: 'Solo project developing a PostgreSQL-backed system for inventory and client management tailored to marine operations. Designed the entire system from scratch: created ER diagrams, built a normalised database, and implemented complex SQL queries.',
      technologies: 'PostgreSQL, Lucid Chart',
      features: 'ER Diagrams,Normalised Database,Complex SQL Queries,System Design',
      skills: 'Independent work, System design, Attention to detail, Logical reasoning',
      focus_area: 'Relational DB design, Complex queries, ERD, Schema development, Data redundancy, Optimisation',
      image_url: './assets/projects/cityfit.jpg',
      github_url: 'https://github.com/MaelPorts/CityFit',
      live_url: null,
      demo_url: null
    },
    {
      title: 'ControlCal',
      category: 'Web Development',
      description: 'Solo web development coursework project focused on creating a workout scheduling app. Implemented functionality allowing users to define workout routines with multiple sets and rest periods, including timer functionality and backend data storage.',
      technologies: 'JavaScript, HTML/CSS, Web Timer APIs, SQLite',
      features: 'Workout Scheduling,Timer Functionality,Backend Storage,User-defined Routines',
      skills: 'Independent work, Problem-solving, Thinking outside the box, Attention to detail',
      focus_area: 'User-defined routines, Backend integration, Timer logic',
      image_url: './assets/projects/controlcal.jpg',
      github_url: 'https://github.com/MaelPorts/ControlCal',
      live_url: null,
      demo_url: null
    },
    {
      title: 'BShark E-Commerce Site',
      category: 'E-Commerce',
      description: 'Full-featured e-commerce platform with product catalog, shopping cart, and payment integration.',
      technologies: 'React, Node.js, MongoDB, Stripe API, Express',
      features: 'Product Management,Shopping Cart,Payment Integration,User Authentication',
      skills: 'Full-stack development, E-commerce development, API integration, Payment processing',
      focus_area: 'E-commerce solutions, Online business platforms',
      image_url: './assets/projects/bshark-ecommerce.jpg',
      github_url: 'https://github.com/MaelPorts/BShark-Ecommerce',
      live_url: null,
      demo_url: 'https://bshark-demo.netlify.app'
    },
    {
      title: 'BMI Calculator',
      category: 'Health & Fitness',
      description: 'Interactive BMI calculator with health recommendations and responsive design.',
      technologies: 'JavaScript, HTML5, CSS3, Chart.js',
      features: 'BMI Calculation,Health Recommendations,Data Visualization,Responsive UI',
      skills: 'JavaScript programming, Data visualization, Health informatics, Responsive design',
      focus_area: 'Health applications, Data visualization',
      image_url: './assets/projects/bmi-calculator.jpg',
      github_url: 'https://github.com/MaelPorts/BMI-Calculator',
      live_url: null,
      demo_url: 'https://maelports.github.io/BMI-Calculator'
    },
    {
      title: 'Interactive Chessboard',
      category: 'Game Development',
      description: 'Interactive chess game with move validation and game state management.',
      technologies: 'JavaScript, Canvas API, CSS3, Game Logic',
      features: 'Move Validation,Game State Management,Interactive UI,Chess Rules Engine',
      skills: 'Game development, Algorithm implementation, Logic programming, Interactive design',
      focus_area: 'Game logic, Interactive applications',
      image_url: './assets/projects/chess-game.jpg',
      github_url: 'https://github.com/MaelPorts/Chess-Game',
      live_url: null,
      demo_url: 'https://maelports.github.io/Chess-Game'
    },
    {
      title: 'Virtual Piano',
      category: 'Music & Audio',
      description: 'Virtual piano interface with sound synthesis and keyboard interaction.',
      technologies: 'JavaScript, Web Audio API, CSS3, MIDI',
      features: 'Sound Synthesis,Keyboard Interaction,MIDI Support,Audio Effects',
      skills: 'Audio programming, Web Audio API, Music technology, Interactive interfaces',
      focus_area: 'Audio applications, Music technology',
      image_url: './assets/projects/virtual-piano.jpg',
      github_url: 'https://github.com/MaelPorts/Virtual-Piano',
      live_url: null,
      demo_url: 'https://maelports.github.io/Virtual-Piano'
    },
    {
      title: 'Task Manager',
      category: 'Productivity',
      description: 'Task management application with local storage and intuitive user interface.',
      technologies: 'React, LocalStorage, CSS3, JavaScript',
      features: 'Task Management,Local Storage,Drag & Drop,Filter & Search',
      skills: 'React development, State management, Local storage, UI/UX design',
      focus_area: 'Productivity applications, Task management',
      image_url: './assets/projects/task-manager.jpg',
      github_url: 'https://github.com/MaelPorts/Task-Manager',
      live_url: null,
      demo_url: 'https://maelports.github.io/Task-Manager'
    },
    {
      title: 'Weather Forecast App',
      category: 'Utilities',
      description: 'Real-time weather application with location-based forecasts and responsive design.',
      technologies: 'JavaScript, Weather API, CSS3, Geolocation API',
      features: 'Real-time Weather,Location Detection,5-Day Forecast,Weather Maps',
      skills: 'API integration, Geolocation services, Data fetching, Responsive design',
      focus_area: 'Weather applications, API integration',
      image_url: './assets/projects/weather-app.jpg',
      github_url: 'https://github.com/MaelPorts/Weather-App',
      live_url: null,
      demo_url: 'https://maelports.github.io/Weather-App'
    }
  ];

  technicalProjects.forEach(project => {
    db.run(`INSERT INTO technical_projects (title, category, description, technologies, features, skills, focus_area, image_url, github_url, live_url, demo_url) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [project.title, project.category, project.description, project.technologies, project.features, project.skills, project.focus_area, project.image_url, project.github_url, project.live_url || null, project.demo_url || null]);
  });

  // Seed Academic Performance
  const academicPerformance = [
    // Year 3
    { year: 3, year_label: 'Year 3 (Final Year)', subject: 'Final Year Project', grade: '71%' },
    { year: 3, year_label: 'Year 3 (Final Year)', subject: 'Software Engineering Culture', grade: '64%' },
    { year: 3, year_label: 'Year 3 (Final Year)', subject: 'Usability Testing', grade: '60%' },
    { year: 3, year_label: 'Year 3 (Final Year)', subject: 'Project Management', grade: '56%' },
    // Year 2
    { year: 2, year_label: 'Year 2 Performance', subject: 'Database Principles', grade: '58%' },
    { year: 2, year_label: 'Year 2 Performance', subject: 'Web Programming', grade: '56%' },
    { year: 2, year_label: 'Year 2 Performance', subject: 'Usability Engineering', grade: '53%' },
    { year: 2, year_label: 'Year 2 Performance', subject: 'Data Structures & Algorithms', grade: '50%' }
  ];

  academicPerformance.forEach(record => {
    db.run(`INSERT INTO academic_performance (year, year_label, subject, grade) 
            VALUES (?, ?, ?, ?)`,
      [record.year, record.year_label, record.subject, record.grade]);
  });

  // Seed Personal Info
  db.run(`INSERT INTO personal_info (name, title, description, skills, profile_image, cv_file) 
          VALUES (?, ?, ?, ?, ?, ?)`,
    [
      'Mael Federo',
      'French Native Software Engineer Graduate',
      "I'm a Full-stack engineer that specializes in creating dynamic and responsive web applications, Database Management, and back-end engineering.",
      'Full-Stack Web Development,Database Design & Management,UI/UX Research & Design,Project Management',
      './assets/Melz.png',
      './assets/CV.docx'
    ]);

  // Seed Social Links
  const socialLinks = [
    { platform: 'GitHub', url: 'https://github.com/MaelPorts', icon_path: './assets/icon/github-24.png' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/mael-federo-38629429a/', icon_path: './assets/icon/linkedin-48.png' }
  ];

  socialLinks.forEach(link => {
    db.run(`INSERT INTO social_links (platform, url, icon_path) VALUES (?, ?, ?)`,
      [link.platform, link.url, link.icon_path]);
  });

  console.log('Database seeded successfully!');
}


// Default Route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// API Routes

// Get all university projects
app.get('/api/university-projects', (req, res) => {
  db.all('SELECT * FROM university_projects ORDER BY year DESC, id ASC', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Get university projects by year
app.get('/api/university-projects/year/:year', (req, res) => {
  const year = req.params.year;
  db.all('SELECT * FROM university_projects WHERE year = ? ORDER BY id ASC', [year], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Get all technical projects
app.get('/api/technical-projects', (req, res) => {
  db.all('SELECT * FROM technical_projects ORDER BY id ASC', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Get technical projects by category
app.get('/api/technical-projects/category/:category', (req, res) => {
  const category = req.params.category;
  db.all('SELECT * FROM technical_projects WHERE category = ? ORDER BY id ASC', [category], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Get academic performance
app.get('/api/academic-performance', (req, res) => {
  db.all('SELECT * FROM academic_performance ORDER BY year DESC, id ASC', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Get personal information
app.get('/api/personal-info', (req, res) => {
  db.get('SELECT * FROM personal_info ORDER BY id DESC LIMIT 1', [], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(row);
  });
});

// Get social links
app.get('/api/social-links', (req, res) => {
  db.all('SELECT * FROM social_links ORDER BY id ASC', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Get technical project categories
app.get('/api/technical-categories', (req, res) => {
  db.all('SELECT DISTINCT category FROM technical_projects ORDER BY category', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows.map(row => row.category));
  });
});

// Legacy projects endpoint (for backward compatibility)
app.get('/api/projects', (req, res) => {
  db.all(`
    SELECT title, description, 'university' as type FROM university_projects
    UNION ALL
    SELECT title, description, 'technical' as type FROM technical_projects
    ORDER BY title
  `, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// POST routes for adding new data (for admin functionality)
app.post('/api/university-projects', (req, res) => {
  const { title, course, year, year_label, grade, description, technologies } = req.body;
  db.run(`INSERT INTO university_projects (title, course, year, year_label, grade, description, technologies) 
          VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [title, course, year, year_label, grade, description, technologies],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID, message: 'University project added successfully' });
    });
});

app.post('/api/technical-projects', (req, res) => {
  const { title, category, description, technologies, features, github_url, live_url } = req.body;
  db.run(`INSERT INTO technical_projects (title, category, description, technologies, features, github_url, live_url) 
          VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [title, category, description, technologies, features, github_url, live_url],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID, message: 'Technical project added successfully' });
    });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});