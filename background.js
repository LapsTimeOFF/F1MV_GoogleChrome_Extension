chrome.tabs.onUpdated.addListener(() => {
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, ([tab]) => {
        // and use that tab to fill in out title and url
        // console.log(tab.url);

        if (tab.url.startsWith("https://f1tv.formula1.com/")) {
            console.log(tab.url);

            const {
                url
            } = tab;
            const path = `/${url.split('/').slice(3).join('/')}`;
            console.log(path);
        }
    });
});