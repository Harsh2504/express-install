import React from "react";
import "./App.css";               // External CSS
import styles from "./Button.module.css";   // CSS Module

function App() {

  // INTERNAL CSS (style object)
  const internalStyle = {
    backgroundColor: "lightgreen",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "15px",
    fontSize: "18px",
  };

  return (
    <div style={{ width: "400px", margin: "auto", paddingTop: "30px" }}>
      <h2>React CSS Methods Demonstration</h2>

      {/* INLINE CSS */}
      <div
        style={{
          backgroundColor: "lightcoral",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "15px",
          fontSize: "18px"
        }}
      >
        This is Inline CSS
      </div>

      {/* INTERNAL CSS */}
      <div style={internalStyle}>
        This is Internal CSS (style object)
      </div>

      {/* EXTERNAL CSS */}
      <div className="external-box">
        This is External CSS (imported from styles.css)
      </div>

      {/* CSS MODULE */}
      <button className={styles.moduleButton}>
        CSS Module Button
      </button>

    </div>
  );
}

export default App;
