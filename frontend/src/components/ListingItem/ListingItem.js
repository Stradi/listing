import React from "react";

import "./ListingItem.css";

function ListingItem(props) {
  const { name, id } = props;
  return (
    <li key={id} className="item">
      <a href="#" className="item__text">{name}</a>
    </li>
  );
}

export default ListingItem;