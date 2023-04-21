import React from 'react';

export default function HomePage() {
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <marquee >
        <h1 style={{ fontSize: '5em', fontFamily: 'Arial', scrollBehavior: 'smooth' }}>
          Welcome to Delivery-Kebab
        </h1>{' '}
      </marquee>
    </div>
  );
}
