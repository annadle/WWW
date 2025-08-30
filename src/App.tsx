import { useState } from "react";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1>Welcome to FontShift</h1>
      <div className="dropdown">
        <button className="dropbtn" onClick={() => setOpen(!open)}>
          <b>Choose your font</b>
        </button>
        {open && (
          <div className="dropdown-content">
            <br />
            <a href="#" style={{fontFamily: 'OpenDyslexic, sans-serif' }}>Open Dyslexic</a>
            <br />
            <a href="#">Arial</a>
          </div>
        )}
        {open && (
          <label className="toggle-switch">
            <input type="checkbox"/>
            <span className="slider"></span>
          </label>
        )}
      </div>
    </div>
  );
}

export default App;
