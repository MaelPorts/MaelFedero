// Main Projects Manager - orchestrates all project loading and rendering
import { ProjectService } from '../services/projectService.js';
import { ProjectCard } from '../components/projectCard.js';
import { DOMHelpers } from '../utils/domHelpers.js';

export class ProjectsManager {
    constructor() {
        this.technicalContainer = null;
        this.academicContainer = null;
    }

    async init() {
        console.log('Initializing Projects Manager...');
        
        // Get container references
        this.technicalContainer = DOMHelpers.getElementById('technical-projects-container');
        this.academicContainer = DOMHelpers.getElementById('academic-projects-container');
        
        if (!this.technicalContainer || !this.academicContainer) {
            console.error('Required containers not found!');
            return;
        }

        // Load projects
        await this.loadAllProjects();
    }

    async loadAllProjects() {
        try {
            await Promise.all([
                this.loadTechnicalProjects(),
                this.loadAcademicProjects()
            ]);
        } catch (error) {
            console.error('Failed to load projects:', error);
        }
    }

    async loadTechnicalProjects() {
        if (!this.technicalContainer) return;

        DOMHelpers.showLoading(this.technicalContainer, 'Loading technical projects...');

        try {
            const projects = await ProjectService.getTechnicalProjects();
            DOMHelpers.clearContainer(this.technicalContainer);
            
            projects.forEach((project, index) => {
                const projectCard = ProjectCard.createTechnicalCard(project);
                projectCard.style.animationDelay = `${index * 0.1}s`;
                this.technicalContainer.appendChild(projectCard);
            });

        } catch (error) {
            console.error('Failed to load technical projects:', error);
            DOMHelpers.showError(this.technicalContainer, 'Failed to load technical projects');
        }
    }

    async loadAcademicProjects() {
        if (!this.academicContainer) return;

        DOMHelpers.showLoading(this.academicContainer, 'Loading academic projects...');

        try {
            const projects = await ProjectService.getUniversityProjects();
            DOMHelpers.clearContainer(this.academicContainer);
            
            this.renderAcademicProjectsByYear(projects);

        } catch (error) {
            console.error('Failed to load academic projects:', error);
            DOMHelpers.showError(this.academicContainer, 'Failed to load academic projects');
        }
    }

    renderAcademicProjectsByYear(projects) {
        const projectsByYear = ProjectService.groupProjectsByYear(projects);

        // Sort years in descending order
        const sortedYears = Object.keys(projectsByYear).sort((a, b) => {
            if (a === 'Unknown') return 1;
            if (b === 'Unknown') return -1;
            
            // Extract year numbers for proper sorting
            const yearA = parseInt(a.match(/\d+/)?.[0] || '0');
            const yearB = parseInt(b.match(/\d+/)?.[0] || '0');
            return yearB - yearA;
        });

        sortedYears.forEach(year => {
            const yearSection = ProjectCard.createYearSection(year, projectsByYear[year]);
            this.academicContainer.appendChild(yearSection);
        });
    }
}
