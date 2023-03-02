import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart } from "../redux/cart/reducer";
import ItemCart from "./ItemCart";

const Cart = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(deleteItemFromCart(items.id));
  };

  const buy = () => {
    return alert("Спасибо за ваш заказ");
  };
  return (
    <div>
      {items.map((el, i) => (
        <ItemCart el={el} key={i} />
      ))}
      {items.length === 0 ? (
        <p className="text-white ml-[50px] text-center text-[40px]">
          Корзина пустая
        </p>
      ) : (
        <div className="pb-4 pt-2 text-white">
          <button
            onClick={deleteItem}
            className="ml-[20px] border-amber-300 border p-2 rounded"
          >
            Очистить
          </button>
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
