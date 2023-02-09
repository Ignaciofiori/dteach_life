import React from "react";

function ChartRow(props) {
  return (
    <tr>
      <td>{props.campo1}</td>
      <td>{props.campo2}</td>
      <td>{props.campo3}</td>
      <td>
        <a className="nav-link" href={props.campo4}>
          <span className="mr-2 d-none d-lg-inline text-gray-600 small">
            Ver mas
          </span>
        </a>
      </td>
    </tr>
  );
}

export default ChartRow;
