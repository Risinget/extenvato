chrome.tabs.query(
  {
    active: true,
    lastFocusedWindow: true,
  },
  function (tabs) {
    var tab = tabs[0];

    if (tab.url.startsWith("https://elements.envato.com")) {
      window.open(
        "http://localhost:3000/api/envato?url=" +
          tab.url +
          "&serial=YourID"
      );
    }
  }
);
