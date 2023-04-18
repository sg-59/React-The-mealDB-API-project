//Random Details


import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import Image from "./Images/chef.png";
import Checkout from "./Checkout";

const First = () => {
  const [setRandomApi, setstateRandomApi] = useState([]);

  async function RandomApi() {
    const Api = "https://www.themealdb.com/api/json/v1/1/random.php";
    let details = await axios.get(Api);
    console.log("*", details.data.meals);
    let Information = details.data.meals;
    setstateRandomApi(Information);
  }

  useEffect(() => {
    RandomApi();
  }, []);

  let maximumitem = 8;



  let RandomInfo = setRandomApi.map((items) => {
    return (
      <>
      <div className="HeaderStyle"> <img className="Logo" src="https://www.greenpanda.in/wp-content/uploads/no-farmers-no-food-logo-stickers-for-cars0002.jpg"/>
       <span className="NameOfApp"><u>Food Cart</u></span></div>
      
      <div className="Fullbody">
      <div className="TitleImg">
        <img src={items.strMealThumb} className="TitleImg-img" />
        <h3 className="Header-title">
          {items.strMeal} , {items.strCategory}
        </h3>
       </div>
       <div className="Title-chefimg">
       <img className="chef-img" src={Image} />
       </div>
     
      </div>
  
      </>
    );
  });

  return (
   
      <div>
        {RandomInfo}
      </div>
     
    
  );
};

export default First;
