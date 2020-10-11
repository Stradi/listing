import React from "react";

import ListingItem from "../ListingItem";
import "./Category.css";

function Category(props) {
  const { name, items } = props;
  const allItems = items.map((item) => {
    return <ListingItem id={item.id} name={item.name} />
  });

  return (
    <div className="category">
      <h2 className="category__title">{name}</h2>
      <ul className="category__items">
        {allItems}
      </ul>
    </div>
  );
}

export default Category;