import { Navigation } from './components/Navigation.js';
import { 
    PersonalInfoSection, 
    PortfolioIntroSection, 
    CVSection, 
    AcademicsSection 
} from './modules/MainSections.js';

class PortfolioApp {
    constructor() {
        this.init();
    }

    init() {
        this.renderNavigation();
        this.renderMainSections();
        this.handleNavigation();
    }

    renderNavigation() {
        // Clear existing navigation and inject new one
        const existingHeader = document.querySelector('header');
        if (existingHeader) {
            existingHeader.remove();
        }

        const navigation = new Navigation();
        const body = document.body;
        body.insertBefore(navigation.render(), body.firstChild);
    }

    renderMainSections() {
        // Clear existing main content
        const existingMain = document.querySelector('main');
        if (existingMain) {
            existingMain.remove();
        }

        // Create new main element
        const main = document.createElement('main');

        // Create and append sections
        const personalInfo = new PersonalInfoSection();
        const portfolioIntro = new PortfolioIntroSection();
        const cvSection = new CVSection();
        const academicsSection = new AcademicsSection();

        main.appendChild(personalInfo.render());
        main.appendChild(portfolioIntro.render());
        main.appendChild(cvSection.render());
        main.appendChild(academicsSection.render());

        // Insert main before footer
        const footer = document.querySelector('footer');
        document.body.insertBefore(main, footer);
    }

    handleNavigation() {
        // Smooth scrolling for anchor links
        document.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
                e.preventDefault();
                const targetId = e.target.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });

        // Handle initial hash
        const hash = window.location.hash;
        if (hash) {
            setTimeout(() => {
                const targetElement = document.querySelector(hash);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});