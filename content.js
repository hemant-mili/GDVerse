// Content script for Smart Autofill extension
// Main orchestration and event handling

console.log('[GDVerse] Content script starting to load...');

// Ping listener for connection verification
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'ping') {
        console.log('[GDVerse] Ping received, responding immediately');
        sendResponse({ loaded: true });
        return true;
    }
    return false;
});

// Form filling listener
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'fillForm') {
        console.log('[GDVerse] Received fillForm request:', request.formData);
        try {
            const success = fillForm(request.formData);
            console.log('[GDVerse] Form fill result:', success);
            sendResponse({ 
                success: success,
                action: 'fillForm',
                timestamp: new Date().toISOString()
            });
        } catch (error) {
            console.error('[GDVerse] Error filling form:', error);
            sendResponse({ 
                success: false,
                action: 'fillForm',
                error: error.message,
                timestamp: new Date().toISOString()
            });
        }
        return true;
    }
    return false;
});

const formFillerUrl = chrome.runtime.getURL('formFiller.js');
console.log('[GDVerse] FormFiller URL:', formFillerUrl);

// Use dynamic import with the URL variable
console.log('[GDVerse] Attempting to import FormFiller module...');
import(formFillerUrl)
    .then(FormFillerModule => {
        console.log('[GDVerse] FormFiller module imported successfully:', FormFillerModule);
        
        // Initialize module
        console.log('[GDVerse] Attempting to initialize FormFiller...');
        const FormFiller = FormFillerModule.default.init();
        console.log('[GDVerse] FormFiller initialized:', FormFiller);
        
        const { fillForm, testModule } = FormFiller;
        console.log('[GDVerse] Destructured functions:', { fillForm: !!fillForm, testModule: !!testModule });

        // Test the module
        console.log('[GDVerse] Running test function...');
        const testResult = testModule();
        console.log('[GDVerse] Test result:', testResult);

        // Log when content script loads
        console.log('[GDVerse] Content script fully loaded and ready');
    })
    .catch(error => {
        console.error('[GDVerse] Error loading modules:', error);
        console.error('[GDVerse] Error details:', {
            name: error.name,
            message: error.message,
            stack: error.stack
        });
    }); 