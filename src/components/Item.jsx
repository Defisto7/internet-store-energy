import React from "react";
import { useDispatch } from "react-redux";
import { UserAuth } from "../context/AuthContex";
import { setItemInCart } from "../redux/cart/reducer";

const Item = ({ el }) => {
  const dispatch = useDispatch();
  const { user } = UserAuth();

  const handleClick = (e) => {
    e.stopPropagation();
    user?.email
      ? dispatch(setItemInCart(el))
      : alert("Чтобы добавить товар в корзину, Вам нужно авторизоваться");
  };
  return (
    <div>
      <li className=" text-white max-w-[300px] p-5 border-1 shadow shadow-slate-100 hover:shadow-green-500 m-3">
        <div className="">
          <img src={el.image} alt="gen" className="w-[300px] bg-white" />
          <p className="pl-5 pt-5 text-center">{el.title}</p>
          <button
            onClick={handleClick}
            className="ml-5 mt-5 py-1 px-2 bg-green-800 rounded"
          >
            {el.price} ₴
          </button>
        </div>
      </li>
    </div>
  );
};

export default Item;
