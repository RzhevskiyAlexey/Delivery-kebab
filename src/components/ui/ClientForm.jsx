import React, { useState } from 'react';

export default function ClientForm({ setAllOrders, user, order }) {
  const [input, setInput] = useState({ location: '', phone: '' });

  const changeHandler = (event) => {
    setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const { id } = user;
    await fetch(`/api/clients/${order.id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ ...input, status: true, user_id: id }),
    });
    setAllOrders((prev) => prev.filter((el) => el.id !== order.id));
    setInput({ location: '', phone: '' });
  };
  return (
    <form className="needs-validation" noValidate onSubmit={(event) => submitHandler(event)}>
      <div className="mb-3">
        <label htmlFor="validationCustom01" className="form-label">
          Адрес
        </label>
        <input
          type="text"
          name="location"
          className="form-control"
          id="validationCustom01"
          value={input.location}
          required
          onChange={changeHandler}
        />
        <div className="valid-feedback">Отлично</div>
      </div>
      <div className="mb-3">
        <label htmlFor="validationCustom02" className="form-label">
          Телефон
        </label>
        <input
          type="text"
          name="phone"
          className="form-control"
          id="validationCustom02"
          value={input.phone}
          required
          onChange={changeHandler}
        />
        <div className="valid-feedback">Отлично</div>
      </div>
      <button className="btn btn-primary" type="submit">
        Сделать заказ
      </button>
    </form>
  );
}
