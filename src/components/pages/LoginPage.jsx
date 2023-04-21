
import React from 'react';
import axios from 'axios';

export default function LoginPage() {
  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    console.log('==========> ',formData);
    try {
      const response = await axios.post('/api/auth/login', formData);
      if (response.status === 200) {
        window.location = '/';
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50vh',
      background: 'rgba(255, 255, 255, 0.5)',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    }}
    >
      <form onSubmit={submitHandler}>
        <h1>Авторизация</h1>
        <br />
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

