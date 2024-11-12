import  { useEffect, useState } from "react";

interface ProductListProps {
  category: string;
}

// Categories with products name
const productsData = [
    // Clothing 
    { name: "T-Shirt", category: "Clothing" },
    { name: "Jeans", category: "Clothing" },
    { name: "Jacket", category: "Clothing" },
    { name: "Sweater", category: "Clothing" },
    { name: "Hat", category: "Clothing" },
  
    // Household 
    { name: "Sofa", category: "Household" },
    { name: "Table", category: "Household" },
    { name: "Chair", category: "Household" },
    { name: "Bed", category: "Household" },
    { name: "Cupboard", category: "Household" },
  
    // Electronics 
    { name: "Smartphone", category: "Electronics" },
    { name: "Laptop", category: "Electronics" },
    { name: "Headphones", category: "Electronics" },
    { name: "Smart Watch", category: "Electronics" },
    { name: "Tablet", category: "Electronics" },
  
    // Decoration 
    { name: "Night Lamp", category: "Decoration" },
    { name: "Wall Art", category: "Decoration" },
    { name: "Vase", category: "Decoration" },
    { name: "Candles", category: "Decoration" },
    { name: "Mirror", category: "Decoration" },
  
    // Hardware 
    { name: "Screwdriver", category: "Hardware" },
    { name: "Hammer", category: "Hardware" },
    { name: "Wrench", category: "Hardware" },
    { name: "Drill", category: "Hardware" },
    { name: "Pliers", category: "Hardware" },
  ];
  

function ProductList({ category }: ProductListProps) {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {

    if (category) {
      const filteredProducts = productsData
        .filter((product) => product.category === category)
        .map((product) => product.name);
      setProducts(filteredProducts);
    } else {

        setProducts([]);
    }
  }, 
  [category]);

  // USED BOOTSTRAP FOR STYLING
  return (
    <div>
      <ul className="list-group list-group-flush">
        {products.map((product, index) => (
          <li key={index} className="list-group-item">{product}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
