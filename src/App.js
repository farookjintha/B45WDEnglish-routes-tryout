import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Home from './Components/Home/home';
import Profile from './Components/Profile/profile';
import Products from './Components/Products/products';
import Product from './Components/Product/product';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([
    {
        id: '1AAA12',
        name: 'Iphone 14',
        category: 'Mobile',
        price: '71,999',
        description: ''
    },
    {
        id: '2AA12',
        name: 'Iphone 14 Pro',
        category: 'Mobile',
        price: '1,19,999',
        description: ''
    },
    { 
        id: '3AAA12',
        name: 'Iphone 14 Pro Max',
        category: 'Mobile',
        price: '1,39,999',
        description: ''
    }
])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<Products products={products}/>} />
        <Route path="/products/:productId" element={<Product products={products} />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
