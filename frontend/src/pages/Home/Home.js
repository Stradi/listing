//TODO: Fetch data from API, pass that data to ListGroup component (name may change).

import React, { useState } from "react";

import Category from "../../components/Category";
import "./Home.css";

function Home() {
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
    { id: 6, name: "Item 6" },
    { id: 7, name: "Item 7" },
    { id: 8, name: "Item 8" },
    { id: 9, name: "Item 9" },
    { id: 10, name: "Item 10" },
    { id: 11, name: "Item 11" },
    { id: 12, name: "Item 12" },
    { id: 13, name: "Item 13" },
    { id: 14, name: "Item 14" }
  ]

  return (
    <div className="category-list">
      <Category name="Category 1" items={items}/>
    </div>
  );
}

export default Home;