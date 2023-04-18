import React, { useContext } from 'react'
import './style.css';
import { Appcontext } from './Second';
import NotFound from "./NotFound";
const Fourth = (props) => {

  const Values=useContext(Appcontext)
let Pagination=[]
  for (let index = 0; index < Values.length; index++) {
    Pagination.push(index+1)
  }

  function anyname(e){
props.setstate(e.target.id)
  }

  let Paginationbox=Pagination.map((num)=>{
    return(
      <p onClick={anyname} id={num} className='Pagination'>{num}</p>
    )
  })
  return (
    <>
    <div className='filteredDishes'>
      {Values.length!=0 ? Values : <NotFound ></NotFound> }
     </div>
     <div className='PaginationDiv'>{Paginationbox}</div>
     </>

  )
}

export default Fourth
