import React, { useState } from 'react';
import axios from 'axios';

export default function SignUpPage() {
  const [role, setRole] = useState('customer');

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    console.log(formData);
    try {
      const response = await axios.post('/api/auth/signup', formData);
      if (response.status === 200) {
        window.location = '/';
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}
    >
      <form onSubmit={submitHandler}>
        <h1>Регистрация</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
            <input
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="usernameinput" className="form-label">
            Name
            <input name="username" type="text" className="form-control" id="usernameinput" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </label>
        </div>

        <div className="mb-3 ">
          <div className="form-check form-check-inline">
            <label htmlFor="roleCustomer" className="form-label ">
              Заказчик
              <input
                type="radio"
                name="role"
                value="customer"
                id="roleCustomer"
                checked={role === 'customer'}
                onChange={handleRoleChange}
              />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label htmlFor="roleCourier" className="form-label">
              Курьер
              <input
                type="radio"
                name="role"
                value="courier"
                id="roleCourier"
                checked={role === 'courier'}
                onChange={handleRoleChange}
              />
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
