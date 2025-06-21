

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

const projectsSection = document.querySelector('#Projects');
if (projectsSection) {
  const ul = document.createElement('ul');

  
  // Fetch projects from backend API
  fetch('http://localhost:3001/api/projects')
    .then(res => res.json())
    .then(projects => {
      projects.forEach(proj => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${proj.title}</strong>: ${proj.description}`;
        ul.appendChild(li);
      });
      projectsSection.appendChild(ul);
    })
    .catch(err => {
      ul.innerHTML = '<li>Failed to load projects.</li>';
      projectsSection.appendChild(ul);
      console.error('Error fetching projects:', err);
    });
}