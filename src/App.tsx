import { useState } from "react";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1>Title</h1>
      <div className="dropdown">
        <button className="dropbtn" onClick={() => setOpen(!open)}>
          Choose your font
        </button>
        {open && (
          <div className="dropdown-content">
            <a href="#">Open Dyslexic</a>
            <a href="#">Arial</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
