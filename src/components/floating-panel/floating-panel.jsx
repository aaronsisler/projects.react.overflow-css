import React from "react";

import "./floating-panel.scss";

const FloatingPanel = () => (
  <div className="floating-panel">
    <div className="floating-panel__header">
      <div className="floating-panel__header-title">Floating</div>
      <table className="floating-panel__totals-table">
        <tbody>
          <tr>
            <td>Totals</td>
            <td>Row</td>
            <td>Is</td>
            <td>Here</td>
          </tr>
        </tbody>
      </table>
    </div>
    <table className="floating-panel__table">
      <tbody>
        {[...Array(10).keys()].map(index => (
          <tr key={index}>
            <td>Ticker</td>
            <td>Long name</td>
            <td>CUSIP</td>
            <td>Dollars held</td>
          </tr>
        ))}
        <tr>
          <td>Last</td>
          <td>Row</td>
          <td>Is</td>
          <td>Here</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default FloatingPanel;
