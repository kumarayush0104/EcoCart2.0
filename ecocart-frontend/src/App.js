import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';

import Checkout from './pages/Checkout';
import CarbonCalculator from './pages/carbonCalculator';
import Rewards from './pages/rewards';
import AmazonProduct from './pages/AmazonProduct';
import CarbonFootprintDashboard from './pages/CarbonFootprintDashboard';
import Accounts from './pages/Accounts';
import Lists from './pages/Lists';
import Orders from './pages/Orders';

const App = () => {
  return (
    <CartProvider>
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <main className="max-w-screen-xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/carbon-calculator" element={<CarbonCalculator />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/amazon-product" element={<AmazonProduct />} />
            <Route path="/carbon-dashboard" element={<CarbonFootprintDashboard />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/lists" element={<Lists />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </main>
      </div>
    </CartProvider>
  );
};

// const App = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Header />
//       <main className="max-w-screen-xl mx-auto p-4">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/products" element={<ProductList />} />
//           <Route path="/product/:productId" element={<ProductDetail />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/checkout" element={<Checkout />} />
//           <Route path="/carbon-calculator" element={<CarbonCalculator />} />
//           <Route path="/rewards" element={<Rewards />} />
//           <Route path="/amazon-product" element={<AmazonProduct />} />
//           <Route path="/carbon-dashboard" element={<CarbonFootprintDashboard />} />
//         </Routes>
//       </main>
//     </div>
//   );
// };

export default App;
