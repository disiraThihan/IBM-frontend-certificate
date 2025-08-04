import React from "react";
import PlantCard from "./PlantCard";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 24.99,
    image: "https://example.com/snake-plant.jpg",
    category: "Low Light",
  },
  {
    id: 2,
    name: "Monstera Deliciosa",
    price: 34.99,
    image: "https://example.com/monstera.jpg",
    category: "Medium Light",
  },
  {
    id: 3,
    name: "Fiddle Leaf Fig",
    price: 39.99,
    image: "https://example.com/fiddle-leaf.jpg",
    category: "Bright Light",
  },
  {
    id: 4,
    name: "ZZ Plant",
    price: 22.99,
    image: "https://example.com/zz-plant.jpg",
    category: "Low Light",
  },
  {
    id: 5,
    name: "Pothos",
    price: 18.99,
    image: "https://example.com/pothos.jpg",
    category: "Medium Light",
  },
  {
    id: 6,
    name: "Rubber Plant",
    price: 29.99,
    image: "https://example.com/rubber-plant.jpg",
    category: "Bright Light",
  },
];

const ProductListing = () => {
  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div className="product-listing">
      <h2>Our Plant Collection</h2>
      {categories.map((category) => (
        <div key={category} className="category-section">
          <h3>{category}</h3>
          <div className="plants-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
