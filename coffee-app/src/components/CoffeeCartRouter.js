import React from 'react';
import CoffeeCart from './CoffeeCart';

const CoffeeCartRouter = ({ total, state, dispatch }) => {
  return (
    <>
      <div className="coffee-cart-container">
        <div className="cart-description">
          <p className="cart-description-header"> Your Cart </p>
          <p>
            <strong> Total in Cart: </strong>
            Php {total}
          </p>
          <button className="add-button"> Checkout </button>
        </div>
        {}
        <div>
          {state.cart.map((newCart, index) => (
            <CoffeeCart
              key={newCart.index}
              id={newCart.id}
              name={newCart.name}
              price={newCart.price}
              image={newCart.image}
              categories={newCart.categories}
              dispatch={dispatch}
              stateCart={state.cart}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CoffeeCartRouter;
