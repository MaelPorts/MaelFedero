// Service for handling all project-related API calls
export class ProjectService {
    // Use relative path for API calls - works both locally and on Vercel
    static BASE_URL = '/api';

    static async getTechnicalProjects() {
        try {
            const response = await fetch(`${this.BASE_URL}/projects?type=technical`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch technical projects from API, trying static data:', error);
            // Fallback to static JSON file
            try {
                const response = await fetch('/data/projects.json');
                const data = await response.json();
                return data.technicalProjects || [];
            } catch (fallbackError) {
                console.error('Failed to fetch technical projects from static data:', fallbackError);
                throw fallbackError;
            }
        }
    }

    static async getUniversityProjects() {
        try {
            const response = await fetch(`${this.BASE_URL}/projects?type=university`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch university projects from API, trying static data:', error);
            // Fallback to static JSON file
            try {
                const response = await fetch('/data/projects.json');
                const data = await response.json();
                return data.universityProjects || [];
            } catch (fallbackError) {
                console.error('Failed to fetch university projects from static data:', fallbackError);
                throw fallbackError;
            }
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
