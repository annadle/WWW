import { useEffect } from "react";

export default function useFont() {
    useEffect(() => {
        const fontUrl = chrome.runtime.getURL("fonts/OpenDyslexic3-Regular.ttf");

        const style = document.createElement("style");
        style.textContent = `
      @font-face {
        font-family: 'OpenDyslexic';
        src: url('${fontUrl}') format('truetype');
        font-weight: normal;
        font-style: normal;
      }
    `;
        document.head.appendChild(style);

        return () => {
            style.remove();
        };
    }, []);
}
