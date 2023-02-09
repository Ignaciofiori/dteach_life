import React, { useState, useEffect } from "react";
import Chart from "./Chart";
import TopBar from "./TopBar";
import { getUsersApi } from "../api/users";

export default function UsersList() {
  const [tableRowsData, setTableRowsData] = useState([]);

  const getUsers = async () => {
    const users = await getUsersApi();
    const usersChart = [];
    users.users.forEach((element) => {
      const data = {
        campo1: element.id,
        campo2: element.name,
        campo3: element.email,
        campo4: element.detail,
      };
      usersChart.push(data);
    });
    setTableRowsData(usersChart);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <TopBar />
        <div className="container-fluid">
          <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">DTeachLife - Users</h1>
          </div>
          <Chart
            tableRowsData={tableRowsData}
            titles={["ID", "Nombre", "Email", "Detalles"]}
          />
        </div>
      </div>
    </div>
  );
}
