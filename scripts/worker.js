chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, { windowId }) => {
  const tabs = await chrome.tabs.query({ windowId });
  console.log(tabs);
});