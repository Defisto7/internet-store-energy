import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { UserAuth } from '../context/AuthContex';
import { deleteItemFromCart } from '../redux/cart/reducer';
import ItemCart from './ItemCart';

const Cart = () => {
  const items = useSelector(state => state.cart.itemsInCart);
  const dispatch = useDispatch()
  console.log(items)
    const deleteItem = () => {
        dispatch(deleteItemFromCart(items.id))
    }

  const buy = () => {
    return alert('Спасибо за ваш заказ')
  }
  return (
    <div>
      {items.map((el, i) => <ItemCart el={el} key={i}/>)}
      {items.length === 0 ? <p className='text-white ml-[50px]'>Корзина пустая</p> : 
      <div>
        <button onClick={deleteItem} className="text-white ml-[50px]">Очистить</button>
        <button onClick={buy} className="text-white ml-[50px]">Купить</button>
      </div>
      }
    </div>
  )
}

export default Cart