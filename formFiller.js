// FormFiller module for handling form filling operations
const FormFiller = (function() {
    // Private functions for handling different element types
    const fillInputElement = (element) => {
        const inputElement = document.querySelector(element.selector);
        if (!inputElement) {
            console.warn(`Element not found: ${element.selector}`);
            return false;
        }

        try {
            inputElement.value = element.value;
            // Trigger input event to ensure any listeners are notified
            inputElement.dispatchEvent(new Event('input', { bubbles: true }));
            return true;
        } catch (error) {
            console.error(`Error filling input element ${element.selector}:`, error);
            return false;
        }
    };

    const fillSelectElement = (element) => {
        const selectElement = document.querySelector(element.selector);
        if (!selectElement) {
            console.warn(`Element not found: ${element.selector}`);
            return false;
        }

        try {
            selectElement.value = element.value;
            // Trigger change event to ensure any listeners are notified
            selectElement.dispatchEvent(new Event('change', { bubbles: true }));
            return true;
        } catch (error) {
            console.error(`Error filling select element ${element.selector}:`, error);
            return false;
        }
    };

    // Test function to verify module functionality
    const testModule = () => {
        console.log('FormFiller test function called');
        return {
            status: 'success',
            message: 'FormFiller module is working correctly',
            timestamp: new Date().toISOString()
        };
    };

    // Main function to fill form based on provided JSON
    const fillForm = (formData) => {
        if (!formData || !formData.elements || !Array.isArray(formData.elements)) {
            console.error('Invalid form data provided');
            return false;
        }

        let success = true;
        formData.elements.forEach(element => {
            let elementSuccess = false;
            
            switch (element.element_type) {
                case 'input':
                    elementSuccess = fillInputElement(element);
                    break;
                case 'select':
                    elementSuccess = fillSelectElement(element);
                    break;
                default:
                    console.warn(`Unsupported element type: ${element.element_type}`);
                    elementSuccess = false;
            }

            if (!elementSuccess) {
                success = false;
            }
        });

        return success;
    };

    // Initialize the module
    const init = () => {
        console.log('FormFiller module initialized');
        return {
            fillForm,
            testModule
        };
    };

    // Public API
    return {
        init
    };
})();

// Export for use in other modules
export default FormFiller; 