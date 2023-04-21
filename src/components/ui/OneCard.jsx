import React from 'react';

export default function OneCard({ order, deleteHandler }) {
  const cardStyle = { width: '18rem' };
  return (
    <div className="card form-check form-check-inline" style={cardStyle}>
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
      <div className="card-body">
        <button className="btn btn-danger" type="button" onClick={() => deleteHandler(order.id)}>
          Удалить
        </button>
        <a href="#" className="card-link">
          Править
        </a>
      </div>
    </div>
  );
}
