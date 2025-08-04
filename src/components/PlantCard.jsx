import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";

const PlantCard = ({ plant }) => {
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = React.useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(plant));
    setIsAdded(true);
  };

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>${plant.price.toFixed(2)}</p>
      <button
        onClick={handleAddToCart}
        disabled={isAdded}
        className={isAdded ? "added-to-cart" : ""}
      >
        {isAdded ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default PlantCard;
