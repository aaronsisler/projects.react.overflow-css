import React from "react";

import "./sticky-panel.scss";

const StickyPanel = () => (
  <div className="sticky-panel">
    <div className="sticky-panel__header">
      <div className="sticky-panel__header-title">Sticky</div>
      <table className="sticky-panel__totals-table">
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
    <table className="sticky-panel__table">
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
export default StickyPanel;
