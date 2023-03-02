import React from "react";
import { deleteItemFromCart } from "../redux/cart/reducer";
import { useDispatch } from "react-redux";

const ItemCart = ({ el }) => {
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(deleteItemFromCart(el.id));
  };

  return (
    <div>
      <div>
        <div className=" text-white  p-5 border-4 m-3">
          <div className="flex justify-between">
            <img src={el.image} alt="gen" className="w-[100px] bg-white" />
            <p className="pl-5 pt-5">{el.title}</p>
            <div>
              <p className="pl-5 pt-5">{el.price} ₴</p>
              <button
                onClick={deleteItem}
                className="ml-[20px] border-amber-300 border p-2 rounded mt-2"
              >
                Убрать
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
