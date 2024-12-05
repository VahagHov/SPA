import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Products } from './pages/products';
import { ProductDetails } from './pages/ProductDetails ';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path = '/' element = {<Products />}/>
          <Route path ="products/:id" element = {<ProductDetails />}/>
      </Routes>
     
    </div>
  );
}

export default App;
