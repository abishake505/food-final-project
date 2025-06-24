import React, { useContext } from 'react';
import { CardContext } from './CardContext';
import { Link } from 'react-router-dom';

const Cardpage = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    getCartTotal,
    cartCount,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CardContext);

  return (
    <div className='container my-4'>
      <h2 className='mb-4'>YOUR CART</h2>
      <p>Total Items: {cartCount()}</p>

      {cartItems.length === 0 ? (
        <p>Your cart is empty<span><Link to="/home">
            <button className='btn btn-secondary ms-3'>Go Back</button>
            </Link></span></p>
      ) : (
        <div>
          {cartItems.map((product) => (
            <div key={product.id} className='row mb-4 p-3 border rounded shadow-sm align-items-center'>
              <div className='col-md-4'>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '50%', height: 'auto', borderRadius: '8px' }}
                  className='img-fluid'
                />
              </div>

              <div className='col-md-8'>
                <p><strong>Name:</strong> {product.name}</p>
                <p>
                  <strong>Quantity:</strong>
                  <button
                    className='btn btn-sm btn-outline-secondary mx-2'
                    onClick={() => decreaseQuantity(product.id)}
                  >
                    -
                  </button>
                  {product.quantity}
                  <button
                    className='btn btn-sm btn-outline-secondary mx-2'
                    onClick={() => increaseQuantity(product.id)}
                  >
                    +
                  </button>
                </p>
                <p><strong>Ticket Price:</strong> ${product.ticketprice}</p>
                <button
                  className='btn btn-danger btn-sm me-2'
                  onClick={() => removeFromCart(product)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className='text-end'>
            <p><strong>Total Amount:</strong> ${getCartTotal()}</p>
            <button className='btn btn-warning me-2' onClick={clearCart}>Clear Cart</button>
            <Link to="/home">
            <button className='btn btn-secondary'>Go Back</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cardpage;
