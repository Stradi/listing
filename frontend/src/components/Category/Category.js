import React from "react";

import ListingItem from "../ListingItem";
import "./Category.css";

function Category(props) {
  const { items } = props;
  const allItems = items.map((item) => {
    return <ListingItem id={item.id} name={item.name} />
  });

  return (
    <ul className="category">
      {allItems}
    </ul>
  );
}

export default Category;