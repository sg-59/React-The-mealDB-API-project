import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './style.css'

const Third = (props) => {
    const [setCtgry,setstateCtgry]=useState([])

   async function AllCategory(){
const Api="https://www.themealdb.com/api/json/v1/1/categories.php"
let details=await axios.get(Api)
console.log("category",details.data.categories);
let Informations=details.data.categories
setstateCtgry(Informations)

    }
useEffect(()=>{
    AllCategory()
},[])
var colour
let Categories=setCtgry.map((ctgry)=>{
  let Funname=ctgry.strCategory
  if(props.color===Funname){
colour="black"
  }else{
    colour='#416194'
  }
    return (
        <div className='BtnCategoryDiv'>
         
            <button onClick={()=>props.fun(Funname)} style={{backgroundColor:colour}}  className='BtnCategory'>{ctgry.strCategory}</button>
            
        </div>
    )
})
  return (
    <>
        <div className="specialMenuDiv">
      <h3 className="SpecialMenu-Title">Categories</h3>
      </div>
    <div className='Categories'>
      {Categories}
    </div>
    </>
  )
}

export default Third
