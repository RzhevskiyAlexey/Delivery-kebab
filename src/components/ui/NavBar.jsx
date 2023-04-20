import React from 'react';
import axios from 'axios';

export default function NavBar({ user }) {
  console.log(user);
  const logoutHandler = async () => {
    const response = await axios.get('/api/auth/logout');
    if (response.status === 200) {
      window.location = '/';
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {user?.id ? `Hello, ${user.username}` : 'Guest'}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/client">
                  Client
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/orders">
                  Courier
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/signup">
                  Sign up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <button type="button" className="nav-link" onClick={logoutHandler}>
                  Logout
                </button>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
