// /* lecture 2 Getting Started */
// console.log("Hello from index.js")

/* lecture 5 Actions */
// const BUY_CAKE = 'BUY_CAKE'; // string constant

// // below is action definition
// {
//   type: BUY_CAKE;
//   info: 'First redux action'
// }

// // Action Creator function implementation
// const BUY_CAKE = 'BUY_CAKE'; // string constant
// function buyCake() {
//   return {
//     type: BUY_CAKE,
//     info: 'First redux action',
//   };
// }

/* lecture 6 Reducers */

// // Action Creator function implementation
// const BUY_CAKE = 'BUY_CAKE'; // string constant
// function buyCake() {
//   return {
//     type: BUY_CAKE,
//     info: 'First redux action',
//   };
// }

// // state of Application will be an Object. here is the initial state
// const initialState = {
//   numberOfCakes: 10,
// };

// // Reducer is defined below
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         numberOfCakes: state.numberOfCakes - 1, // here we are not mutating the state object. we are returning a new object
//       };
//     default:
//       return state;
//   }
// };

// // if state object contain more than one property. than first we spread the state like below
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numberOfCakes: state.numberOfCakes - 1, // here we are not mutating the state object. we are returning a new object
//       };
//     default:
//       return state;
//   }
// };

/* lecture 7 store */

const redux = require('redux');
const createStore = redux.createStore;

// Action Creator function implementation
const BUY_CAKE = 'BUY_CAKE'; // string constant
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action',
  };
}

// state of Application will be an Object. here is the initial state
const initialState = {
  numberOfCakes: 10,
};

// reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1, // here we are not mutating the state object. we are returning a new object
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log('initial state', store.getState());
const unsubscribe = store.subscribe(() =>
  console.log('updated state', store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
