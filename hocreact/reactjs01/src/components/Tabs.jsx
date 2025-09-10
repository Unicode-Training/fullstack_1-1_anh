import React, { useState } from "react";
import "../assets/style.css";
export default function Tabs() {
  const [tab, setTab] = useState("tab_1");
  const handleChangeTab = (value) => {
    setTab(value);
  };
  return (
    <div className="tabs">
      <nav>
        <button
          className={tab === "tab_1" ? "active" : ""}
          onClick={() => handleChangeTab("tab_1")}
        >
          Tab 1
        </button>
        <button
          className={tab === "tab_2" ? "active" : ""}
          onClick={() => handleChangeTab("tab_2")}
        >
          Tab 2
        </button>
        <button
          className={tab === "tab_3" ? "active" : ""}
          onClick={() => handleChangeTab("tab_3")}
        >
          Tab 3
        </button>
      </nav>
      <div className="tab-content">
        <div className={`tab-panel ${tab === "tab_1" ? "active" : ""}`}>
          Tab 1 Content
        </div>
        <div className={`tab-panel ${tab === "tab_2" ? "active" : ""}`}>
          Tab 2 Content
        </div>
        <div className={`tab-panel ${tab === "tab_3" ? "active" : ""}`}>
          Tab 3 Content
        </div>
      </div>
    </div>
  );
}
