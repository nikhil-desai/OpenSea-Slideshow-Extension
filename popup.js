chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    const tab = tabs[0];
    const url = new URL(tab.url);
    const collectionId = extractCollectionIdFromURL(url);
    chrome.tabs.create({
        url: `https://opensea.io/collection/${collectionId}?mode=fullscreen`
    });
});

function extractCollectionIdFromURL(url) {
    const regex = /^https:\/\/opensea\.io\/collection\/(.*)/;
    const match = url.href.match(regex);
    if (match && match[1]) {
        return match[1];
    }
    return null;
}
