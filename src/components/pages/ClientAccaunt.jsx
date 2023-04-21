import React, { useState } from 'react';
import OneCardCLient from '../ui/OneCardClient';

export default function ClientAccaunt({ orders, user }) {
  const [allOrders, setAllOrders] = useState(orders);
  const cardStyle = { width: '18rem' };
  return (
    <div className="row">
      {allOrders?.map((el) => (
        <div key={el.id} className="card" style={cardStyle}>
          <OneCardCLient order={el} user={user} setAllOrders={setAllOrders} />
          {/* <ClientForm setAllOrders={setAllOrders} user={user}/> */}
        </div>
      ))}
    </div>
  );
}
