import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { CardContext } from '../Context/CardContext';






const Detailpage = () => {

const [page,setpage] = useState([])
let { id } = useParams();
const { addToCart } = useContext(CardContext);



useEffect (()=>{
    
    axios.get(`https://backend-crud-one.vercel.app/product/${id}`)
    .then(response => response.data)
    .then(data=>setpage(data))
    .catch(error => console.error("error fetching data:",error));
},[id])

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
            <div className='col-lg-6 ps-5 mt-5 '>
                <div >
                  <img src={page.image} alt={page.name}  className="card-img-top " style={{objectFit: "", height: "600px", width:"90%"}}/>
                </div >
            </div>
            <div className='col-lg-6 mt-5 text-center pt-5' >
              <p>Name: {page.name}</p>
              <p>Title :{page.title}</p>
              <p>Director Name:{page.director}</p>
              <p>Ticket Price:{page.ticketprice}</p>
              <p>Release Date:{page.releasedate}</p>
              <p>Description:{page.description}</p>
              <Link to="/cart" onClick={()=>{addToCart(page)}}> <button className='btn btn-danger'>ADD TO CART</button></Link>
             
            </div>
        </div>
      </div>
    </>
  )
}

export default Detailpage
