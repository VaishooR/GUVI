import * as React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="linkzz">
          <Link to="/">HomePage</Link> &nbsp; &nbsp;
          <Link to="/electronics">Electronics</Link> &nbsp; &nbsp;
          <Link to="/vegetables">Vegetables</Link> &nbsp; &nbsp;
          <Link to="/sweets">Sweets</Link> &nbsp; &nbsp;
        </div>

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/electronics" element={<Electronics />}></Route>
          <Route path="/vegetables" element={<Vegetables />}></Route>
          <Route path="/sweets" element={<Sweets />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function HomePage() {
  return (
    <div className="container">
      <h1>Welcome to Instamart</h1>
      <h3>Happy Shopping :)</h3>
    </div>
  );
}

function Electronics() {
  return (
    <div className="items">
      <h1>Electronics</h1>
      <ul>
        <li>Phone</li>
        <li>Laptop</li>
        <li>Television</li>
      </ul>
    </div>
  );
}

function Vegetables() {
  return (
    <div className="items">
      <h1>Vegetables</h1>
      <ul>
        <li>Tomato</li>
        <li>Cauliflower</li>
        <li>Carrot</li>
      </ul>
    </div>
  );
}

function Sweets() {
  return (
    <div className="items">
      <h1>Sweets</h1>
      <ul>
        <li>Kaju Katli</li>
        <li>Halwa</li>
        <li>Milk cake</li>
      </ul>
    </div>
  );
}
