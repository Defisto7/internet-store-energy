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

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex gap-2 px-3 py-4 bg-[#1d1d1d] text-white justify-between md:text-[18px] text-[12px]">
      {}
      <Link to="/">
        <div className="flex gap-2 cursor-pointer items-center italic">
          <FcChargeBattery size={25} />
          <p>Energy</p>
        </div>
      </Link>
      <Link to="/contacts">
        <button className="border-green-600 border px-2 py-1 rounded cursor-pointer">
          Контакты
        </button>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="border-amber-600 border px-2 py-1 rounded cursor-pointer mr-2">
              Личный кабинет
            </button>
          </Link>
          <button
            onClick={handleLogout}
            className="border-red-600 border px-3 py-1 rounded cursor-pointe"
          >
            Выход
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="border-green-600 border px-2 py-1 rounded cursor-pointer mr-4">
              Вход
            </button>
          </Link>
          <Link to="/signup">
            <button className="border-amber-300 border px-2 py-1 rounded cursor-pointer">
              Регистрация
            </button>
          </Link>
        </div>
      )}
      <Link to="/cart">
        <button className="flex  gap-5 border-green-800 border px-2 py-1 rounded cursor-pointer text-center">
          <BsCart4 size={20} className="mt-[2px]" />
          {totalPrice === 0 ? "" : `${totalPrice} ₴`}
        </button>
      </Link>
    </div>
  );
};

export default Header;
