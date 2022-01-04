import './App.css';
import { Routes } from 'react-router';
import OneProduct from './components/share/one-product';
import { Route } from 'react-router';

function App() {
  return (
    <Routes>
      <Route path='/' element={<OneProduct />} />
      
    </Routes>
  );
}

export default App;
