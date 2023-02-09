import React from "react";
import ChartRow from "./ChartRow";

function Chart(props) {
  const { tableRowsData, titles } = props;

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
                <th>{titles[0]}</th>
                <th>{titles[1]}</th>
                <th>{titles[2]}</th>
                <th>{titles[3]}</th>
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
