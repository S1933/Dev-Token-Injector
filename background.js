const rule = {
  id: 1,
  priority: 1,
  action: {
    type: "redirect",
    redirect: {
      transform: {
        queryTransform: {
          addOrReplaceParams: [{ key: "dev_token", value: "TRUE" }]
        }
      }
    }
  },
  condition: {
    urlFilter: "*",
    resourceTypes: [
      "main_frame",      // Main page loads
      "sub_frame",       // Iframes
      "script",          // JavaScript files
      "stylesheet",      // CSS files
      "xmlhttprequest"   // AJAX requests
    ]
  }
};

chrome.runtime.onInstalled.addListener(async () => {
  try {
    await chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: [1],  // Remove if exists
      addRules: [rule]
    });
    console.log('Rule installed successfully');
  } catch (error) {
    console.error('Error installing rule:', error);
  }
});