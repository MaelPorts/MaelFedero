// Project Card Components - handles all card creation logic
export class ProjectCard {
    
    static createTechnicalCard(project) {
        const col = document.createElement('div');
        col.className = 'col-lg-6 col-xl-4';
        
        // Parse skills - handle both string and array formats
        const skillsArray = this.parseSkills(project.skills);
        
        col.innerHTML = `
            <div class="project-card slide-up">
                <div class="project-card-header">
                    <h3 class="project-card-title">${project.title}</h3>
                    <p class="project-card-subtitle">${project.category || 'Technical Project'}</p>
                </div>
                <div class="project-card-body">
                    <p class="project-description">${project.description}</p>
                    
                    ${skillsArray.length > 0 ? `
                        <div class="skills-container">
                            <h6 class="fw-semibold mb-2">Technologies Used:</h6>
                            <div class="skills-tags">
                                ${skillsArray.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                            </div>
                        </div>
                    ` : ''}
                    
                    ${project.focus_area ? `
                        <div class="focus-area mb-3">
                            <span class="focus-badge">${project.focus_area}</span>
                        </div>
                    ` : ''}
                    
                    <div class="d-flex gap-2 mt-auto">
                        ${this.createLinkButtons(project)}
                    </div>
                </div>
            </div>
        `;
        
        return col;
    }

    static createAcademicCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card slide-up';
        
        const skillsArray = this.parseSkills(project.skills);
        
        card.innerHTML = `
            <div class="project-card-header">
                <h3 class="project-card-title">${project.title}</h3>
                <p class="project-card-subtitle">Year ${project.year || 'N/A'} • ${project.course || project.module || 'Academic Project'}</p>
            </div>
            <div class="project-card-body">
                <p class="project-description">${project.description}</p>
                
                ${skillsArray.length > 0 ? `
                    <div class="skills-container">
                        <h6 class="fw-semibold mb-2">Skills Developed:</h6>
                        <div class="skills-tags">
                            ${skillsArray.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                        </div>
                    </div>
                ` : ''}
                
                ${project.focus_area ? `
                    <div class="focus-area mb-3">
                        <span class="focus-badge">${project.focus_area}</span>
                    </div>
                ` : ''}
                
                ${project.grade ? `
                    <div class="grade-info mt-3">
                        <div class="d-flex justify-content-between align-items-center p-2 bg-light rounded">
                            <span class="fw-semibold">Grade Achieved:</span>
                            <span class="badge bg-dark fs-6">${project.grade}</span>
                        </div>
                    </div>
                ` : ''}
                
                ${project.github_url || project.download_url ? `
                    <div class="d-flex gap-2 mt-3">
                        ${this.createAcademicLinkButtons(project)}
                    </div>
                ` : ''}
            </div>
        `;
        
        return card;
    }

    static createYearSection(year, projects) {
        const section = document.createElement('div');
        section.className = 'year-section fade-in';
        
        const yearTitle = year === 'Unknown' ? 'Other Projects' : year;
        const yearIcon = year.includes('3') ? 'bi-award' : year.includes('2') ? 'bi-book' : 'bi-mortarboard';
        
        section.innerHTML = `
            <div class="year-header">
                <h2 class="year-title">
                    <i class="bi ${yearIcon}"></i>
                    ${yearTitle}
                </h2>
            </div>
        `;

        const projectsGrid = document.createElement('div');
        projectsGrid.className = 'projects-grid';
        
        projects.forEach((project, index) => {
            const projectCard = this.createAcademicCard(project);
            projectCard.style.animationDelay = `${index * 0.1}s`;
            projectsGrid.appendChild(projectCard);
        });

        section.appendChild(projectsGrid);
        return section;
    }

    // Helper methods
    static parseSkills(skills) {
        if (!skills) return [];
        
        if (Array.isArray(skills)) {
            return skills;
        } else if (typeof skills === 'string') {
            return skills.split(',').map(skill => skill.trim()).filter(skill => skill);
        }
        
        return [];
    }

    static createLinkButtons(project) {
        const buttons = [];
        
        if (project.github_url) {
            buttons.push(`
                <a href="${project.github_url}" target="_blank" class="btn btn-outline-primary btn-sm rounded-pill">
                    <i class="bi bi-github me-1"></i>Code
                </a>
            `);
        }
        
        if (project.demo_url || project.live_url) {
            buttons.push(`
                <a href="${project.demo_url || project.live_url}" target="_blank" class="btn btn-primary btn-sm rounded-pill">
                    <i class="bi bi-eye me-1"></i>Demo
                </a>
            `);
        }
        
        return buttons.join('');
    }

    static createAcademicLinkButtons(project) {
        const buttons = [];
        
        if (project.github_url) {
            buttons.push(`
                <a href="${project.github_url}" target="_blank" class="btn btn-outline-primary btn-sm rounded-pill">
                    <i class="bi bi-github me-1"></i>Code
                </a>
            `);
        }
        
        if (project.download_url) {
            buttons.push(`
                <a href="${project.download_url}" target="_blank" class="btn btn-outline-secondary btn-sm rounded-pill">
                    <i class="bi bi-download me-1"></i>Files
                </a>
            `);
        }
        
        return buttons.join('');
    }
}
