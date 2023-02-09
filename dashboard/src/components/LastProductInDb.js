import React from "react";

export default function LastProductInDb(props) {
  const { lastProduct } = props;
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Ultimo clase creada
          </h5>
        </div>
        <div className="card-body">
          <h6 className="m-0 font-weight-bold text-gray-800">
            {lastProduct.name}
          </h6>
          <p>{lastProduct.description}</p>
          <a className="btn btn-danger" href={lastProduct.detail}>
            Ver mas detalles
          </a>
        </div>
      </div>
    </div>
  );
}
