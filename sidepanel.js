// Import the processMeetingNotes function
import { processMeetingNotes } from './background.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('[GDVerse] Sidepanel loaded');
  
  const fillFormsBtn = document.getElementById('fillForms');
  const manageDataBtn = document.getElementById('manageData');
  const userDataSection = document.getElementById('userData');
  const userDataForm = document.getElementById('userDataForm');
  const statusMessage = document.getElementById('statusMessage');

  // Handle Smart Fill button click
  fillFormsBtn.addEventListener('click', async () => {
    console.log('[GDVerse] Smart Fill button clicked');
    try {
      showStatus('Processing meeting notes...', 'info');
      console.log('[GDVerse] Calling processMeetingNotes...');
      await processMeetingNotes();
      console.log('[GDVerse] processMeetingNotes completed successfully');
      showStatus('Successfully processed meeting notes!', 'success');
    } catch (error) {
      console.error('[GDVerse] Error in processMeetingNotes:', error);
      showStatus('Error: ' + error.message, 'error');
    }
  });

  // Handle Manage Data button click
  manageDataBtn.addEventListener('click', () => {
    userDataSection.style.display = userDataSection.style.display === 'none' ? 'block' : 'none';
  });

  // Handle form submission
  userDataForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(userDataForm);
    const data = Object.fromEntries(formData.entries());
    
    try {
      await chrome.storage.local.set({ userData: data });
      showStatus('Data saved successfully', 'success');
    } catch (error) {
      showStatus('Failed to save data', 'error');
    }
  });

  // Load saved data
  chrome.storage.local.get(['userData'], (result) => {
    if (result.userData) {
      Object.entries(result.userData).forEach(([key, value]) => {
        const element = document.getElementById(key);
        if (element) {
          element.value = value;
        }
      });
    }
  });

  // Helper function to show status messages
  function showStatus(message, type = 'info') {
    // Create a new status element
    const statusElement = document.createElement('div');
    statusElement.textContent = message;
    statusElement.className = `status ${type}`;
    
    // Add timestamp
    const timestamp = new Date().toLocaleTimeString();
    const timestampElement = document.createElement('span');
    timestampElement.textContent = ` [${timestamp}]`;
    timestampElement.style.color = '#666';
    timestampElement.style.fontSize = '0.8em';
    statusElement.appendChild(timestampElement);
    
    // Add to status container
    statusMessage.appendChild(statusElement);
    
    // Scroll to bottom
    statusMessage.scrollTop = statusMessage.scrollHeight;
    
    // Remove old messages after 10 seconds
    setTimeout(() => {
      statusElement.style.opacity = '0';
      statusElement.style.transition = 'opacity 0.5s ease-out';
      setTimeout(() => {
        if (statusElement.parentNode === statusMessage) {
          statusMessage.removeChild(statusElement);
        }
      }, 500);
    }, 10000);
  }

  // Add message listener for form confirmation and status updates
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'showFormConfirmation') {
      const confirmationSection = document.getElementById('formConfirmation');
      const confirmationMessage = confirmationSection.querySelector('.confirmation-message');
      const confirmButton = document.getElementById('confirmForms');
      
      // Show the confirmation section
      confirmationSection.style.display = 'block';
      confirmationMessage.textContent = message.message;
      
      // Add click handler for the confirm button
      confirmButton.onclick = () => {
        // Send confirmation back to background script
        chrome.runtime.sendMessage({ action: 'formConfirmationReceived' });
        // Hide the confirmation section
        confirmationSection.style.display = 'none';
      };
    } else if (message.action === 'updateStatus') {
    }
  });
}); 