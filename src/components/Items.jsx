import React, { useState } from "react";
import Item from "./Item";

const Items = ({ item }) => {
  const [sortType, setSortType] = useState("");

  const handleSortChange = (event) => {
    setSortType(event.target.value);
  };

  const getSortedProducts = () => {
    const sortedProducts = [...item];
    if (sortType === "priceUp") {
      sortedProducts.sort((a, b) => a.price - b.price);
    }
    if (sortType === "priceDown") {
      sortedProducts.sort((a, b) => a.price - b.price).reverse();
    } else if (sortType === "rating") {
      sortedProducts.sort((a, b) => a.rating - b.rating).reverse();
    }

    return sortedProducts;
  };

  const sortedProducts = getSortedProducts();

  return (
    <div>
      <div className="mt-2">
        <label htmlFor="sort-select" className="text-white mx-4">
          Сортировать:
        </label>
        <select id="sort-select" value={sortType} onChange={handleSortChange}>
          <option value="">Выберите</option>
          <option value="priceUp">По возрастанию цены</option>
          <option value="priceDown">По убыванию цены</option>
          <option value="rating">По рейтингу</option>
        </select>
      </div>
      <div className="flex flex-wrap justify-center">
        {sortedProducts.map((el, i) => (
          <Item el={el} key={i} />
        ))}
        ;
      </div>
    </div>
  );
};

export default Items;
