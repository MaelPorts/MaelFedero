// DOM Helper utilities for common operations
export class DOMHelpers {
    
    static showLoading(container, message = 'Loading...') {
        container.innerHTML = `
            <div class="loading-spinner">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">${message}</span>
                </div>
            </div>
        `;
    }

    static showError(container, message) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="bi bi-exclamation-triangle-fill text-warning"></i>
                <h4>Unable to Load Projects</h4>
                <p>${message}</p>
            </div>
        `;
    }

    static clearContainer(container) {
        container.innerHTML = '';
    }

    static appendElements(container, elements) {
        elements.forEach(element => {
            container.appendChild(element);
        });
    }

    static getElementById(id) {
        const element = document.getElementById(id);
        if (!element) {
            console.warn(`Element with ID '${id}' not found`);
        }
        return element;
    }

    static addStaggeredAnimation(elements, baseDelay = 100) {
        elements.forEach((element, index) => {
            element.style.animationDelay = `${index * baseDelay}ms`;
        });
    }
}
