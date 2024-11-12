import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './ProductList'
 
function App() {
    const [category, setCategory] = useState("");
  
    return (
        //Bootstrap styling for categories
      <>
        <div className="container mt-4">
  <div className="row justify-content-center">
    <div className="col-md-6 col-lg-4">
      <label htmlFor="categorySelect" className="form-label fw-bold text-primary">
        Choose a Category
      </label>
      <select
        id="categorySelect"
        className="form-select form-select-lg mb-3 shadow-sm"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="">SELECT CATEGORIES</option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
        <option value="Electronics">Electronics</option>
        <option value="Decoration">Decoration</option>
        <option value="Hardware">Hardware</option>
      </select>
      <ProductList category={category} />
    </div>
  </div>
</div>

      </>
    );
  }
  
  export default App;