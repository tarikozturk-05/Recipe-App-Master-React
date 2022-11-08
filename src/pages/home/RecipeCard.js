import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ item }) => {
  const navigate = useNavigate();
  console.log(item.recipe);
  return (
    <div>
      <div className="card shadow gap-4 display-1 fs-5 " style={{ width: "25rem", height: "34.5rem" }}>
        <img src={item?.recipe?.image} className="card-img-top" alt="..." />
        <div className="card-body" >
          <h5 className="card-title">{item?.recipe?.label}</h5>

          <button
            href="#"
           className="btn btn-primary"
           style={{backgroundColor:"#1B7F79"}}
           onClick={()=>navigate("/details", {state:item.recipe}) }
           
          > 
            Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
