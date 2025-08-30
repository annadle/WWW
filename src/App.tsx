import { useState } from "react";
import "./App.css";
import useFont from "./useFont";

function App() {
  const [open, setOpen] = useState(false);

  useFont();

  const fontChange = (fontName: string) => {
    setOpen(false);

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      if (!tab || !tab.id) {
        return;
      }

      chrome.scripting.executeScript(
        {
          target: { tabId: tab.id },
          files: ["content.js"], // Must exist in /dist
        },
        () => {
          chrome.tabs.sendMessage(tab.id!, {
            action: "changeFont",
            font: fontName,
          });
        }
      );
    });
  };

  return (
    <div id="root">
      <h1>Welcome to FontShift</h1>

      <div className="dropdown">
        <button className="button-21" onClick={() => setOpen(!open)}>
          Choose your font
        </button>

        {open && (
          <div className="dropdown-content">
            <button
              className="button-21"
              onClick={() => fontChange("open-dyslexic")}
              style={{ fontFamily: "OpenDyslexic, sans-serif" }}
            >
              Open Dyslexic
            </button>
            <button
              className="button-21"
              onClick={() => fontChange("arial")}
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              Arial
            </button>
            <button className="button-21" onClick={() => fontChange("default")}>
              Default
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
