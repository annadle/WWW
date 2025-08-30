console.log("✅ Content script loaded");
const style = document.createElement('style');
style.textContent = `
@font-face {
    font-family: 'OpenDyslexic';
    src: url('${chrome.runtime.getURL("fonts/OpenDyslexic3-Regular.ttf")}') format('truetype');
    font-weight: normal;
    font-style: normal;

    }
`;

document.head.appendChild(style); // append style element to <head>

chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "changeFont") {
        if (message.font === "open-dyslexic") {
            document.body.style.fontFamily = "'OpenDyslexic', Arial, sans-serif";
        } else if (message.font === "arial") {
            document.body.style.fontFamily = "Arial, sans-serif";
        }
        else if (message.font === "default") {
            document.body.style.fontFamily = "";
        }
    }

});




