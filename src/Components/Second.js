//special menu
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import Third from "./Third";
import Fourth from "./Fourth";


export const Appcontext=React.createContext()

const Second = () => {
  const [setFullApi, setStateFullApi] = useState([]);
  const [setfilter,setstatefilter]=useState([])
  const [setcolor,setstatecolor]=useState('')
  const [firstState,firstsetstate]=useState(1)
  const [laststate,lastsetstate]=useState(4)
  const [setPopup,setstatePopup]=useState()
  const [setActive,setstateActive]=useState(false)
  const [setCart,setstateCart]=useState([])
  const [setFullinfo,setstateFullinfo]=useState([])
  const [setActiveinfo,setstateActiveinfo]=useState(false)



 

  async function Fulldetails() {
    const Api = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
    let details = await axios.get(Api);
    console.log(details.data.meals);
    let Information = details.data.meals;
    setStateFullApi(Information);
  }

  let lastPage=firstState*laststate
  let firstpage=lastPage - laststate

  let Pages=setfilter.slice(firstpage,lastPage)





  useEffect(() => {
    Fulldetails();
  },[]);

function displayOffFullinfo(){
setstateActiveinfo(false)
}

  function Popup(id) {
setstatePopup(id)
setstateActive(true)
}

function AddtoCart(id){

  let CartItems=setFullApi.filter((items)=>{
    console.log("Id  ,idMeal",id,items.idMeal);
    return id===items.idMeal
  }).map((items)=>{
    return(
    <div>
       <img className="cartImg"  src={items.strMealThumb}/>
       <h6>{items.strMeal} ,  {items.strCategory}</h6>
    </div>
    )
   
  })
setstateCart([...setCart,CartItems])
setstatePopup(false)
}
console.log(setCart);

function FullDetailsAre(id){
  let FullInfo=setFullApi.filter((items)=>{
   return items.idMeal===id
  }).map((items)=>{
    return(
      <div className="FullDetails">
        <div className="FullDetailsDiv">
<img className="Fulldetailsimg" src={items.strMealThumb}/>
<div className="fullInfo">
<span className="TitleFullino"><u>category</u></span><h2>  {items.strCategory}</h2>
<span className="TitleFullino"><u>Meal</u></span><h2>  {items.strMeal}</h2>
<span className="TitleFullino"><u>Ingredient</u></span><h3>  {items.strIngredient1}, {items.strIngredient2} ,{items.strIngredient3}, {items.strIngredient4}, {items.strIngredient5}</h3>
<span className="TitleFullino"><u>Instructions</u></span><h4> {items.strInstructions}</h4>
<button onClick={displayOffFullinfo} className="close">x</button>
</div>
</div>
      </div>
    )
  })

  setstateFullinfo(FullInfo)
  setstateActiveinfo(true)

}


let PopuInfo=setFullApi.filter((item)=>{
  return setPopup===item.idMeal
 
}).map((items)=>{
  return (
    <div className="popup">
      <div className="content">
      <img className="popupImg" src={items.strMealThumb}/>
      <h3>{items.strCategory}   ,   {items.strMeal}</h3>
<button className="close" onClick={displayOff}>x</button>
<button className="CartBtn" onClick={()=>AddtoCart(items.idMeal)}>Add to cart</button>
<button className="fullDetails" onClick={()=>FullDetailsAre(items.idMeal)}>Full Details</button>
      </div>
      
    </div>
  )
})

function displayOff(){
  setstateActive(false)
}




  function Display(ctgry){
    
    let FilteredDishes=setFullApi.filter((items)=>{
        return ctgry===items.strCategory
    }).map((items)=>{
        return (
          <div className="filteredDishDiv">
              <a href="javaScript:;" onClick={()=>Popup(items.idMeal)}>
                <img className='filteredDish-img' src={items.strMealThumb}/>
                <h3 className="Special-title">
            {items.strMeal} , {items.strCategory}
          </h3>
          </a>
            </div>
            
            
        )
    })
setstatefilter(FilteredDishes)
setstatecolor(ctgry)
  }

  let maximumitem = 8;

  let SpecialInfo = setFullApi.map((items, index) => {
    if (maximumitem > index) {
      return (
        <div className="SpecialImg">
          <a href="javaScript:;" onClick={()=>Popup(items.idMeal)}>
          <img className="SpecialImg-img" src={items.strMealThumb}></img>
          <h3 className="Special-title">
            {items.strMeal} , {items.strCategory}
          </h3>
          </a>
        </div>
      );
    }
  });

  return (
    <>
    {setActive && PopuInfo}
    {setActiveinfo && setFullinfo}
     <div>
      <Appcontext.Provider value={Pages}>
        <div className="specialMenuDiv">
      <h3 className="SpecialMenu-Title">Special menu</h3>
      </div>
      <div className="special-Menu">{SpecialInfo}</div>
      <div className="Addtocart">
      <h3 className="cart-Title">Cart Collection  : =   </h3>

        {setCart}
      </div>

      <div>
        <Third fun={Display}  color={setcolor}/>
      </div>
     
      <div>
        <Fourth  setstate={firstsetstate}/>
      </div>
      </Appcontext.Provider>
    </div>
    </>
  );
};

export default Second;
