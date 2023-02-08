import React from "react";
import SmallCard from "./SmallCard";

let totalProducts = {
  title: "Productos totales",
  color: "primary",
  cuantity: 21,
  icon: "fa-store",
};

let totalUsers = {
  title: "Usuarios totales",
  color: "success",
  cuantity: "79",
  icon: "fa-user-check",
};

let totalCategory = {
  title: "Categorias totales",
  color: "warning",
  cuantity: "49",
  icon: "fa-clipboard-list",
};

let cartProps = [totalProducts, totalUsers, totalCategory];

export default function ContentRowDB() {
  return (
    <div className="row">
      {cartProps.map((item, i) => {
        return <SmallCard {...item} key={i} />;
      })}
    </div>
  );
}
