import React, { useState } from 'react';

export default function CourierForm({ setAllOrders }) {
  const [input, setInput] = useState({ title: '', body: '', img: '', initial_price: '', sale: '' });

  const changeHandler = (event) => {
    setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(input),
    });
    const data = await response.json();
    setAllOrders((prev) => [data, ...prev]);
    setInput({ title: '', body: '', img: '', initial_price: '', sale: '' });
  };
  return (
    <form
      className="row g-3 needs-validation"
      noValidate
      onSubmit={(event) => submitHandler(event)}
      style={{
        marginBottom: '30px',
        backgroundColor: 'rgb(255, 255, 255 ,0.5)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="col-md-4">
          <label
            htmlFor="validationCustom01"
            className="form-label"
            style={{ fontWeight: 'bold', fontSize: '20px' }}
          >
            Название продукта
          </label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="validationCustom01"
            value={input.title}
            required
            onChange={changeHandler}
            placeholder="введи название продукта"
          />
          <div className="valid-feedback">Отлично</div>
        </div>
        <div className="col-md-4">
          <label
            htmlFor="validationCustom02"
            className="form-label"
            style={{ fontWeight: 'bold', fontSize: '20px' }}
          >
            Ссылка на изображение
          </label>
          <input
            type="text"
            name="img"
            className="form-control"
            id="validationCustom02"
            value={input.img}
            required
            onChange={changeHandler}
            placeholder="добавь фотографию"
          />
          <div className="valid-feedback">Отлично</div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div
          className="col-md-6"
          style={{
            width: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <label
            htmlFor="validationCustom03"
            className="form-label"
            style={{ fontWeight: 'bold', fontSize: "20px"}}
          >
            Описание
          </label>
          <input
            type="text"
            name="body"
            className="form-control"
            id="validationCustom02"
            value={input.body}
            required
            onChange={changeHandler}
            placeholder="введи описание заказа"
          />
          <div className="invalid-feedback">Добавь описание!</div>
        </div>
        <div
          className="col-md-3"
          style={{
            width: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <label
            htmlFor="validationCustom04"
            className="form-label"
            style={{ fontWeight: 'bold', fontSize: "20px"}}
          >
            Исходная цена
          </label>
          <input
            type="text"
            name="initial_price"
            className="form-control"
            id="validationCustom02"
            value={input.initial_price}
            required
            onChange={changeHandler}
            placeholder="введи цену"
          />
          <div className="invalid-feedback">Добавь цену!</div>
        </div>
        <div
          className="col-md-3"
          style={{
            width: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <label
            htmlFor="validationCustom05"
            className="form-label"
            style={{ fontWeight: 'bold', fontSize: "20px"}}
          >
            Размер скидки %
          </label>
          <input
            type="text"
            name="sale"
            className="form-control"
            id="validationCustom02"
            value={input.sale}
            required
            onChange={changeHandler}
            placeholder="введи размер скидки"
          />
          <div className="invalid-feedback">Добавь скидку!</div>
        </div>
      </div>

      <div className="col-12">
        <button className="btn btn-primary" type="submit">
          Добавить объявление
        </button>
      </div>
    </form>
  );
}
