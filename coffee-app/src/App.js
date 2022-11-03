import './App.css';
// import { v4 as uuidv4 } from 'uuid';
import DisplayCoffeeRouter from './components/DisplayCoffeeRouter';
import { useReducer, useEffect } from 'react';
import CoffeeCartRouter from './components/CoffeeCartRouter';
import SliderImage from './components/SliderImage';
import { SliderData } from './components/SliderData';
import { Routes, Route } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';

const App = () => {
  const initialState = {
    coffee: [
      // {
      //   id: 1,
      //   name: 'Matters Coffee',
      //   categories: 'Matters Hot Coffees',
      //   price: 50,
      //   image:
      //     'https://archive.ph/pIsQj/d329fd883697e76a7426cf7b1f9044398012dfca.jpg',
      // },
      // {
      //   id: 2,
      //   name: 'Mocha Coffee',
      //   categories: 'Matters Hot Coffees',
      //   price: 60,
      //   image:
      //     'https://4.imimg.com/data4/IM/WQ/MY-764091/mocha-coffee-premixes-500x500.jpg',
      // },
      // {
      //   id: 3,
      //   name: 'Latte Coffee',
      //   categories: 'Matters Hot Coffees',
      //   price: 60,
      //   image:
      //     'https://i.pinimg.com/564x/7b/7f/fc/7b7ffca8bcf3072d3b94731ad511828c.jpg',
      // },
      // {
      //   id: 4,
      //   name: 'Caramel Machiato',
      //   categories: 'Matters Hot Coffees',
      //   price: 60,
      //   image:
      //     'https://www.youscreamshop.com/webadmin/uploads/caramel-macchiato-(1).jpg',
      // },
      // {
      //   id: 5,
      //   name: 'Cappuccino',
      //   categories: 'Matters Hot Coffees',
      //   price: 75,
      //   image:
      //     'https://i.pinimg.com/564x/6c/1a/88/6c1a88c8b2d5e59f24224bffbfa7aea8.jpg',
      // },
      // {
      //   id: 6,
      //   name: 'Matters Frapp',
      //   categories: 'Matters Frappuccino',
      //   price: 100,
      //   image:
      //     'https://lemonsandzest.com/wp-content/uploads/2021/01/Mocha-Frappuccino-20-500x500.jpg',
      // },
      // {
      //   id: 7,
      //   name: 'Mocha Frapp',
      //   categories: 'Matters Frappuccino',
      //   price: 110,
      //   image:
      //     'https://livinghealthywithchocolate.com/wp-content/uploads/2015/04/Healthy-Paleo-Starbucks-Mocha-Frappuccino-Recipe-dairyfree-glutenfree-sugarfree1-500x500.jpg',
      // },
      // {
      //   id: 8,
      //   name: 'White Choco Frapp',
      //   categories: 'Matters Frappuccino',
      //   price: 110,
      //   image:
      //     'https://coffeeatthree.com/wp-content/uploads/starbucks-white-chocolate-frappuccino-recipe1-500x500.jpg',
      // },
      // {
      //   id: 9,
      //   name: 'Java Chip Frapp',
      //   categories: 'Matters Frappuccino',
      //   price: 125,
      //   image:
      //     'https://coffeeaffection.com/wp-content/uploads/2021/03/java-chip-frappuccino-500x500.jpg',
      // },
      // {
      //   id: 10,
      //   name: 'CC Extreme Frapp',
      //   categories: 'Matters Frappuccino',
      //   price: 125,
      //   image:
      //     'https://i.pinimg.com/564x/4a/63/9a/4a639a215eadda3fffe888d7b79305f1.jpg',
      // },
      // {
      //   id: 11,
      //   name: 'Matters Iced',
      //   categories: 'Matters Cold Coffee',
      //   price: 75,
      //   image:
      //     'https://www.thecookierookie.com/wp-content/uploads/2021/05/featured-iced-espresso-recipe-500x500.jpg',
      // },
      // {
      //   id: 12,
      //   name: 'Vanilla Iced',
      //   categories: 'Matters Cold Coffee',
      //   price: 80,
      //   image:
      //     'https://celebratingsweets.com/wp-content/uploads/2017/04/Vanilla-Cold-Brew-Coffee-3-500x500.jpg',
      // },
      // {
      //   id: 13,
      //   name: 'Iced Latte',
      //   categories: 'Matters Cold Coffee',
      //   price: 80,
      //   image:
      //     'https://valentinascorner.com/wp-content/uploads/2022/02/Iced-Caramel-Latte-500x500.jpg',
      // },
      // {
      //   id: 14,
      //   name: 'White Choco Iced',
      //   categories: 'Matters Cold Coffee',
      //   price: 90,
      //   image:
      //     'https://coffeeatthree.com/wp-content/uploads/starbucks-iced-white-mocha-recipe-500x500.jpg',
      // },
      // {
      //   id: 15,
      //   name: 'Iced Cinnamon',
      //   categories: 'Matters Cold Coffee',
      //   price: 90,
      //   image:
      //     'https://onesweetappetite.com/wp-content/uploads/2022/06/Cinnamon-Dolce-Latte-8-500x500.jpg',
      // },
      // {
      //   id: 16,
      //   name: 'Matters MT',
      //   categories: 'Matters Milktea',
      //   price: 90,
      //   image:
      //     'https://takestwoeggs.com/wp-content/uploads/2021/04/Brown-Sugar-Milk-Tea-Boba-Recipe-Takestwoeggs-Easy-Asian-Inspired-Recipes-sq-500x500.jpg',
      // },
      // {
      //   id: 17,
      //   name: 'Chocolate',
      //   categories: 'Matters Milktea',
      //   price: 90,
      //   image:
      //     'https://myveganminimalist.com/wp-content/uploads/2022/02/Chocolate-Bubble-Milk-Tea-13-500x500.jpg',
      // },
      // {
      //   id: 18,
      //   name: 'Strawberry',
      //   categories: 'Matters Milktea',
      //   price: 90,
      //   image:
      //     'https://takestwoeggs.com/wp-content/uploads/2022/05/Strawberry-Milk-Tea-Takestwoeggs-Final-PHotography-sq-500x500.jpg',
      // },
      // {
      //   id: 19,
      //   name: 'Thai Bubble',
      //   categories: 'Matters Milktea',
      //   price: 100,
      //   image:
      //     'https://sugaryums.co.uk/wp-content/uploads/2022/03/Thai-Milk-Tea-SugarYums-16-500x500.jpg',
      // },
      // {
      //   id: 20,
      //   name: 'Oreo Milktea',
      //   categories: 'Matters Milktea',
      //   price: 100,
      //   image:
      //     'https://myveganminimalist.com/wp-content/uploads/2022/05/Oreo-Bubble-Milk-Tea-Boba-22-500x500.jpg',
      // },
    ],
    editFlag: false,
    flag: false,
    filteredCategories: 'All',
    cart: [],
    editData: {
      id: '',
      name: '',
      categories: '',
      image: '',
      price: '',
    },
    totalAmount: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_DATA':
        return { ...state, coffee: action.payload };
      case 'FETCH_CART':
        return { ...state, cart: action.payload };
      case 'DELETE_COFFEE':
        const deleteCoffee = action.payload;
        axios
          .delete(
            `http://localhost:8080/coffee/${deleteCoffee.id}`,
            deleteCoffee
          )
          .then((response) => {
            console.log(response);
          });
        return {
          ...state,
          coffee: state.coffee.filter(
            (coffee) => coffee.id !== action.payload.id
          ),
        };
      case 'ADD_COFFEE_CART':
        const newCoffeeCart = action.payload;
        axios
          .post(`http://localhost:8080/cart`, newCoffeeCart)
          .then((response) => {
            console.log(response);
          });
        const filtered = state.cart.filter(
          (coffee) => coffee.id === action.payload.id
        );
        if (filtered.length > 0) {
          const updatedCart = state.cart.map((coffee) => {
            if (coffee.id === action.payload.id) {
              return { ...coffee, qty: coffee.qty + 1 };
            }
            return coffee;
          });
          return { ...state, cart: updatedCart };
        } else {
          const targetCoffee = state.coffee.filter(
            (coffee) => coffee.id === action.payload.id
          );
          const newItem = { ...targetCoffee[0], qty: 1 };
          return { ...state, cart: [...state.cart, newItem] };
        }
      case 'ADD_COFFEE':
        const checkId = state.coffee.filter(
          (coffee) =>
            coffee.name.trim().toLowerCase() ===
            action.payload.name.trim().toLowerCase()
        );
        if (checkId.length > 0) {
          alert(`Coffee is in the list`);
          return state;
        } else {
          const newCoffee = action.payload;
          axios
            .post('http://localhost:8080/coffee', newCoffee)
            .then((response) => {
              console.log(response);
            });
          return {
            ...state,
            coffee: [action.payload, ...state.coffee],
          };
        }
      case 'EDIT_COFFEE':
        return { ...state, editFlag: true, editData: action.payload };
      case 'UPDATE_COFFEE':
        const updatedItem = state.coffee.map((coffee) => {
          if (coffee.id === action.payload.id) {
            return action.payload;
          }
          return coffee;
        });
        const updatedCart = state.cart.map((coffee) => {
          if (coffee.id === action.payload.id) {
            return { ...coffee, ...action.payload };
          }
          return coffee;
        });
        const editCoffee = action.payload;
        axios
          .put(`http://localhost:8080/coffee/${editCoffee.id}`, editCoffee)
          .then((response) => {
            dispatch({
              type: 'UPDATE_COFFEE',
              payload: {
                id: editCoffee.id,
                name: editCoffee.name,
                categories: editCoffee.categories,
                price: editCoffee.price,
                image: editCoffee.image,
              },
            });
          });
        return {
          ...state,
          editFlag: false,
          coffee: updatedItem,
          cart: updatedCart,
        };
      case 'INCREMENT_QTY':
        const checkCartIdInc = state.cart.filter(
          (coffee) => coffee.id === action.payload.id
        );
        if (checkCartIdInc.length > 0) {
          const updatedCartQty = state.cart.map((coffee) => {
            if (coffee.id === action.payload.id) {
              return { ...coffee, qty: coffee.qty + 1 };
            }
            return coffee;
          });
          return { ...state, cart: updatedCartQty };
        }
        break;
      case 'DECREMENT_QTY':
        const checkCartIdDec = state.cart.filter(
          (coffee) => coffee.id === action.payload.id
        );
        let deleteFlag = false;
        // const cartCheck = checkCartIdDec[0];
        if (checkCartIdDec.length > 0) {
          let updatedCartQty = state.cart.map((coffee) => {
            if (coffee.id === action.payload.id) {
              if (coffee.qty - 1 > 0) {
                return { ...coffee, qty: coffee.qty - 1 };
              }
              deleteFlag = true;
            }
            return coffee;
          });
          if (deleteFlag === true) {
            updatedCartQty = updatedCartQty.filter(
              (coffee) => coffee.id !== action.payload.id
            );
          }
          return { ...state, cart: updatedCartQty };
        }
        break;
      case 'DELETE_COFFEE_CART':
        const deleteCoffeeCart = action.payload.id;
        axios
          .delete(
            `http://localhost:8080/cart/${deleteCoffeeCart}`,
            deleteCoffeeCart
          )
          .then((response) => {
            console.log(response);
          });
        return {
          ...state,
          cart: state.cart.filter((coffee) => coffee.id !== action.payload.id),
        };
      case 'SET_FILTERED_CATEGORIES':
        return { ...state, filteredCategories: action.payload.categories };
      case 'SET_FLAG':
        return { ...state, flag: action.payload.flag };
      case 'SET_EDIT_FLAG':
        return { ...state, editFlag: action.payload.flag };
      default:
        break;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios.get('http://localhost:8080/coffee').then((response) => {
      dispatch({ type: 'FETCH_DATA', payload: response.data });
    });
  }, []);
  useEffect(() => {
    axios.get('http://localhost:8080/cart').then((response) => {
      dispatch({ type: 'FETCH_CART', payload: response.data });
    });
  }, []);

  const handleFilterCategories = (categ) => {
    dispatch({
      type: 'SET_FILTERED_CATEGORIES',
      payload: { categories: categ },
    });
  };

  const newCategories = () => {
    const newCategory = ['All'];
    state.coffee.map((item) => {
      if (newCategory.indexOf(item.categories) < 0) {
        newCategory.push(item.categories);
      }
      return item;
    });
    return newCategory;
  };
  const newCategory = newCategories();

  const getIdInfo = (id) => {
    const itemId = state.coffee.filter((item) => item.id === id);
    dispatch({ type: 'EDIT_COFFEE', payload: itemId[0] });
  };

  const getCartTotal = () => {
    let cartTotal = 0;
    state.cart.map((item) => {
      cartTotal += item.price * item.qty;
    });
    return cartTotal;
  };

  const total = getCartTotal();

  return (
    <div className="App">
      <h2 className="coffee-brand"> Coffee Matters </h2>
      <div className="cover-photo">
        <SliderImage slides={SliderData} />
      </div>
      <nav>
        <Link className="nav-item" to="">
          {' '}
          Home <i class="fa-solid fa-house"></i>
        </Link>{' '}
        {/* <Link className="nav-item" to="menu">
          {' '}
          Menu <i class="fa-solid fa-bars"></i>
        </Link>{' '} */}
        <Link className="nav-item" to="cart">
          {' '}
          Cart <i class="fa-solid fa-cart-shopping"></i>{' '}
        </Link>
      </nav>
      <br />
      <br />
      <Routes>
        <Route
          path=""
          element={
            <DisplayCoffeeRouter
              state={state}
              dispatch={dispatch}
              getIdInfo={getIdInfo}
              handleFilterCategories={handleFilterCategories}
              newCategory={newCategory}
            />
          }
        />
        <Route
          path="cart"
          element={
            <CoffeeCartRouter total={total} state={state} dispatch={dispatch} />
          }
        />
      </Routes>
      <footer>
        <a href="https://www.facebook.com/mathlovermark">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/mathlovermark/">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <p> Coffee Matters, 2022 </p>
      </footer>
    </div>
  );
};

export default App;
