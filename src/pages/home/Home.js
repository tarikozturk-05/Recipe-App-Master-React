import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";

// import 'bootstrap/dist/css/bootstrap.min.css';
import HomeDiv, {
  HomeButton,
  HomeLabel,
  HomeOption,
  HomeSelect,
  Homeİnput,
} from "./Home.style";
import RecipeCard from "./RecipeCard";

const Home = () => {
  const [recip, setRecip] = useState([]);
  const [value, setValue] = useState({
    foodname: "",
    mealtype: "",
  });

  const apiId = "1b28d0c7";
  const apiKeyy = "9dd2626769af8779895e42901917977f	";
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${value.foodname}&app_id=${apiId}&app_key=${apiKeyy}&mealType=${value.mealtype}  `;

  const getApi = async () => {
    try {
      const { data } = await axios(url);
      console.log(data);
      setRecip(data.hits);
      console.log(data.hits);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    localStorage.setItem("recip", JSON.stringify(recip));
    getApi();
  }, [recip]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getApi();
    setValue({
      foodname: "",
      mealtype: "",
    });
  };

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="home">
      <Navbar />
      <HomeDiv>
        <form onSubmit={handleSubmit} action="">
          <HomeLabel htmlFor="">Food Name</HomeLabel>
          <br />
          <Homeİnput
            onChange={handleChange}
            value={value.foodname}
            id="foodname"
            type="text"
            required
            placeholder="foodname"
          />
         
          <HomeLabel htmlFor="">Meal Type?</HomeLabel>
          <br />
          <HomeSelect onChange={handleChange} name="" id="mealtype" required>
            <HomeOption value="Breakfast">Breakfast</HomeOption>
            <HomeOption value="Lunch">Lunch</HomeOption>
            <HomeOption value="Dinner">Dinner</HomeOption>
            <HomeOption value="Snack">Snack</HomeOption>
            <HomeOption value="TeaTime">TeaTime</HomeOption>
          </HomeSelect>
        
          <HomeButton type="submit">Submit</HomeButton>
        </form>
      </HomeDiv>

      <div className="my-4 d-flex flex-wrap gap-3 align-items-center justify-content-center">
        {recip &&
          recip.map((item) => {
            return <RecipeCard item={item} />;
          })}
      </div>
    </div>
  );
};

export default Home;
