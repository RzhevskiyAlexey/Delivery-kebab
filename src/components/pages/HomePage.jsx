import React from 'react';

export default function HomePage() {
  return (
    <div className='container mt-5' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1 style={{ width: '100%', fontSize: '5rem', fontFamily: 'cursive', fontWeight: 'bold', textTransform: 'uppercase', color: 'black', whiteSpace: 'nowrap', marginBottom: '2rem', animation: 'slide-left 10s linear infinite' }}>Welcome to Delivery-Kebab</h1>
      <style>
        {`
          @keyframes slide-left {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </div>
  );
}


