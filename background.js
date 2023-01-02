chrome.tabs.onUpdated.addListener((_, tabInfo) => {
    if (tabInfo.status !== "complete") return;
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, ([tab]) => {
        // get the tab url
        const {
            url,
            id
        } = tab;

        // Check if the user is on F1TV website
        if (url.startsWith("https://f1tv.formula1.com/")) {
            // Extract the path
            const path = `/${url.split('/').slice(3).join('/')}`;

            // Debug log
            console.log(path);

            // Do differents action depending on the current page
            switch (path) {
                case '/':
                    console.log('Home page');

                    chrome.scripting.executeScript({
                        target: {
                            tabId: id
                        },
                        files: ['jquery.js', 'insertLogin.js']
                    }, () => {})
                    break;

                default:
                    break;
            }
        }
    });
});