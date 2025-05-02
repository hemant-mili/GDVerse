// Background script for GDVerse extension
console.log('[GDVerse] Background script starting...');

// Listen for extension installation
chrome.runtime.onInstalled.addListener(() => {
    console.log('[GDVerse] Extension installed/updated');
});

// Listen for messages from content scripts or popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('[GDVerse] Message received:', request.action);
    
    if (request.action === 'fillForm') {
        console.log('[GDVerse] Processing fillForm response:', request);
        sendResponse({ 
            success: request.success,
            action: 'fillForm',
            timestamp: request.timestamp,
            error: request.error
        });
        return true;
    }
    return false;
});

// Handle side panel opening
chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error(error));

// Listen for extension icon click and side panel opening
chrome.action.onClicked.addListener((tab) => {
    console.log('[GDVerse] Extension icon clicked, opening side panel...');
    chrome.sidePanel.open({ windowId: tab.windowId });
}); 