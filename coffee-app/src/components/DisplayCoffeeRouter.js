import React from 'react';
import DisplayedCoffee from './DisplayCoffee';
import AddCoffee from './AddCoffee';
import EditCoffee from './EditCoffee';

const DisplayCoffeeRouter = ({
  state,
  dispatch,
  getIdInfo,
  handleFilterCategories,
  newCategory,
}) => {
  return (
    <>
      <div>
        <div>
          {!state.flag && (
            <button
              className="add-button"
              onClick={() =>
                dispatch({ type: 'SET_FLAG', payload: { flag: true } })
              }
            >
              {' '}
              Add Thy Coffee{' '}
            </button>
          )}
          {state.flag && <AddCoffee dispatch={dispatch} flag={state.flag} />}
          {state.editFlag && (
            <EditCoffee
              dispatch={dispatch}
              state={state}
              editData={state.editData}
            />
          )}
        </div>
        <br />
        <select
          value={state.filteredCategories}
          onChange={(e) => handleFilterCategories(e.target.value)}
        >
          {newCategory.map((category) => (
            <option value={category}> {category} </option>
          ))}
        </select>
      </div>
      <br />
      <div className="coffee-container">
        {state.coffee.map(
          (coffee) =>
            (state.filteredCategories === `All` ||
              state.filteredCategories === coffee.categories) && (
              <DisplayedCoffee
                key={coffee.id}
                id={coffee.id}
                name={coffee.name}
                price={coffee.price}
                image={coffee.image}
                categories={coffee.categories}
                dispatch={dispatch}
                getIdInfo={getIdInfo}
                editFlag={state.flag}
              />
            )
        )}
      </div>
      <br />
      {/* <hr /> */}
    </>
  );
};

export default DisplayCoffeeRouter;
