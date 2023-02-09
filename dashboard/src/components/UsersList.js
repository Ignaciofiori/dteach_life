import React from "react";
import Chart from "./Chart";
import TopBar from "./TopBar";

export default function UsersList() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <TopBar />
        <div className="container-fluid">
          <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">DTeachLife - Users</h1>
          </div>
          <Chart />
        </div>
      </div>
    </div>
  );
}
