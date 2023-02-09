import React, { useState, useEffect } from "react";
import Chart from "./Chart";
import TopBar from "./TopBar";
import { getProductsApi } from "../api/products";

export default function ProductsList() {
  const [tableRowsData, setTableRowsData] = useState([]);

  const getProducts = async () => {
    const products = await getProductsApi();
    const productsChart = [];
    products.products.forEach((element) => {
      const data = {
        campo1: element.name,
        campo2: element.description,
        campo3: element.especialidades.nombre,
        campo4: element.detail,
      };
      productsChart.push(data);
    });
    setTableRowsData(productsChart);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <TopBar />
        <div className="container-fluid">
          <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">DTeachLife - Productos</h1>
          </div>
          <Chart
            tableRowsData={tableRowsData}
            titles={["Título", "Descripción", "Especialidad", "Detalles"]}
          />
        </div>
      </div>
    </div>
  );
}
