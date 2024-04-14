import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginDashboard from './components/LoginDashboard';
import Dashboard from './components/Dashboard';
import Addproduct from './components/Addproduct';
import 'bootstrap/dist/css/bootstrap.min.css';
import RenderMarketplaceItems from './components/Rawdata';
import Addjob from './components/AddJob';
import AddEquipment from './components/AddEquipment';
import RenderEquipments from './components/EquipmentData';
import UserProducts from './components/UserProducts';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <Router>
      <Routes>
        <Route path='/addjob' element={<Addjob/>} />
        <Route path='/userproducts' element={<UserProducts/>} />
        <Route path='/showequipments' element={<RenderEquipments/>} />
        <Route path='/addequip' element={<AddEquipment />} />
        <Route path='/addproduct' element={<Addproduct />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="/logindashboard" element={<LoginDashboard />} />
        <Route path="/marketplace" element={<RenderMarketplaceItems />} />
        <Route path="/" element={<App />} />

      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
