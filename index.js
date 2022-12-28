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

// /* lecture 7 store */
// const redux = require('redux');
// const createStore = redux.createStore;

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

// // reducer function
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

// const store = createStore(reducer);
// console.log('initial state', store.getState());
// const unsubscribe = store.subscribe(() =>
//   console.log('updated state', store.getState())
// );
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// unsubscribe();

// /* lecture 9 Multiple Reducers */
// // single reducer for CAKES and ICE CREAMS
// const redux = require('redux');
// const createStore = redux.createStore;

// // Action Creator function implementation
// const BUY_CAKE = 'BUY_CAKE'; // string constant
// const BUY_ICECREAM = 'BUY_ICECREAM';

// function buyCake() {
//   return {
//     type: BUY_CAKE,
//     info: 'First redux action',
//   };
// }

// function buyIcecream() {
//   return {
//     type: BUY_ICECREAM,
//     info: 'second redux action',
//   };
// }

// // state of Application will be an Object. here is the initial state
// const initialState = {
//   numberOfCakes: 10,
//   numberOfIcecreams: 20,
// };

// // reducer function
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numberOfCakes: state.numberOfCakes - 1, // here we are not mutating the state object. we are returning a new object
//       };
//     case BUY_ICECREAM:
//       return {
//         ...state,
//         numberOfIcecreams: state.numberOfIcecreams - 1, // here we are not mutating the state object. we are returning a new object
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);
// console.log('initial state', store.getState());
// const unsubscribe = store.subscribe(() =>
//   console.log('updated state', store.getState())
// );
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyIcecream());
// store.dispatch(buyIcecream());
// unsubscribe();

// // double reducer one for each CAKES and ICE CREAMS
// const redux = require('redux');
// const createStore = redux.createStore;

// // Action Creator function implementation
// const BUY_CAKE = 'BUY_CAKE'; // string constant
// const BUY_ICECREAM = 'BUY_ICECREAM';

// function buyCake() {
//   return {
//     type: BUY_CAKE,
//     info: 'First redux action',
//   };
// }

// function buyIcecream() {
//   return {
//     type: BUY_ICECREAM,
//     info: 'second redux action',
//   };
// }

// // for each reducer we will have separate initial state
// // initial state of cakes
// const initialCakesState = {
//   numberOfCakes: 10,
// };
// // initial state of ice creams
// const initialIcecreamState = {
//   numberOfIcecreams: 20,
// };

// // reducer function for cakes
// const cakeReducer = (state = initialCakesState, action) => {
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

// // reducer function for ice creams
// const iceCreamReducer = (state = initialIcecreamState, action) => {
//   switch (action.type) {
//     case BUY_ICECREAM:
//       return {
//         ...state,
//         numberOfIcecreams: state.numberOfIcecreams - 1, // here we are not mutating the state object. we are returning a new object
//       };
//     default:
//       return state;
//   }
// };

// // store accepts single reducer function but now we have two reducers. what to do this will be in next lecture.
// const store = createStore(reducer);
// console.log('initial state', store.getState());
// const unsubscribe = store.subscribe(() =>
//   console.log('updated state', store.getState())
// );
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyIcecream());
// store.dispatch(buyIcecream());
// unsubscribe();

/* lecture 10 Combine Reducers */
// double reducer one for each CAKES and ICE CREAMS
const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

// Action Creator function implementation
const BUY_CAKE = 'BUY_CAKE'; // string constant
const BUY_ICECREAM = 'BUY_ICECREAM';

function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action',
  };
}

function buyIcecream() {
  return {
    type: BUY_ICECREAM,
    info: 'second redux action',
  };
}

// for each reducer we will have separate initial state
// initial state of cakes
const initialCakesState = {
  numberOfCakes: 10,
};
// initial state of ice creams
const initialIcecreamState = {
  numberOfIcecreams: 20,
};

// reducer function for cakes
const cakeReducer = (state = initialCakesState, action) => {
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

// reducer function for ice creams
const iceCreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIcecreams: state.numberOfIcecreams - 1, // here we are not mutating the state object. we are returning a new object
      };
    default:
      return state;
  }
};

// store accepts single reducer function but now we have two reducers. so we combine it here as a rootReducer
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(rootReducer);
console.log('initial state', store.getState());
const unsubscribe = store.subscribe(() =>
  console.log('updated state', store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
unsubscribe();
