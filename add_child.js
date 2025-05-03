(async function highlightAddChildBox() {
    const normalize = str => str.replace(/\s+/g, ' ').trim().toLowerCase();
  
    // Step 1: Expand Family Information
    const familyInfoToggle = [...document.querySelectorAll('div[onclick^="OnClickPM"]')]
      .find(div => div.onclick?.toString().includes("'FI'"));
    if (familyInfoToggle) familyInfoToggle.click();
    else return console.error("❌ Family Info toggle not found");
    await new Promise(r => setTimeout(r, 300));
  
    // Step 2: Click on 'Children' to load children page
    const childrenLink = [...document.querySelectorAll('a')]
      .find(a => normalize(a.textContent) === 'children');
    if (!childrenLink) return console.error("❌ Children link not found");
  
    childrenLink.click(); // Navigate to Children section
    console.log("⏳ Navigating to Children page...");
  
    // Step 3: Poll until Add Child button appears
    const waitForAddButton = () => new Promise(resolve => {
      const interval = setInterval(() => {
        const addButton = [...document.querySelectorAll('a')]
          .find(a => normalize(a.textContent) === 'add a child');
        if (addButton) {
          clearInterval(interval);
          resolve(addButton);
        }
      }, 300);
    });
  
    const addChildButton = await waitForAddButton();
  
    // Step 4: Draw a box around it
    addChildButton.style.outline = '3px solid orange';
    addChildButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
    console.log("✅ Highlighted 'Add a Child' button", addChildButton);
  })();  