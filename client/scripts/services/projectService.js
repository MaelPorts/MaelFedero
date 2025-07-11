// Service for handling all project-related API calls
export class ProjectService {
    static BASE_URL = 'http://localhost:3001/api';

    static async getTechnicalProjects() {
        try {
            const response = await fetch(`${this.BASE_URL}/technical-projects`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch technical projects:', error);
            throw error;
        }
    }

    static async getUniversityProjects() {
        try {
            const response = await fetch(`${this.BASE_URL}/university-projects`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch university projects:', error);
            throw error;
        }
    }

    static groupProjectsByYear(projects) {
        return projects.reduce((acc, project) => {
            const yearLabel = project.year_label || `Year ${project.year}`;
            if (!acc[yearLabel]) {
                acc[yearLabel] = [];
            }
            acc[yearLabel].push(project);
            return acc;
        }, {});
    }
}
