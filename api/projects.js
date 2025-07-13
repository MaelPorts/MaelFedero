// Serverless function for project data - works without persistent storage
// This approach stores data in memory and is recreated on each function call

// Project data
const universityProjects = [
  {
    id: 1,
    title: "Evaluating ADHD Technologies (Final Year Project)",
    course: "Final Year Project",
    year: 3,
    year_label: "Year 3",
    grade: "71%",
    description: "Individually researched and evaluated ADHD-supportive technologies to identify productivity-enhancing features. Explored barriers in usability for neurodivergent users and provided practical design recommendations.",
    technologies: "Trello, Google Forms, Research Methodologies",
    skills: "Research, Analytical Thinking, Problem-solving, Empathy, Independent Work",
    focus_area: "UX Research / Accessibility / HCI",
    assignment_type: "Final Year Project",
    download_url: "./assets/Fyp"
  },
  {
    id: 2,
    title: "Library Management System",
    course: "Software Engineering Culture", 
    year: 3,
    year_label: "Year 3",
    grade: "64%",
    description: "Group project to enhance an existing library management system. Assessed the current architecture and implemented improvements focused on scalability, data integrity, and maintainability. Delivered technical documentation outlining DevOps-oriented recommendations for deployment and system reliability.",
    technologies: "GitHub Actions, CI/CD Planning, ERDs, Docker",
    skills: "Teamwork, Analytical Thinking, Documentation, Strategic Planning, Problem-solving",
    focus_area: "DevOps Principles, Infrastructure Improvement, System Performance",
    assignment_type: "Coursework",
    github_url: "https://github.com/54d1q/soft-cult",
    download_url: "./assets/Software Engineering Culture.docx"
  },
  {
    id: 3,
    title: "Inclusive Cooking Platform",
    course: "Usability Engineering", 
    year: 3,
    year_label: "Year 3",
    grade: "60%",
    description: "Redesigned and evaluated a cooking app for vulnerable users (ADHD, dyslexia, dyspraxia). Conducted heuristic analysis, created targeted personas, and ran think-aloud usability tests.",
    technologies: "Figma, Nielsen Heuristics, HTA, Usability Protocols",
    skills: "User Research, Critical Thinking, Empathy, Attention to Detail, Communication",
    focus_area: "Neurodivergent Accessibility, Inclusive Design",
    assignment_type: "Coursework",
    download_url: "./assets/Usability Engineering coursework.docx"
  },
  {
    id: 4,
    title: "Project Management Framework",
    course: "Project Management",
    year: 3,
    year_label: "Year 3",
    grade: "56%", 
    description: "Development and implementation of a comprehensive project management framework tailored for software development teams.",
    technologies: "Project Management Tools, Documentation, Process Design",
    skills: "Project Planning, Team Management, Risk Assessment, Process Optimization",
    focus_area: "Project Management",
    assignment_type: "Coursework",
    download_url: "./assets/Projet Management.docx"
  },
  {
    id: 5,
    title: "Recipe Sharing Mobile App",
    course: "Web Programming",
    year: 2,
    year_label: "Year 2",
    grade: "56%",
    description: "Group project to build a full-stack app with authentication, CRUD operations, and user-specific favourites.",
    technologies: "Flutter, Dart",
    skills: "Teamwork, Collaboration, Communication, Problem-solving, Agile Practices",
    focus_area: "Web Development",
    assignment_type: "Coursework",
    github_url: "https://github.com/MaelPorts/recipe-management-app"
  },
  {
    id: 6,
    title: "CityFit Database Management",
    course: "Database Principles",
    year: 2,
    year_label: "Year 2", 
    grade: "58%",
    description: "Solo project developing a PostgreSQL-backed system for inventory and client management tailored to marine operations. Designed the entire system from scratch: created ER diagrams, built a normalised database, and implemented complex SQL queries to manage transactional data.",
    technologies: "PostgreSQL, Lucid Chart",
    skills: "Independent Work, System Design, Attention to Detail, Logical Reasoning",
    focus_area: "Relational DB Design, Complex Queries, ERD, Schema Development",
    assignment_type: "Coursework",
    github_url: "https://github.com/MaelPorts/CityFit"
  },
  {
    id: 7,
    title: "ControlCal Calendar Management",
    course: "Data Structures & Algorithms",
    year: 2,
    year_label: "Year 2",
    grade: "50%",
    description: "Solo web development coursework project focused on creating a workout scheduling app. Implemented functionality allowing users to define workout routines with multiple sets and rest periods, including timer functionality and backend data storage.",
    technologies: "JavaScript, HTML/CSS, Express, SQLite",
    skills: "Independent Work, Problem-solving, Thinking Outside the Box, Attention to Detail",
    focus_area: "User-defined Routines, Backend Integration, Timer Logic",
    assignment_type: "Coursework",
    github_url: "https://github.com/MaelPorts/ControlCal"
  },
  {
    id: 8,
    title: "Doggy Love",
    course: "Application Engineering",
    year: 1,
    year_label: "Year 1",
    grade: "60%",
    description: "A beginner-friendly pet care application for dog owners, featuring feeding schedules, vet appointments, and care tips.",
    technologies: "HTML/CSS, JavaScript",
    skills: "User Authentication, Basic Problem Solving",
    focus_area: "Programming Fundamentals",
    assignment_type: "Coursework"
  }
];

const technicalProjects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing professional experience, academic achievements, and technical projects. The application features a clean Bootstrap-based design with dynamic project management, serverless backend integration, and mobile-optimized user experience. Users can explore technical and academic projects organized by categories and years, with detailed project information including technologies used, skills developed, and grade achievements. The portfolio includes an engaging about section, academic performance showcase, and seamless navigation between different project types.",
    technologies: "HTML5, CSS3, JavaScript (ES6+), Bootstrap 5, Node.js, Express, SQLite, Vercel, Git & GitHub",
    skills: "Frontend Development, Responsive Design, Backend Development, Database Management, Serverless Deployment",
    focus_area: "Full-Stack Web Development",
    github_url: "https://github.com/MaelPorts/PersonalPortfolio",
    live_demo_url: "https://mael-federo.vercel.app"
  },
  {
    id: 2,
    title: "BShark E-Commerce Site",
    description: "Developed an E-Commerce website for a friend of mine who sells clothes",
    technologies: "React, React Router, Supabase, TypeScript",
    skills: "E-commerce Development, React Development, Database Integration, TypeScript Programming",
    focus_area: "E-commerce Solutions",
    github_url: "https://github.com/MaelPorts/BShark",
    live_demo_url: "https://b-shark-8y6l32nd6-mael-federos-projects.vercel.app/"
  },
  {
    id: 3,
    title: "BMI Calculator",
    description: "A clean and responsive BMI (Body Mass Index) calculator web application that allows users to input their height and weight to calculate their BMI and receive health category classification. The app features a modern, centered design with input validation and provides immediate feedback on BMI results including health categories (Underweight, Normal Weight, Overweight, Obese).",
    technologies: "HTML5, CSS3, Vanilla JavaScript",
    skills: "JavaScript Programming, DOM Manipulation, Input Validation, Responsive Design",
    focus_area: "Health Applications",
    github_url: "https://github.com/MaelPorts/Bmi-calculator",
    live_demo_url: "https://maelports.github.io/Bmi-calculator/"
  },
  {
    id: 4,
    title: "To-Do List App",
    description: "A clean and responsive task management web application that allows users to create, manage, and track their daily tasks. The app features a modern, centered design with the ability to add new tasks, mark them as complete/incomplete, and delete them when no longer needed. Tasks are visually distinguished with tick/untick icons and strikethrough styling for completed items. The application includes persistent storage functionality, automatically saving tasks to localStorage so users can maintain their task list across browser sessions.",
    technologies: "React 18, Vite, Tailwind CSS, JavaScript ES6+, localStorage API, HTML5",
    skills: "React Development, State Management, Local Storage, Task Management, Modern Build Tools",
    focus_area: "Task Management Applications",
    github_url: "https://github.com/MaelPorts/To-Do",
    live_demo_url: "https://maelports.github.io/To-Do/"
  }
];

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
    if (req.method === 'GET') {
      const { type, year } = req.query;
      
      if (type === 'university') {
        let projects = universityProjects;
        if (year) {
          projects = universityProjects.filter(project => project.year === parseInt(year));
        }
        res.status(200).json(projects);
      } else if (type === 'technical') {
        res.status(200).json(technicalProjects);
      } else {
        // Get all projects
        res.status(200).json({
          university: universityProjects,
          technical: technicalProjects
        });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: error.message });
  }
}
