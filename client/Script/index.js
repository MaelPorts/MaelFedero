// This script adds smooth scrolling to anchor links in the navigation bar
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const projects = [
  { title: "Portfolio Website", description: "A personal portfolio built with HTML, CSS, and JS." },
  { title: "Task Manager App", description: "A simple task manager using React and Node.js." }
];

const projectsSection = document.querySelector('#Projects');
if (projectsSection) {
  const ul = document.createElement('ul');
  projects.forEach(proj => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${proj.title}</strong>: ${proj.description}`;
    ul.appendChild(li);
  });
  projectsSection.appendChild(ul);
} 
