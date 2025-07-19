let currentTab = "";
let startTime = Date.now();

chrome.tabs.onActivated.addListener(async activeInfo => {
  const tab = await chrome.tabs.get(activeInfo.tabId);
  handleTabChange(tab.url);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    handleTabChange(tab.url);
  }
});

function handleTabChange(url) {
  const duration = Math.floor((Date.now() - startTime) / 1000); // in seconds
  const classification = classifySite(url);

  if (currentTab && duration > 1) {
    console.log(`Sending data: ${currentTab} - ${duration}s - ${classification}`);
    
    // 🔥🔥 ADD THIS FETCH CODE HERE
    fetch("http://localhost:5000/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: currentTab, duration, classification })
    })
    .then(res => res.json())
    .then(data => console.log("Data saved:", data))
    .catch(err => console.log("Error saving data:", err));
  }

  currentTab = url;
  startTime = Date.now();
}

function classifySite(url) {
  const productive = ["leetcode.com", "github.com"];
  const unproductive = ["instagram.com", "facebook.com"];

  if (productive.some(site => url.includes(site))) return "productive";
  if (unproductive.some(site => url.includes(site))) return "unproductive";
  return "neutral";
}
