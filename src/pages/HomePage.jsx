import { useState, useEffect } from "react";
import Items from "../components/Items";

const HomePage = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(
        "https://internet-store-energy-default-rtdb.firebaseio.com/items.json"
      );

      const responseData = await response.json();

      const loadedItem = [];

      for (const key in responseData) {
        loadedItem.push({
          image: responseData[key].image,
          title: responseData[key].title,
          price: responseData[key].price,
          id: responseData[key].id,
          rating: responseData[key].rating,
        });
      }
      setItem(loadedItem);
    };
    fetchItems();
  }, []);
  return (
    <div className="bg-[#2d2c2c]">
      <ul className="flex flex-wrap">
        <Items item={item} />
      </ul>
    </div>
  );
};

export default HomePage;
