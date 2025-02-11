import { createStore } from "redux";

// Initial state
const initialState = {
  cart: [],
  search: "",
  selectedCategories: [],
  page: 1,
};

// Actions
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const CHANGE_SEARCH = "CHANGE_SEARCH";
const CHANGE_PAGE = "CHANGE_PAGE";
const TOGGLE_CATEGORY = "TOGGLE_CATEGORY";

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      { const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
      } }
    case REMOVE_FROM_CART:
      // İtem miktarını azaltmak isterseniz
      { const itemToRemove = state.cart.find(item => item.id === action.payload);
      if (itemToRemove && itemToRemove.quantity > 1) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload),
        };
      } }
    case CHANGE_SEARCH:
      return { ...state, search: action.payload };
    case CHANGE_PAGE:
      return { ...state, page: action.payload };
    case TOGGLE_CATEGORY:
      { const newCategories = state.selectedCategories.includes(action.payload)
        ? state.selectedCategories.filter(category => category !== action.payload)
        : [...state.selectedCategories, action.payload];
      return { ...state, selectedCategories: newCategories }; }
    default:
      return state;
  }
};

// Store
const store = createStore(reducer);

export default store;
