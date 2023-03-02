import React from "react";
import { useSelector } from "react-redux";
import ItemCart from "./ItemCart";

const Cart = () => {
  const items = useSelector((state) => state.cart.itemsInCart);

  const buy = () => {
    return alert("Спасибо за ваш заказ");
  };
  return (
    <div>
      {items.map((el) => (
        <ItemCart el={el} key={el.id} />
      ))}
      {items.length === 0 ? (
        <p className="text-white text-center text-[40px]">
          Корзина пустая
        </p>
      ) : (
        <div className="pb-4 pt-2 text-white">
          <button
            onClick={buy}
            className="ml-[20px] p-2 border-green-600 border rounded"
          >
            Купить
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
