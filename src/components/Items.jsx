import React from "react";
import Item from "./Item";


const Items = ({ item }) => {
   
  return (
    <div className="flex flex-wrap">
      {item.map((el, i) => <Item el={el} key={i}/>)};
    </div>
  );
};

export default Items;
