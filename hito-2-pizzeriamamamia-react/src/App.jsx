import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <Login />
        <Register />
      </div>
      <Footer />
    </div>
  );
}

export default App;