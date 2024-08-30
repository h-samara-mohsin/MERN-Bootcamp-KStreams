import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";

const ProductCard = (props) => {
  const { item } = props;
  const navigate = useNavigate();

  const val = useContext(UserContext);

  useEffect(() => {
    console.log("Value from UserContext: ", val);
  }, []);
  return (
    <div className="cardContainer">
      <h1
        onClick={() => {
          navigate("/product-details/" + item.id);
        }}
      >
        {item.title}
      </h1>
      <p>{item.price}</p>
    </div>
  );
};

export default ProductCard;
