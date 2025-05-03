// Content script for GDVerse extension
// import { navigation_tree } from './navigation_tree.js';
// import { fillForm, testFormFill} from './formFiller.js';
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log('[GDVerse] Content script starting...');

// Add an immediate ping response listener to handle pings before modules are loaded
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'ping') {
        console.log('[GDVerse] Ping received, responding immediately');
        sendResponse({ loaded: true });
        return true;
    }

    if (request.action === 'fillForm') {
        console.log('[GDVerse] Fill form request received:', request.formData);
        try {
            const success = fillForm(request.formData);
            sendResponse({ success: success });
        } catch (error) {
            console.error('[GDVerse] Error filling form:', error);
            sendResponse({ 
                success: false, 
                error: error.message 
            });
        }
        return true; // Indicates we'll send an asynchronous response
    }

    
});

  // Example usage:
  // const result = await call_llm('pp-n8n-prompt-7bc8be', { keys: 'yolo' }); 
  
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
  const testFormFill = () => {
    console.log('FormFiller test function called');
    return 'FormFiller module is working!';
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


// // Test the module
// const testResult = testFormFill();
// console.log('[GDVerse] Test result:', testResult);


// Log when content script loads
console.log('[GDVerse] Content script loaded and ready'); 

// Helper function to find element with better matching
function findElement(text, type = 'a') {
  const elements = document.querySelectorAll(type);
  return Array.from(elements).find(element => {
    const elementText = element.textContent.trim();
    // Try exact match first
    if (elementText === text) return true;
    // Try case-insensitive match
    if (elementText.toLowerCase() === text.toLowerCase()) return true;
    // Try contains match
    if (elementText.includes(text)) return true;
    return false;
  });
}

// Get element coordinates with error handling
function getElementCoordinates(element) {
  try {
    const rect = element.getBoundingClientRect();
    return {
      x: Math.round(rect.left + (rect.width / 2)),
      y: Math.round(rect.top + (rect.height / 2))
    };
  } catch (error) {
    console.error("[GDVerse] Error getting element coordinates:", error);
    return null;
  }
}

// Second step: Find and click action button
async function findAndClickActionButton(actionButtonText) {
  console.log("[GDVerse] Finding action button:", actionButtonText);
  
  // Try multiple times to find and click the button
  for (let attempt = 1; attempt <= 3; attempt++) {
    console.log(`[GDVerse] Attempt ${attempt} to find and click button`);
    
    const actionButton = findElement(actionButtonText);
    if (!actionButton) {
      console.log(`[GDVerse] Action button not found on attempt ${attempt}`);
      if (attempt < 3) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second before retry
        continue;
      }
      return false;
    }

    // Make sure element is visible and clickable
    const style = window.getComputedStyle(actionButton);
    if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
      console.log(`[GDVerse] Button found but not visible on attempt ${attempt}`);
      if (attempt < 3) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        continue;
      }
      return false;
    }

    // Try to scroll element into view
    try {
      actionButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
      await new Promise(resolve => setTimeout(resolve, 500)); // Wait for scroll
    } catch (error) {
      console.error("[GDVerse] Error scrolling to button:", error);
    }

    // Get coordinates
    const coordinates = getElementCoordinates(actionButton);
    if (!coordinates) {
      console.error(`[GDVerse] Failed to get coordinates on attempt ${attempt}`);
      if (attempt < 3) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        continue;
      }
      return false;
    }

    // Try CDP click
    try {
      const response = await new Promise((resolve) => {
        chrome.runtime.sendMessage({
          action: 'cdpClick',
          coordinates: coordinates
        }, response => {
          if (chrome.runtime.lastError) {
            console.error("[GDVerse] Error sending CDP click:", chrome.runtime.lastError);
            resolve({ success: false, error: chrome.runtime.lastError });
          } else {
            resolve(response || { success: false, error: "No response from CDP click" });
          }
        });
      });

      if (response.success) {
        console.log("[GDVerse] Successfully clicked button");
        return true;
      }

      // If CDP click failed, try native click as fallback
      try {
        actionButton.click();
        console.log("[GDVerse] Used native click as fallback");
        return true;
      } catch (clickError) {
        console.error("[GDVerse] Native click failed:", clickError);
      }

      if (attempt < 3) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        continue;
      }
    } catch (error) {
      console.error(`[GDVerse] Error in click attempt ${attempt}:`, error);
      if (attempt < 3) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        continue;
      }
    }
  }

  return false;
}

// Send CDP click message with error handling
async function sendCdpClick(coordinates) {
  if (!coordinates) {
    console.error("[GDVerse] Invalid coordinates for CDP click");
    return false;
  }

  console.log("[GDVerse] Sending CDP click with coordinates:", coordinates);
  try {
    const response = await new Promise((resolve) => {
      chrome.runtime.sendMessage({
        action: 'cdpClick',
        coordinates: coordinates
      }, response => {
        if (chrome.runtime.lastError) {
          console.error("[GDVerse] Error sending CDP click:", chrome.runtime.lastError);
          resolve({ success: false, error: chrome.runtime.lastError });
        } else {
          resolve(response || { success: false, error: "No response from CDP click" });
        }
      });
    });

    console.log("[GDVerse] CDP click response:", response);
    return response.success;
  } catch (error) {
    console.error("[GDVerse] Error in sendCdpClick:", error);
    return false;
  }
}

// Listen for messages from background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("[GDVerse] Content script received message:", request);
  
  if (request.action === 'clickParentLink') {
    console.log("[GDVerse] Clicking parent link:", request.parentText);
    const element = findElement(request.parentText);
    if (element) {
      const coordinates = getElementCoordinates(element);
      if (coordinates) {
        sendCdpClick(coordinates)
          .then(success => {
            console.log("[GDVerse] Clicked parent link:", request.parentText, "success:", success);
            sendResponse({ success });
          })
          .catch(error => {
            console.error("[GDVerse] Error clicking parent link:", error);
            sendResponse({ success: false, error: error.message });
          });
      } else {
        console.error("[GDVerse] Failed to get coordinates for parent link");
        sendResponse({ success: false, error: "Failed to get coordinates" });
      }
    } else {
      console.log("[GDVerse] Parent link not found:", request.parentText);
      sendResponse({ success: false, error: "Parent link not found" });
    }
    return true; // Keep the message channel open for async response
  }
  
  if (request.action === 'clickActionButton') {
    console.log("[GDVerse] Clicking action button:", request.actionButtonText);
    findAndClickActionButton(request.actionButtonText)
      .then(success => {
        console.log("[GDVerse] Action button click result:", success);
        sendResponse({ success });
      })
      .catch(error => {
        console.error("[GDVerse] Error clicking action button:", error);
        sendResponse({ success: false, error: error.message });
      });
    return true; // Keep the message channel open for async response
  }

  if (request.action === 'readForm') {
    console.log("[GDVerse] Reading form data");
    const formData = readForm(request.formData);
    console.log("[GDVerse] Form data read:", formData);
    sendResponse({ success: true, formData });
    return true;
  }

  if (request.action === 'switchTab') {
    console.log("[GDVerse] Attempting to switch to tab:", request.tabText);
    try {
      const success = switchToTab(request.tabText);
      console.log("[GDVerse] Tab switch result:", success);
      sendResponse({ success });
    } catch (error) {
      console.error("[GDVerse] Error during tab switch:", error);
      sendResponse({ success: false, error: error.message });
    }
    return true; // Keep the message channel open for async response
  }
}); 

// Function to read form values following same structure as fillForm
function readForm(formData) {
  if (!formData || !formData.elements || !Array.isArray(formData.elements)) {
    console.error('Invalid form data provided');
    return false;
  }

  let success = true;
  formData.elements.forEach(element => {
    let elementSuccess = false;
    
    switch (element.element_type) {
      case 'input':
        const inputElement = document.querySelector(element.selector);
        if (inputElement) {
          element.value = inputElement.value;
          elementSuccess = true;
        }
        break;
      case 'select':
        const selectElement = document.querySelector(element.selector);
        if (selectElement) {
          element.value = selectElement.value;
          elementSuccess = true;
        }
        break;
      default:
        console.warn(`Unsupported element type: ${element.element_type}`);
        elementSuccess = false;
    }

    if (!elementSuccess) {
      success = false;
    }
  });

  return formData;
}

// Example usage:
// const currentFormData = readForm(testFormData);
// console.log('Current form values:', currentFormData); 

// Function to switch tabs
function switchToTab(tabText) {
  console.log("[GDVerse] switchToTab called with text:", tabText);
  const tabs = document.querySelectorAll('.TabStrip .TabItem a');
  console.log("[GDVerse] Found tabs:", tabs.length);
  
  for (const tab of tabs) {
    console.log("[GDVerse] Checking tab:", tab.innerText);
    if (tab.innerText === tabText) {
      console.log("[GDVerse] Found matching tab, clicking...");
      tab.click();
      return true;
    }
  }
  
  console.log("[GDVerse] No matching tab found for:", tabText);
  return false;
} 