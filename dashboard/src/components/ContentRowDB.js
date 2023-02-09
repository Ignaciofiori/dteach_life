import React from "react";
import SmallCard from "./SmallCard";

let totalProducts = {
  title: "Productos totales",
  color: "primary",
  cuantity: 0,
  icon: "fa-store",
};

let totalUsers = {
  title: "Usuarios totales",
  color: "success",
  cuantity: 0,
  icon: "fa-user-check",
};

let totalCategory = {
  title: "Categorias totales",
  color: "warning",
  cuantity: 0,
  icon: "fa-clipboard-list",
};

export default function ContentRowDB(props) {
  const { quantities } = props;
  totalProducts.cuantity = quantities.products;
  totalUsers.cuantity = quantities.users;
  totalCategory.cuantity = quantities.category;

  let cartProps = [totalProducts, totalUsers, totalCategory];
  return (
    <div className="row">
      {cartProps.map((item, i) => {
        return <SmallCard {...item} key={i} />;
      })}
    </div>
  );
}
