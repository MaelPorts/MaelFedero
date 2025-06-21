// This script fetches and displays projects from the backend API
// Fetch and display projects from the backend API
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