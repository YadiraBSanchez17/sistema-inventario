import React from 'react';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import InventoryList from './components/InventoryList';

function App() {
  return (
    <div className="App">
      <Register />
      <Login />
      <InventoryList />
    </div>
  );
}

export default App;