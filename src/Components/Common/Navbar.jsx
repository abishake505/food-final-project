import React, { useContext } from 'react'
import { Link ,useLocation } from 'react-router-dom';
import { CardContext } from '../../Page/Context/CardContext';



const Navbar = ({search, setSearch}) => {
  const{cartCount}=useContext(CardContext)

  const location = useLocation();
  if (location.pathname === "/" ) return null;
  if (location.pathname === "/cart" ) return null;

  return (
    <>
    
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          
          
          <div className="d-flex align-items-center">
            <a className="navbar-brand text-danger" href="#book">
              <span style={{ fontSize: "40px" }}>🎬</span>
            </a>
            <span className="text-white fw-bold ms-2">MBooking</span>
          </div>

          
          <div className="d-none d-lg-flex">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/home" className="nav-link text-black active">🏠Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link text-black active">🛒ViewCart</Link>
              </li>
              <li className="nav-item">
                <Link to="/About"className="nav-link text-black active" href="#contact">📞About Us</Link> 
              </li>
            </ul>
          </div>

          
          <div className="d-flex align-items-center">
            <Link to="/">
              <button className="btn btn-success me-3">Logout</button>
            </Link>
            <i className="fa-solid fa-magnifying-glass text-white me-3"></i>
            <Link to="/cart" className="position-relative me-3">
              <i className="fa-solid fa-cart-shopping fa-lg text-white"></i>
              {cartCount() > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount()}
                </span>
              )}
            </Link>
          </div>

        </div>
      </nav>
    </div>
    </>
  );
}

export default Navbar
