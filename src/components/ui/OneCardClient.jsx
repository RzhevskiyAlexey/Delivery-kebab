import React from 'react';
import ClientForm from './ClientForm';

export default function OneCardCLient({ order, setAllOrders, user }) {
  return (
    <>
      <img src={order.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{order.title}</h5>
        <p className="card-text">{order.body}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Исходная цена: {order.initial_price} рублей</li>
        <li className="list-group-item">Скидка: {order.sale}%</li>
        <li className="list-group-item">
          Окончательная цена: {(order.initial_price / 100) * (100 - order.sale)} рублей
        </li>
      </ul>
      <ClientForm setAllOrders={setAllOrders} user={user} order={order}/>
    </>
  );
}
