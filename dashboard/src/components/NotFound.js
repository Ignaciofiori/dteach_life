import React from "react";
import TopBar from "./TopBar";

function NotFound() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <TopBar />
        <div className="container-fluid">
          <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Esta pagina no existe</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
