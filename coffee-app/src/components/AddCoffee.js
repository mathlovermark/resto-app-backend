import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const AddItems = ({ dispatch, flag }) => {
  const [newItem, setNewItem] = useState({
    id: '',
    name: '',
    varieties: '',
    image: '',
    price: 0,
  });
  const onType = (e) => {
    const inputName = e.target.name;
    switch (inputName) {
      case 'name':
        setNewItem({ ...newItem, name: e.target.value });
        break;
      case 'varieties':
        setNewItem({ ...newItem, varieties: e.target.value });
        break;
      case 'price':
        setNewItem({ ...newItem, price: e.target.value });
        break;
      case 'image':
        setNewItem({ ...newItem, image: e.target.value });
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <forms className="forms-container">
        <h2> Your Coffee </h2>
        <label> Name </label>
        <input name="name" type="text" value={newItem.name} onChange={onType} />
        <br />
        <label> Varieties </label>
        <input
          name="varieties"
          type="text"
          value={newItem.varieties}
          onChange={onType}
        />
        <br />
        <label> Price </label>
        <input
          name="price"
          type="number"
          value={newItem.price}
          onChange={onType}
        />
        <br />
        <label> Image </label>
        <input
          name="image"
          type="text"
          value={newItem.image}
          onChange={onType}
        />
        <br />
      </forms>
      <p
        className="coffee-list-button-add coffee-list-buy"
        onClick={() => {
          dispatch({
            type: 'ADD_COFFEE',
            payload: {
              id: uuidv4(),
              name: newItem.name,
              varieties: newItem.varieties,
              image: newItem.image,
              price: newItem.price,
            },
          });
          setNewItem({
            id: '',
            name: '',
            varieties: '',
            image: '',
            price: 0,
          });
        }}
      >
        {' '}
        <i class="fa-solid fa-plus"></i>
      </p>
      &nbsp;
      <p
        className="coffee-list-button-add coffee-list-delete"
        onClick={() => dispatch({ type: 'SET_FLAG', payload: { flag: false } })}
      >
        <i class="fa-solid fa-minus"></i>
      </p>
    </div>
  );
};
export default AddItems;
