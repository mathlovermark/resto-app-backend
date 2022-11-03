import React from 'react';

const CoffeeCart = ({
  stateCart,
  dispatch,
  name,
  price,
  image,
  id,
  categories,
}) => {
  const data = stateCart.filter((item) => item.id === id);
  const qty = data[0].qty;
  // const subTotal = data[0].subTotal

  return (
    <div className="coffee-cart-container">
      <div className="coffee-cart-item">
        <img className="coffee-cart-img" src={image} alt="coffee" />
      </div>
      <div className="coffee-cart-container-2">
        <p className="coffee-cart-name"> {`${name}`}</p>
        <p> {`PHP ${price * qty}`}</p>
        <p
          className="coffee-list-button coffee-list-buy"
          onClick={() =>
            dispatch({ type: 'INCREMENT_QTY', payload: { id: id } })
          }
        >
          <i class="fa-solid fa-plus"></i>
        </p>
        {qty}
        <p
          className="coffee-list-button coffee-list-delete"
          onClick={() =>
            dispatch({ type: 'DECREMENT_QTY', payload: { id: id } })
          }
        >
          <i class="fa-solid fa-minus"></i>
        </p>
        <p
          className="coffee-list-button coffee-list-delete"
          onClick={() =>
            dispatch({
              type: 'DELETE_COFFEE_CART',
              payload: {
                id: id,
                name: name,
                price: price,
                categories: categories,
                image: image,
              },
            })
          }
        >
          <i class="fa-solid fa-trash"></i>
        </p>
      </div>
    </div>
  );
};
export default CoffeeCart;
