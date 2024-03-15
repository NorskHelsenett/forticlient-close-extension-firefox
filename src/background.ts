function checkAndCloseTab(tab: browser.tabs.Tab): void {
  if (
    tab?.url?.indexOf("http://localhost:8020") !== -1 ||
    tab?.url?.indexOf("http://127.0.0.1:8020") !== -1
  ) {
    browser.tabs
      .remove(tab.id ? tab.id : -1)
      .catch((error) => console.error(error))
      .then(() => {
        console.log(`tab closed with title ${tab?.title} url ${tab?.url}`);
      });
  } else {
    console.log(`tab not closed, url ${tab.url}`);
  }
}

browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status !== "complete") {
    return;
  }
  browser.tabs
    .query({
      url: ["http://*/*"],
    })
    .then((tabs: browser.tabs.Tab[]) => {
      tabs.forEach((tab) => {
        checkAndCloseTab(tab);
      });
    });
});
