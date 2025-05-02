document.addEventListener('DOMContentLoaded', () => {
  const fillFormsBtn = document.getElementById('fillForms');
  const manageDataBtn = document.getElementById('manageData');
  const userDataSection = document.getElementById('userData');
  const userDataForm = document.getElementById('userDataForm');
  const statusMessage = document.getElementById('statusMessage');

  // Handle Smart Fill button click
  fillFormsBtn.addEventListener('click', async () => {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      const response = await chrome.tabs.sendMessage(tab.id, { action: 'fillForms' });
      
      if (response.status === 'success') {
        showStatus('success', response.message);
      } else {
        showStatus('error', 'Failed to fill forms');
      }
    } catch (error) {
      showStatus('error', 'Error: ' + error.message);
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
      showStatus('success', 'Data saved successfully');
    } catch (error) {
      showStatus('error', 'Failed to save data');
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
  function showStatus(type, message) {
    statusMessage.textContent = message;
    statusMessage.className = `status ${type}`;
    setTimeout(() => {
      statusMessage.textContent = '';
      statusMessage.className = 'status';
    }, 3000);
  }
}); 