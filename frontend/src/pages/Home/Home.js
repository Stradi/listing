import React, { useState, useEffect } from "react";

import "./Home.css";
import Category from "../../components/Category";
import { FetchCategories } from "../../helpers";

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    FetchCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  const allCategories = categories.map((item) => {
    return <Category name={item.name} description={item.description} items={item.items} key={item._id} />
  });

  return (
    <div className="category-list">
      { allCategories }
    </div>
  );
}

export default Home;