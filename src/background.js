console.log("Background script loaded successfully!");

// Listener to test if the background script is working
chrome.runtime.onInstalled.addListener(() => {
    console.log("LinkedIn Job Analyzer extension installed!");
});
