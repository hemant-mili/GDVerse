// Listen for messages from the side panel
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'fillForms') {
    // Handle form filling logic here
    sendResponse({ status: 'success', message: 'Forms filled successfully' });
  }
}); 