import browser from "webextension-polyfill";

function checkAndCloseTab(tab: browser.Tabs.Tab): void {
  if (
    tab?.url?.indexOf("http://localhost:8020") !== -1 ||
    tab?.url?.indexOf("http://127.0.0.1:8020") !== -1
  ) {
    browser.tabs
      .remove(tab.id ? tab.id : -1)
      .catch((error: unknown) => console.error(error))
      .then(() => {
        console.log(`tab closed with title ${tab?.title} url ${tab?.url}`);
      });
  } else {
    console.log(`tab not closed, url ${tab.url}`);
  }
}

browser.tabs.onUpdated.addListener((tabId: number, changeInfo: browser.Tabs.OnUpdatedChangeInfoType, tab: browser.Tabs.Tab) => {
  if (changeInfo.status !== "complete") {
    return;
  }
  browser.tabs
    .query({
      url: ["http://*/*"],
    })
    .then((tabs: browser.Tabs.Tab[]) => {
      tabs.forEach((tab) => {
        checkAndCloseTab(tab);
      });
    });
});
