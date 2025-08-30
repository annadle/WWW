import { useState } from "react";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

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
          files: ["content.js"], // Must be present in /dist
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
    <div>
      <h1>Welcome to FontShift</h1>
      <div className="dropdown">
        <button className="dropbtn" onClick={() => setOpen(!open)}>
          Choose your font
        </button>
        {open && (
          <div className="dropdown-content">
            <button
              onClick={() => fontChange("open-dyslexic")}
              style={{ fontFamily: "OpenDyslexic, sans-serif", fontSize: "14px"}}
            >
              Open Dyslexic
            </button>
            <button onClick={() => fontChange("arial")}
              style={{ fontFamily: "Arial, sans-serif", fontSize: "20px"}}
              >Arial
            </button>
            <button onClick={() => fontChange("default")}
              style={{ fontSize: "19px"}}
              >Default
              </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
