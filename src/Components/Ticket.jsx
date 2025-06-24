import React from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'


const Ticket = (props) => {
  return (
    <>
    
     <Card
    hoverable
   
    cover={<img alt="example" style={{height:"400px"}} src={props.img} />}
  >
    <div className='card-body g-0 '>
    <p>Name:{props.name}</p>
    <p>Title:{props.title}</p>
    <p>Release Date:{props.releasedate}</p>
    <p>Director:{props.director}</p>
    <p>Budget:{props.budget}</p>
    <p>Ticketprice:{props.ticketprice}</p>
    <div className='d-flex justify-content-space-between'>
    
    <button className='btn btn-primary' style={{width:"110px",marginRight:"30px"}}>Add to Cart</button>

    <Link to={`/${props.id}`}>
    <button className='btn btn-success'>Book Now</button>
    </Link>
    </div>
    </div>
  </Card>
    </>
  )
}

export default Ticket
