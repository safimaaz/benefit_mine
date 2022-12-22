import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <div className='section1'>
      <div className='w-100 bg-info py-5'>first div</div>
      <div className='bg-warning w-50 py-5' style={{marginTop: '-50px'}}>
        <ul>
          <li>ABC</li>
          <li>Home</li>
          <li>About Us</li>
        </ul>
      </div>
      
      <div className='bg-danger w-50 py-5'>
        <h2>Heading Section two</h2>
        <ul>
          <li>ABC</li>
          <li>Home</li>
          <li>About Us</li>
        </ul>
      </div>
      
      <div className='bg-light w-50 py-5' style={{position: 'relative', top: '-50px'}}>
        <h2>Heading Section three</h2>
        <ul>
          <li>ABC</li>
          <li>Home</li>
          <li>About Us</li>
        </ul>
      </div>

      <div className='bg-success w-50 py-5' style={{marginTop: '-50px'}}>
        <h2>Heading Section three</h2>
        <ul>
          <li>ABC</li>
          <li>Home</li>
          <li>About Us</li>
        </ul>
      </div>

    </div> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
