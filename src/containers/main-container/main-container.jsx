import React from "react";

import "./main-container.scss";

const MoreContainer = () => (
  <div className="main-container">
    <div className="content-container">
      <div className="side-by-side-wrapper">
        <div className="side-by-side">
          <div className="sticky">
            <TableSection name="Sticky" />
          </div>
          <div className="floating">
            <div className="content">
              <TableSection name="First" />
            </div>
            <div className="content">
              <TableSection name="Second" />
            </div>
            <div className="content">
              <TableSection name="Third" />
            </div>
            <div className="content">
              <TableSection name="Fourth" />
            </div>
            <div className="content">
              <TableSection name="Fifth" />
            </div>
            <div className="content">
              <TableSection name="Sixth" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MoreContainer;

const TableSection = ({ name }) => (
  <table>
    <tbody>
      <tr>
        <th colSpan="4">{name}</th>
      </tr>
      {[...Array(10).keys()].map((item, index) => (
        <tr key={index}>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
      ))}
      <tr>
        <td>Last</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
      </tr>
    </tbody>
  </table>
);
