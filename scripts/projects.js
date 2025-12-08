// Modern Projects App - Clean and organized entry point
import { ProjectsManager } from './managers/projectsManager.js';

class ModernProjectsApp {
    constructor() {
        this.projectsManager = new ProjectsManager();
        this.init();
    }

    async init() {
        console.log('Initializing Modern Projects App...');
        await this.projectsManager.init();
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ModernProjectsApp();
});
