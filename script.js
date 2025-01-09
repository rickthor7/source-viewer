document.getElementById("viewSourceBtn").addEventListener("click", async () => {
  const urlInput = document.getElementById("urlInput").value;
  const sourceCodeDisplay = document.getElementById("sourceCode");

  if (!urlInput) {
    sourceCodeDisplay.textContent = "⚠️ Please enter a valid URL.";
    return;
  }

  try {
    // Adding proxy to bypass CORS
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const response = await fetch(proxyUrl + urlInput);

    if (!response.ok) {
      throw new Error(`Failed to fetch the URL: ${response.statusText}`);
    }

    const htmlText = await response.text();
    sourceCodeDisplay.textContent = htmlText;
  } catch (error) {
    sourceCodeDisplay.textContent = `❌ Error: ${error.message}`;
  }
});
