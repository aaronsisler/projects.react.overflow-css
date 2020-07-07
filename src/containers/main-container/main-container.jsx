import React from "react";

import "./main-container.scss";
import StickyPanel from "../../components/sticky-panel";
import FloatingPanel from "../../components/floating-panel";

const MoreContainer = () => (
  <div className="main-container">
    <div className="content-container">
      <div className="side-by-side-wrapper">
        <div className="side-by-side">
          <div className="sticky">
            <StickyPanel />
          </div>
          <div className="floating">
            <div className="content">
              <FloatingPanel />
            </div>
            <div className="content">
              <FloatingPanel />
            </div>
            <div className="content">
              <FloatingPanel />
            </div>
            <div className="content">
              <FloatingPanel />
            </div>
            <div className="content">
              <FloatingPanel />
            </div>
            <div className="content">
              <FloatingPanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MoreContainer;
