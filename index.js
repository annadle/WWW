async function sayHello() {
    let [tab] = await chrome.tabs.query({active: true}); // query active tabs and pull out the currently active tab
    chrome.scripting.executeScript({
        target: { tabId: tab.id }, //pass ID of taget tab we got from active tab
        func: () => {
            alert('Hello from my extension')
        }
    });
}
document.getElementById("myButton").addEventListener("click", sayHello)