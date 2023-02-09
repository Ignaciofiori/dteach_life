import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopBar from "./TopBar";
import { getUserApi } from "../api/users";

export default function UsersDetail() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    const user = await getUserApi(id);
    setUser(user);
    setLoading(false);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <TopBar />
        <div className="container-fluid">
          <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">
              DTeachLife - Detalle de usuario
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
                    src={user.imagen}
                    alt=" Star Wars - Mandalorian "
                  />

                  <h6 className="m-0 font-weight-bold text-gray-800">
                    {user.nombre} ({user.ubicacion})
                  </h6>
                  <p>{user.email}</p>
                  <p>{user.descripcion}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
