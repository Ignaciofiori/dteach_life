import React from "react";

export default function CategoryInDb(props) {
  const { categoryList } = props;

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">Categorias</h5>
        </div>
        <div className="card-body">
          <div className="row">
            {categoryList?.map((item, index) => (
              <div key={index} className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">
                    {item.nombre} ({item.countClases})
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
