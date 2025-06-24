import React from 'react'

const Aboutpage = () => {
  return (
    <>
      <div>
        <div className='container bg-dark ' style={{marginTop:"150px"}}>
            <h1 className='text-white d-flex justify-content-center align-items-center ' >Welcome to our About Page</h1>
            <div><hr style={{ border: "1px solid gray", width: "100%" }} /></div>
            <div className='row'>
                <div className='col-md-2'>
                    <ul className='text-white'>
                        <h3 className='text-secondary'>About</h3>
                        <p className='mt-5'>contact Us</p>
                        <p>Carrier</p>
                        <p>Booking services </p>
                        <p>Press</p>
                        <p>Corporate Information</p>
                    </ul>
                </div>
                <div className='col-md-2'>
                    <ul className='text-white'>
                        <h3 className='text-secondary'> Companies</h3>
                        <p className='mt-5'>Ticket New</p>
                        <p>Book My Show</p>
                        <p>My District </p>
                    </ul>
                </div>
                <div className='col-md-2'>
                    <ul className='text-white'>
                        <h3 className='text-secondary'> Help</h3>
                        <p className='mt-5'>Payment</p>
                        <p>Cancellation</p>
                        <p>Date change</p>
                        <p>Show Time</p>
                    </ul>
                </div>
                <div className='col-md-2'>
                    <ul className='text-white'>
                        <h3 className='text-secondary'> policy</h3>
                        <p className='mt-5'>Term of use</p>
                        <p>Security</p>
                        <p>Privacy</p>
                        <p>sitemap</p>
                    </ul>
                </div>
                <div className='col-md-2'>
                    <ul className='text-white'>
                        <h3 className='text-secondary'> Mail Us</h3>
                        <p className='mt-5'>abishake@gmail.com</p>
                    </ul>
                </div>
                <div className='col-md-2'>
                    <ul className='text-white'>
                        <h3 className='text-secondary'> Enquiry</h3>
                        <p className='mt-5'>Support services<br></br>(24/7)</p>
                    </ul>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-8'></div>
                <div className='col-md-2'>
                <i className="fa-brands fa-facebook text-white p-2"></i>
                <i className="fa-brands fa-google text-white p-2"></i>
                <i className="fa-brands fa-twitter text-white p-2"></i>
                <i className="fa-brands fa-x-twitter text-white p-2"></i>
                <i className="fa-brands fa-instagram text-white p-2"></i>
                <i className="fa-regular fa-envelope text-white p-2"></i>
                </div>
            </div>
            <div><hr style={{ border: "1px solid gray", width: "100%" }} /></div>
            <h3 className='text-secondary d-flex justify-content-center align-items-center'>2025 Brassy Academy , All Rights Received</h3>
        </div>
      </div>
    </>
  )
}

export default Aboutpage
