import { useState } from 'react';

const EditItem = ({ dispatch, editData }) => {
  const [itemData, setEditData] = useState({
    id: editData.id,
    name: editData.name,
    categories: editData.categories,
    image: editData.image,
    price: editData.price,
  });
  const onType = (e) => {
    const EditData = e.target.name;

    switch (EditData) {
      case 'name':
        setEditData({
          ...itemData,
          name: e.target.value,
        });
        break;
      case 'categories':
        setEditData({
          ...itemData,
          categories: e.target.value,
        });
        break;
      case 'image':
        setEditData({
          ...itemData,
          image: e.target.value,
        });
        break;
      case 'price':
        setEditData({
          ...itemData,
          price: e.target.value,
        });
        break;
      default:
        break;
    }
  };
  //   const handleCancel = () => {};
  return (
    <div>
      {' '}
      <forms className="forms-container">
        <h2> Edit thy Coffee </h2>
        <label> Name </label>
        <input
          name="name"
          type="text"
          value={itemData.name}
          onChange={onType}
        />
        <br />
        <label> Categories </label>
        <input
          name="categories"
          type="text"
          value={itemData.categories}
          onChange={onType}
        />
        <br />
        <label> Price </label>
        <input
          name="price"
          type="text"
          value={itemData.price}
          onChange={onType}
        />
        <br />
        <label> Image </label>
        <input
          name="image"
          type="text"
          value={itemData.image}
          onChange={onType}
        />
        <br />
      </forms>
      <p
        className="coffee-list-button-add coffee-list-buy"
        onClick={() => {
          dispatch({
            type: 'UPDATE_COFFEE',
            payload: {
              id: itemData.id,
              name: itemData.name,
              categories: itemData.categories,
              price: itemData.price,
              image: itemData.image,
            },
          });
          setEditData({
            id: '',
            name: '',
            categories: '',
            image: '',
            price: '',
          });
        }}
      >
        <i class="fa-solid fa-file-pen"></i>
      </p>
      <p
        className="coffee-list-button-add coffee-list-delete"
        onClick={() =>
          dispatch({ type: 'SET_EDIT_FLAG', payload: { editFlag: false } })
        }
      >
        <i class="fa-solid fa-ban"></i>
      </p>
    </div>
  );
};

export default EditItem;
