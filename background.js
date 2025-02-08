browser.runtime.onMessage.addListener((message) => {
  if (message.query) {
    let url = `https://www.google.com/search?q=${encodeURIComponent(message.query)}`;
    browser.tabs.create({ url });
  }
});
