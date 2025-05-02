// Content script for GDVerse extension
console.log('[GDVerse] Content script starting...');

// Add an immediate ping response listener to handle pings before modules are loaded
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'ping') {
        console.log('[GDVerse] Ping received, responding immediately');
        sendResponse({ loaded: true });
        return true;
    }
});

// Get URL for formFiller module
const formFillerUrl = chrome.runtime.getURL('formFiller.js');

// Use dynamic import with the URL variable
import(formFillerUrl)
    .then(FormFillerModule => {
        console.log('[GDVerse] FormFiller module imported successfully');
        
        // Initialize module
        const FormFiller = FormFillerModule.default.init();
        console.log('[GDVerse] FormFiller initialized');
        
        // Test the module
        const testResult = FormFiller.testModule();
        console.log('[GDVerse] Test result:', testResult);

        // Test form filling with sample data
        const testFormData = {
            "form_id": "child_detail_form",
            "form_name": "Child Detail",
            "form_description": "Captures details about the child including name, DOB, health, dependency, and family info.",
            "form_type": "simple_form",
            "elements": [
                {
                    "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__FirstName",
                    "element_type": "input",
                    "input_type": "text",
                    "label": "Name (first/last)",
                    "value": "Sivi",
                    "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__FirstName",
                    "attributes": {
                        "maxlength": 50,
                        "required": true
                    }
                },
                {
                    "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__LastName",
                    "element_type": "input",
                    "input_type": "text",
                    "label": "Name (first/last)",
                    "value": "Klein",
                    "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__LastName",
                    "attributes": {
                        "maxlength": 50,
                        "required": true
                    }
                },
                {
                    "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__DateOfBirth",
                    "element_type": "input",
                    "input_type": "text",
                    "label": "Date of Birth",
                    "value": "",
                    "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__DateOfBirth",
                    "attributes": {
                        "maxlength": 10,
                        "required": false
                    }
                },
                {
                    "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__Gender",
                    "element_type": "select",
                    "label": "Gender",
                    "value": "",
                    "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__Gender",
                    "options": [
                        { "label": "Male", "value": "Male" },
                        { "label": "Female", "value": "Female" },
                        { "label": "Non-binary", "value": "NonBinary" },
                        { "label": "Prefer not to specify", "value": "Unspecified" }
                    ]
                },
                {
                    "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__SpecialNeeds",
                    "element_type": "select",
                    "label": "Special Needs?",
                    "value": "False",
                    "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__SpecialNeeds",
                    "options": [
                        { "label": "No", "value": "False" },
                        { "label": "Yes", "value": "True" }
                    ]
                },
                {
                    "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__InGoodHealth",
                    "element_type": "select",
                    "label": "In Good Health?",
                    "value": "False",
                    "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__InGoodHealth",
                    "options": [
                        { "label": "No", "value": "False" },
                        { "label": "Yes", "value": "True" }
                    ]
                },
                {
                    "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__FinanciallyDependent",
                    "element_type": "select",
                    "label": "Is Financially Dependent?",
                    "value": "",
                    "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__FinanciallyDependent",
                    "options": [
                        { "label": "No", "value": "False" },
                        { "label": "Yes", "value": "True" }
                    ]
                },
                {
                    "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__MaritalStatus",
                    "element_type": "select",
                    "label": "Marital Status",
                    "value": "Single",
                    "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__MaritalStatus",
                    "options": [
                        { "label": "Single", "value": "Single" },
                        { "label": "Married", "value": "Married" },
                        { "label": "Separated", "value": "Separated" },
                        { "label": "Divorced", "value": "Divorced" },
                        { "label": "Domestic Partnership", "value": "Partnership" },
                        { "label": "Widowed", "value": "Widowed" }
                    ]
                },
                {
                    "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__ParentDropDownList",
                    "element_type": "select",
                    "label": "Parent",
                    "value": "",
                    "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__ParentDropDownList",
                    "options": [
                        { "label": "Daniel Klein", "value": "c7340dbd-d478-4b8a-87b2-4849f827bce4|Person" },
                        { "label": "Lisa Klein", "value": "c7340dbd-d478-4b8a-87b2-4849f827bce4|Spouse" },
                        { "label": "Daniel and Lisa Klein", "value": "c7340dbd-d478-4b8a-87b2-4849f827bce4|Joint" }
                    ]
                },
                {
                    "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__PreviousMarriage",
                    "element_type": "select",
                    "label": "From Previous Marriage?",
                    "value": "",
                    "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__PreviousMarriage",
                    "options": [
                        { "label": "No", "value": "False" },
                        { "label": "Yes", "value": "True" }
                    ]
                },
                {
                    "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__Citizenship",
                    "element_type": "select",
                    "label": "Citizenship",
                    "value": "",
                    "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__Citizenship",
                    "options": [
                        { "label": "U.S. Citizen", "value": "USCitizen" },
                        { "label": "Resident Alien", "value": "ResidentAlien" },
                        { "label": "Non-Resident Alien", "value": "NonResidentAlien" }
                    ]
                }
            ]
        };

        console.log('[GDVerse] Testing form fill with sample data...');
        const fillResult = FormFiller.fillForm(testFormData);
        console.log('[GDVerse] Form fill test result:', fillResult);

        // Get needed functions
        const { fillForm } = FormFiller;

        // Listen for messages from the extension
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

        // Log when content script loads
        console.log('[GDVerse] Content script loaded and ready');
    })
    .catch(error => {
        console.error('[GDVerse] Error loading FormFiller module:', error);
    }); 