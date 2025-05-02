// Background script for GDVerse extension
console.log('[GDVerse] Background script starting...');

// Listen for extension installation or update
chrome.runtime.onInstalled.addListener(() => {
    console.log('[GDVerse] Extension installed/updated');
});

// Function to check content script status
async function checkContentScriptStatus(tabId) {
    try {
        const response = await chrome.tabs.sendMessage(tabId, { action: 'ping' });
        console.log('[GDVerse] Content script ping response:', response);
        return response && response.loaded;
    } catch (error) {
        console.log('[GDVerse] Content script not loaded, will inject...');
        return false;
    }
}

// Function to ensure content script is loaded
async function ensureContentScriptLoaded(tabId) {
    const isContentScriptLoaded = await checkContentScriptStatus(tabId);
    
    if (!isContentScriptLoaded) {
        try {
            await chrome.scripting.executeScript({
                target: { tabId: tabId },
                files: ['content.js']
            });
            console.log('[GDVerse] Content script injected successfully');
            return true;
        } catch (err) {
            console.error('[GDVerse] Error injecting content script:', err);
            return false;
        }
    }
    return true;
}

// Listen for tab updates to inject content script
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.startsWith('http')) {
        console.log('[GDVerse] Tab updated, checking content script...');
        await ensureContentScriptLoaded(tabId);
    }
});

// Listener for form filling responses
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
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
chrome.action.onClicked.addListener(async (tab) => {
    console.log('[GDVerse] Extension icon clicked, ensuring content script is loaded...');
    await ensureContentScriptLoaded(tab.id);
    chrome.sidePanel.open({ windowId: tab.windowId });
}); 