import React from "react";

const ItemCart = ({ el }) => {
  return (
    <div>
      <div>
        <div className=" text-white  p-5 border-4 m-3">
          <div className="flex justify-between">
            <img src={el.image} alt="gen" className="w-[100px] bg-white" />
            <p className="pl-5 pt-5">{el.title}</p>
            <div>
              <p className="pl-5 pt-5">{el.price} ₴</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
