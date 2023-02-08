import React from "react";
import ChartRow from "./ChartRow";

let tableRowsData = [
  {
    Title: "Billy Elliot ",
    Category: "Deporte",
    Location: "Rosario",
    Price: "$1234",
  },
  {
    Title: "Billy Elliot ",
    Category: "Deporte",
    Location: "Rosario",
    Price: "$1234",
  },
];

function Chart() {
  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th>Título</th>
                <th>Categoria</th>
                <th>Ubicación</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {tableRowsData.map((row, i) => {
                return <ChartRow {...row} key={i} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Chart;
