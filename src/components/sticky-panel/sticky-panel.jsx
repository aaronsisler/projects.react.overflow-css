import React from "react";

import "./sticky-panel.scss";

const StickyPanel = () => (
  <div className="sticky-panel">
    <caption className="sticky-panel__caption">Sticky</caption>
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
