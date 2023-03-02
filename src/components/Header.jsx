import React from "react";
import { FcChargeBattery } from "react-icons/fc";
import { BsCart4 } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserAuth } from "../context/AuthContex";

const Header = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = items.reduce((acc, item) => (acc += +item.price), 0);

  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  console.log(user?.email);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex gap-2 p-3 bg-slate-700 text-white justify-between">
      <Link to="/">
        <div className="flex gap-2 cursor-pointer">
          <FcChargeBattery size={25} />
          <p>Energy</p>
        </div>
      </Link>

      <Link to="/contacts">Контакты</Link>
      {user?.email ? (
        <div>
          <button
            onClick={handleLogout}
            className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to='/login'>
            <button className='text-white pr-4'>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
              Sign Up
            </button>
          </Link>
        </div>
      )}
      <Link to="/cart" className="flex gap-2">
        <BsCart4 size={25} />
        {totalPrice}
        <p>Корзина</p>
      </Link>
    </div>
  );
};

export default Header;
