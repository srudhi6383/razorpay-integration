import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const [products] = useState([
    {
      id: 1,
      name: 'Wearable Watch',
      price: 500,
      image: 'https://th.bing.com/th/id/OIP.DAui_jJQZnKmxDtYVlHn0AHaHa?rs=1&pid=ImgDetMain',
      description: 'Stylish and functional',
      fullDescription: 'A smartwatch with multiple features.',
    },
    {
      id: 2,
      name: 'Camera HD',
      price: 1000,
      image: 'https://th.bing.com/th/id/OIP.LtDS6TPXql4j9YB8_iqIlgHaHa?rs=1&pid=ImgDetMain',
      description: 'Capture moments',
      fullDescription: 'High definition camera for photography enthusiasts.',
    },
    {
      id: 3,
      name: 'Wireless Earbuds',
      price: 1500,
      image: 'https://th.bing.com/th/id/OIP.sEuZy0PJSRLxN5DZ-X71sQHaE8?rs=1&pid=ImgDetMain',
      description: 'Crystal clear sound',
      fullDescription: 'Experience sound like never before with these wireless earbuds.',
    },
    {
      id: 4,
      name: 'Gaming Laptop',
      price: 60000,
      image: 'https://th.bing.com/th/id/R.a243c72be94e93f1399f3399b06c7677?rik=hrhQ9%2b%2fJ1SSPHA&riu=http%3a%2f%2fwww.riskmanagementmonitor.com%2fwp-content%2fuploads%2f2014%2f12%2fLaptop1.jpg&ehk=OfidPRNnM1a1JERcjUs9J725LwV1tT7YdUTEmeAi5Gw%3d&risl=1&pid=ImgRaw&r=0',
      description: 'Ultimate performance',
      fullDescription: 'Powerful laptop designed for gaming and heavy applications.',
    },
    {
      id: 5,
      name: 'Bluetooth Speaker',
      price: 2500,
      image: 'https://securiotec.com/wp-content/uploads/2020/12/6430060cv12d.jpg',
      description: 'Portable sound',
      fullDescription: 'Enjoy your music anywhere with this portable speaker.',
    },
    {
      id: 6,
      name: 'Smartphone',
      price: 30000,
      image: 'https://th.bing.com/th/id/OIP.TX3IilU8Eobef_QRT7iNlAHaJd?rs=1&pid=ImgDetMain',
      description: 'Latest technology',
      fullDescription: 'Stay connected with the latest smartphone features.',
    },
  ]);

  const [cart, setCart] = useState([]);
  const [orderDetails, setOrderDetails] = useState(null);

  const addToCart = (product) => setCart([...cart, { ...product, quantity: 1 }]);
  const updateQuantity = (id, quantity) => setCart(cart.map((item) => item.id === id ? { ...item, quantity } : item));
  const removeItem = (id) => setCart(cart.filter((item) => item.id !== id));
  const onOrderSuccess = (details) => setOrderDetails(details);

  const clearCart = () => setCart([]);

  return (
   
<Router>
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<ProductList products={products} addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetails products={products} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} removeItem={removeItem} />} />
        <Route path="/checkout" element={<Checkout cart={cart} onOrderSuccess={onOrderSuccess} clearCart={clearCart} />} />
        <Route path="/confirmation" element={<OrderConfirmation orderDetails={orderDetails} />} />
      </Routes>
    </main>
    <Footer />
  </div>
</Router>
  );
};

export default App;
