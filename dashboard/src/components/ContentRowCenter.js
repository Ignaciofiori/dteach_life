import React from "react";
import LastProductInDb from "./LastProductInDb";
import CategoryInDb from "./CategoryInDb";

function ContentRowCenter() {
  return (
    <div className="row">
      <LastProductInDb />
      <CategoryInDb />
    </div>
  );
}

export default ContentRowCenter;
