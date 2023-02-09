import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import { useParams } from "react-router-dom";
import { getProductApi } from "../api/products";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const getProduct = async () => {
    const product = await getProductApi(id);
    setProduct(product);
    setLoading(false);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <TopBar />
        <div className="container-fluid">
          <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">
              DTeachLife - Detalle de producto
            </h1>
          </div>
          <div id="content-wrapper" className="d-flex flex-column">
            {loading ? (
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <div className="card-body">
                <div className="text-center">
                  <img
                    className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                    style={{ width: 40 + "rem" }}
                    src={product.image}
                    alt=" Star Wars - Mandalorian "
                  />

                  <h6 className="m-0 font-weight-bold text-gray-800">
                    {product.producto.nombre_profesor} (
                    {product.producto.ubicacion})
                  </h6>
                  <p>{product.producto.especialidades.nombre}</p>
                  <p>{product.producto.descripcion}</p>
                  <p>Precio: ${product.producto.precio}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
