import React from "react";
import LastProductInDb from "./LastProductInDb";
import CategoryInDb from "./CategoryInDb";

function ContentRowCenter(props) {
  const { categoryList, lastProduct } = props;

  return (
    <div className="row">
      <LastProductInDb lastProduct={lastProduct} />
      <CategoryInDb categoryList={categoryList} />
    </div>
  );
}

export default ContentRowCenter;
