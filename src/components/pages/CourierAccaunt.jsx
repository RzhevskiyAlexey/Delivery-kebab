import React, { useState } from 'react';
import CourierForm from '../ui/CourierForm';
import OneCard from '../ui/OneCard';

export default function CourierAccaunt({ orders }) {
  const [allOrders, setAllOrders] = useState(orders);
  const deleteHandler = async (id) => {
    await fetch(`/api/orders/${id}`, { method: 'DELETE' });
    setAllOrders((prev) => prev.filter((el) => el.id !== id));
  };

  return (
    <div className="row mt-5 d-flex justify-content-center" >
        <CourierForm setAllOrders={setAllOrders} />
        {allOrders?.map((el) => (
          <OneCard key={el.id} order={el} deleteHandler={deleteHandler} />
        ))}
      </div>
  );
}
