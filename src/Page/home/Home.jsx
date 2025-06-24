import React, { useState, useEffect } from 'react';
import Ticket from '../../Components/Ticket';

const Home = () => {
  const [useTict, setuseTict] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('https://backend-crud-one.vercel.app/product')
      .then(response => response.json())
      .then(data => setuseTict(data))
      .catch(error => console.error("Failed to fetch movies:", error));
  }, []);

  const filtered = useTict.filter((movie) =>
    movie.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className='container pt-5'>
        <div className='row mb-4'>
          <div className='col-md-6 offset-md-3'>
            <input
              type="text"
              className="form-control"
              placeholder="Search by movie name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <h1 className='d-flex justify-content-center align-items-center mt-3' >Welcome to Home Page</h1>
        </div>

        <div className='row'>
          {filtered.length > 0 ? (
            filtered.map((tkat) => (
              <div className='col-md-3 mb-4' key={tkat._id}>
                <Ticket
                  
                  img={tkat.image}
                  name={tkat.name}
                  title={tkat.title}
                  releasedate={tkat.releasedate}
                  director={tkat.director}
                  budget={tkat.budget}
                  ticketprice={tkat.ticketprice}
                  id={tkat._id}
                />
              </div>
            ))
          ) : (
            <p className="text-center">No movies found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
