/*global chrome*/
import React, { useEffect, useState } from 'react';

function App() {
  const [url, setUrl] = useState('');

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const currentTab = tabs[0];
      const currentUrl = currentTab.url;
      setUrl(currentUrl);
    });
  }, []);

  return (
    <div className="container">
      <h1>URL Extractor</h1>
      <p>Current URL: {url}</p>
    </div>
  );
}

export default App;