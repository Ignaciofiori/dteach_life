import React, { useState, useEffect } from "react";
import ContentRowCenter from "./ContentRowCenter";
import ContentRowDB from "./ContentRowDB";
import Chart from "./Chart";
import { getProductsApi } from "../api/products";
import { getUsersApi } from "../api/users";

function ContentRowTop() {
  const [categoryList, setCategoryList] = useState([]);
  const [lastProduct, setLastProduct] = useState({});
  const [quantities, setQuantites] = useState({});
  const [tableRowsData, setTableRowsData] = useState([]);

  const getProducts = async () => {
    const products = await getProductsApi();
    const users = await getUsersApi();
    setCategoryList(products.countByCategory);
    setLastProduct(products.products[0]);
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
    setQuantites({
      products: products.count,
      category: products.countByCategory.length,
      users: users.count,
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">DTeachLife - Dashboard</h1>
        </div>
        <ContentRowDB quantities={quantities} />
        <ContentRowCenter
          categoryList={categoryList}
          lastProduct={lastProduct}
        />
        <Chart
          tableRowsData={tableRowsData}
          titles={["Título", "Descripción", "Especialidad", "Detalles"]}
        />
      </div>
    </React.Fragment>
  );
}
export default ContentRowTop;
