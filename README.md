# react_redux_vishwas_course

<!-- Introduction lecture 1 -->

## lecture 1 Redux

- Redux is a library
- Redux is a `predictable`,`state container` for `Javascript apps`
- so it has three parts
  1. It is for JavaScript apps
  2. It is a state container
  3. It is predictable

### 1. Redux is for JavaScript applications

- Redux is not tied to React
- can be used with React, Angular, Vue or even with vanilla Javascript
- so Redux is a library for javascript applications

### 2. Redux is a state container

- Redux stores the state of your application
- consider in a react app `state of a component` can be for example

```
//LoginFormComponent
state = {
  username: '',
  password: '',
  submitting: false
}

// UserListComponent
state = {
  users: []
}
```

- so state of an application is the state representated by all the individual components of that app (`this includes the data and the UI logic`)
- so in a typical application we have all the components state as below

```
// Application

state = {
  isUserLoggedIn: true,
  username: 'vishwas',
  profileUrl: '',
  onlineUsers: [],
  isModalOpened: false
}
```

### 3. Redux is predictable

- predictable in what way?
- redux is a state container
- the state of the application can change
- for example: todo list app item state can change from `pending` to `completed`
- so in redux, all state transitions are explicit and it is possible to keep track of them
- so the changes to your application's state become predictable

## React + Redux

- why would we want to use redux in a react application?
- components in react have their own state
- why do we need another tool to help manage that state?

![initialy required name in component B](./pictures/why_need_redux_1.PNG)
![than we required name in component D](./pictures/why_need_redux_2.PNG)
![And than if we required at component G](./pictures/why_need_redux_3.PNG)

- so from the above picture we can see if many components are sharing the same state. state managment become cumbersum. lifting the state every time and drilling the state through props is very hectic
- with redux state management is easy. in redux all the states are stored in a container. which we can than forward to the only components which needs it. as seen in picture

![Redux state container](./pictures/redux_state_container.PNG)

### Do we really have a problem?

- as react context is preventing prop drilling
- useContext + useReducer in combination can do this job
- As Redux 1.0 was developed in August 2015. that time we don't have useContext and useReducer

## React-Redux library

- React-Redux is the official Redux UI binding library for React
- React and Redux are separate things
- React is UI library
- Redux is state managment library
- React-Redux library is combining both. a picture for understandin.

![React-Redux library](./pictures/React-Redux_library.PNG)

## Course Structure

- First we will learn just the Redux library
- than we will learn React-Redux in this course

<!-- lecture 2 Getting started -->

## lecture 2 Getting Started

1. install node
2. install npm
3. run the command in the root folder. it will create a `package.json` file

```
npm init --yes
```

4. again run another command

```
npm install redux
```

5. create a file `index.js` with below code

```
console.log('From index.js')
```

6. in terminal `node index.js`. it will console log the message

## lecture 3 Three Core Concepts

- A scenario with an example from the picture
  ![three core concepts](./pictures/three_core_concepts.PNG)

- in relation to Redux the scenario can be picture as below
  ![three core concepts in Redux](./pictures/three_core_concepts_continued.PNG)

## lecture 4 Three Principles

### First Principle

** The state of your whole application is stored in an object tree within a single store**

- in simple language we have to maintain our application state in a single object which would be managed by the Redux store.

- lets assume we are tracking the number of cakes on the shelf in a store our object will look something like

```
{
  numberOfCakes: 10
}
```

### Second Principle

** The only way to change the state is to emit an action, an object describing what happend **

- in simple terms to update the state of your app, you need to let Redux know about that with an `action`.
- we are not allowed to directly update the state object
  <u>Cake Shop Example</u>
  Let the shopkeeper know about your action - BUY_CAKE. to represent the action in code well it is a simple object witha a `type` property.

```
{
type: BUY_CAKE
}
```

- so the Second principle is that that a state is readonly thing which can only be change by emitting an action.

### Third Principle

** To specify how the state tree is transformed by actions, you write pure reducers **

- the second principle says that state can only be transformed only by emitting actions. but how should the state transforms the third principle says this
- we need to write pure reducers. pure reducers are basically the pure functions that take the previousState and action as input in function and returns a newState
- `Reducer - (previousState, action) => newState`
- The `Reducer` instead of updating the `old state` should produce a `newState`
  <u>Cake Shop Example</u>

Reducer is the shopkeeper. below is a reducer

```
const reducer = (state, action) => {
  switch (action.type){
    case BUY_CAKE: return {
      numOfCakes: state.numOfCakes -1
    }
  }
}
```

### Three Principles Overview

The 3 principles overview can be better depicted in a picture.

![Three principle overview](./pictures/three_principles_overview.PNG)

## lecture 5 Actions

- Actions are the only way our application can interact with the store
- Actions carry some information from the app to the redux store
- Actions are plain JavaScript objects
- Actions have a `type` property that indicates the type of action being performed
- The `type` property is typically defined as string constants

### Actions related code

1. first we define the `string constant` that defines the type of Action

```
const BUY_CAKE = 'BUY_CAKE'
```

this will avoid the spelling mistakes when we will be using the Actions. it is followed in the community

2. next define our Action. so remember an Action is an Object with a `property` of `type`.
3. and here that type property has a value `BUY_CAKE`
4. This is Action we just created

```
/* lecture 5 Actions */
const BUY_CAKE = 'BUY_CAKE'; // string constant

// below is action definition
{
  type: BUY_CAKE;
}
```

5. we are not restricted to provide only `type` property in an Action. other than type the structure of the Action object is completely upto us. we can add other properties to it.
6. so we can have other property that is an object or really simply property like a string which we use here as `info` and set it to 'First Redux action'

```
const BUY_CAKE = 'BUY_CAKE'; // string constant

// below is action definition
{
  type: BUY_CAKE;
  info: 'First redux action'
}
```

above we have action completed. but in Redux we can also have an `Action Creator`. 7. An `Action Creator` simply creates an Action. in terms of code an `Action Creator` is a function that returns an action. 8. so to implement the `Action Creator` function. we can write a function `buyCake()`

```
// Action Creator function implementation
const BUY_CAKE = 'BUY_CAKE'; // string constant

function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action',
  };
}
```

## lecture 6 Reducers

- let us recollect what we know about Reducers.
- Reducers specify how the app's state changes in response to actions sent to the store.
- so `Actions` only specify what happend. but it didn't specify how the application state changes. `Reducers` are in charge of that.

<u>Reducer</u>

- Reducer is a function that accepts state and action as arguments, and returns the next state of the application

- in simple words we can say

```
Reducer = (previousState, action) => newState
```

- so as the Reducer accepts a state and the Redux need a state for the whole application (and the whole application state needs to be in a single object). we will create first an `initial state`. which in our case will be

```
const initialState = {
  numberOfCakes: 10
}
```

- This is a simple state of application. in complex application we can have a more complex state of the object.
- now we will define the `reducer` function down below

```
// Reducer is defined below
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};
```

- The initial value of the state is always pass as an initial state of the application to the Reducer function
- if the state object contains more than one property. than first spread the state and change only that property which needs to be changed. spreading the state object essentially means copying the state object

```
// if state object contain more than one property. than first we spread the state like below
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {...state,
        numberOfCakes: state.numberOfCakes - 1, // here we are not mutating the state object. we are returning a new object
      };
    default:
      return state;
  }
};
```

## lecture 7 Store

- let us learn about `store` which bring the `actions` and the `reducer` togather.
- we know only one thing about the `store` that for our entire application we have only just one store.

<u>Responsibilities of Store</u>

1. Holds application state
2. it exposes a method `getState()` which allows access to the application state
3. it provides a method called `dispatch(action)` that allows to update the state of the application. the dispatch(action) method accept an action as its parameter.
4. the `store` also allows the listeners to register via the `subscribe(listener)` method. The subscribe method accepts a function as a parameter which is executed anytime the `state` or the `redux store` changes.
5. finally you can unscribe to the function by calling the function that was returned by the `subscribed(listener)` method.

Now our goal is to implement all these in our application.

<u>1. Holds application state</u>

- if you have to use the `redux` in a react application. that use can use `redux` but writing like this

```
import redux from 'redux'
```

however we are running this app as a simple node.js application for which we have to use the `require` syntax.

```
const redux = require('redux')
```

The redux library provides a method called `createStore()` which we are going to use for creating the store.

```
const createStore = redux.createStore
const store = createStore()
```

- The `createStore()` function accepts a parameter which is the `reducer` function. the reducer function has the initial state of the applicaton. This is required for the store to make the state transition based on the action received.

<u>2. getState() method</u>

```
console.log(store.getState())
```

<u>4. subcribe to listener</u>

The fourth responsibility is to allow the app to subscribe to changes in the `store` that is acheived using the `subscribe` method. The `subscribe` method accepts a function. to keep our example simple we are going to log only the updated state.

```
store.subscribe(() =>
  console.log('updated state', store.getState())
);
```

<u>3. dispatch(action)</u>

- The source provide a `dispatch` method to `update the state`
- The dispatch method accepts an `action` as its parameter.
- so here we can either directly provide an `action`. but we have an `action creator` so we will use that.

```
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
```

- we are doing it 3 times to see 3 state transitions

<u>5. unsubscribing </u>
the final part is to `unsubscribe` from the `store` by calling the function return by the `subscribe method`.

```
const unsubscribe = store.subscribe(() =>
  console.log('updated state', store.getState())

unsubscribe();
);
```

<u> output </u>

the output is as below

```
$ node index
initial state { numberOfCakes: 10 }
updated state { numberOfCakes: 9 }
updated state { numberOfCakes: 8 }
updated state { numberOfCakes: 7 }
```

## lecture 8 cakes and Ice Creams

### Cake shop

- cakes stored on the shelf
- shopkeeper to handle BUY_CAKE from customer

### Ice creams

- now let say we want to sell ice cream also
- Ice cream stored in the freezer
- New shopkeeper to handle BUY_ICECREAM request from customer.
- this is for scalibility. new shopkeeper means new reduceer.

## lecture 9 Multiple Reducers

- our shop now needs 2 shopkeepers one each for managing `cakes` and `ice creams`.
- two shop keeper means we need 2 reducers. but first we will show you how to do it with single reducer but we will implement separate reducers.

### single reducer for cakes and ice cream

- Below you can see that we have the same single state object i.e `inital state`. number of ice creams is added to that. separte `action creator` for ice cream and a single `reducer` with separate `switch case`.

```
/* lecture 9 Multiple Reducers */
// single reducer for CAKES and ICE CREAMS
const redux = require('redux');
const createStore = redux.createStore;

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

// state of Application will be an Object. here is the initial state
const initialState = {
  numberOfCakes: 10,
  numberOfIcecreams: 20,
};

// reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1, // here we are not mutating the state object. we are returning a new object
      };
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIcecreams: state.numberOfIcecreams - 1, // here we are not mutating the state object. we are returning a new object
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
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
unsubscribe();
```

```
// output
$ node index.js
initial state { numberOfCakes: 10, numberOfIcecreams: 20 }
updated state { numberOfCakes: 9, numberOfIcecreams: 20 }
updated state { numberOfCakes: 8, numberOfIcecreams: 20 }
updated state { numberOfCakes: 7, numberOfIcecreams: 20 }
updated state { numberOfCakes: 7, numberOfIcecreams: 19 }
updated state { numberOfCakes: 7, numberOfIcecreams: 18 }
```

### 2 reducers one for each Cakes and Icecreams

- for this case we will modify the code as under.

```
// double reducer one for each CAKES and ICE CREAMS
const redux = require('redux');
const createStore = redux.createStore;

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
const cakeReducer = (state = initialState, action) => {
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
const iceCreamReducer = (state = initialState, action) => {
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

// store accepts single reducer function but now we have two reducers. what to do this will be in next lecture.
const store = createStore(reducer);
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
```

## lecture 10 Combining multiple reducers

- let us see how to combine multiple reducers (in our case `cakeReducer` and `iceCreamReducer`) in order to provide it to the `store`. As `Store` should be one for that reason we have to create one single reducer let say `rootReducer` and provide it as an argument to `createStore()`

- redux provide a method for combining the reducers

```
const combineReducers = redux.combineReducers
```

- then we need to create an object with both reducers and provide that object as an argument

```
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
```

the output is as below

```
$ node index
initial state { cake: { numberOfCakes: 10 }, iceCream: { numberOfIcecreams: 20 } }
updated state { cake: { numberOfCakes: 9 }, iceCream: { numberOfIcecreams: 20 } }
updated state { cake: { numberOfCakes: 8 }, iceCream: { numberOfIcecreams: 20 } }
updated state { cake: { numberOfCakes: 7 }, iceCream: { numberOfIcecreams: 20 } }
updated state { cake: { numberOfCakes: 7 }, iceCream: { numberOfIcecreams: 19 } }
updated state { cake: { numberOfCakes: 7 }, iceCream: { numberOfIcecreams: 18 } }
```

- if we now wish to access `numberOfCakes` we use `state.cake.numberOfCakes` and so on.
- when we dispatch an action both the reducers receives the action. the difference is that one of the reducer acts on that action and the other ignores it.
- now each reducer is managing its own state

## lecture 11 Middleware

It is the suggested way to extend Redux with custom functionaities. so if you want Redux with extra features `Middleware` is the way.

It basically provides a third-party extension point between dispatching an action, and the moment it reaches the reducer

use middleware for logging, crash reporting, performing asynchronous tasks etc.

### redux-logger

redux-logger is a middleware which we will be incorporating in our cakes and icecream application.
This library logs all the information related to redux in our application.

```
npm install redux-logger
```

now we need to create a `logger` for our application. we will use `createLogger` method provided by the library.

```
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
```

we now have the `logger` middleware which we can use now in our application.

### how to include a Middleware

The redux library provides a function called `applyMiddleware` which is used to apply Middleware.

```
const applyMiddleware = redux.applyMiddleware
```

than to the createStore function we pass in the second parameter, `applyMiddleware(logger)`

```
const store = createStore(rootReducer, applyMiddleware(logger))
```

remove the console.log statement from the store subscription as we have the logger to handle all of that

now in terminal `node index.js` and we see all the logs

```
$ node index
initial state { cake: { numberOfCakes: 10 }, iceCream: { numberOfIcecreams: 20 } }
updated state { cake: { numberOfCakes: 9 }, iceCream: { numberOfIcecreams: 20 } }
 action BUY_CAKE @ 10:51:42.386
   prev state { cake: { numberOfCakes: 10 }, iceCream: { numberOfIcecreams: 20 } }
   action     { type: 'BUY_CAKE', info: 'First redux action' }
   next state { cake: { numberOfCakes: 9 }, iceCream: { numberOfIcecreams: 20 } }
updated state { cake: { numberOfCakes: 8 }, iceCream: { numberOfIcecreams: 20 } }
 action BUY_CAKE @ 10:51:42.388
   prev state { cake: { numberOfCakes: 9 }, iceCream: { numberOfIcecreams: 20 } }
   action     { type: 'BUY_CAKE', info: 'First redux action' }
   next state { cake: { numberOfCakes: 8 }, iceCream: { numberOfIcecreams: 20 } }
updated state { cake: { numberOfCakes: 7 }, iceCream: { numberOfIcecreams: 20 } }
 action BUY_CAKE @ 10:51:42.389
   prev state { cake: { numberOfCakes: 8 }, iceCream: { numberOfIcecreams: 20 } }
   action     { type: 'BUY_CAKE', info: 'First redux action' }
   next state { cake: { numberOfCakes: 7 }, iceCream: { numberOfIcecreams: 20 } }
updated state { cake: { numberOfCakes: 7 }, iceCream: { numberOfIcecreams: 19 } }
 action BUY_ICECREAM @ 10:51:42.390
   prev state { cake: { numberOfCakes: 7 }, iceCream: { numberOfIcecreams: 20 } }
   action     { type: 'BUY_ICECREAM', info: 'second redux action' }
   next state { cake: { numberOfCakes: 7 }, iceCream: { numberOfIcecreams: 19 } }
updated state { cake: { numberOfCakes: 7 }, iceCream: { numberOfIcecreams: 18 } }
 action BUY_ICECREAM @ 10:51:42.390
```

## lecture 12 Async Actions

up until now we had work with `Synchronous Actions`

### Synchronous Actions

As soon as an action was dispatched, the state was immediately updated.
If we dispatch the `BUY_CAKE` action, the `numOfCakes` was right away decremented by 1.
same with `BUY_ICECREAM` action as well.
however we will build applications where `Async Actions` will be required.

### Async Actions

for example we will use Asynchronous API calls to fetch data from an end point and use that data in your application.

### Our Application

Fetches a list of users from an API end point and stores it in the redux store.
State? --- how our State will look like
Actions? --- how actions will look like
Reducer? --- how Reducer will be

### Our Async State Object

![Asynchronous State Object](./pictures/async_state_object.PNG)

### Our Async Actions

![Asynchronous Actions](./pictures/async_actions.PNG)

### Our Async Reducers

![Asynchronous Reducers](./pictures/async_reducers.PNG)

### Implementation in code

1. create a new file called asyncActions.js
2. define 3 things within this file `the State`, `the Actions` and `the Reducers`

### State

```
/* lecture 12 Async Actions */
// State
const initialState = {
  loading: false,
  users: [],
  error: '',
};
```

### Actions

- for actions we need to define `String Constants` and `Actions creators`.
- string constant are mentioned below

```
// String Constants
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'
```

- and `Action creators` are as follows.

```
// Action Creators
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}
```

### Reducer

```
// Reducers
const reducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: ''
      }
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      }
  }
}
```

### Store

```
// for Store
const redux = require('redux')
const createStore = redux.createStore

// store
const store = createStore(reducer)
```

## lecture 13 Redux Thunk Middleware

In this lecture let us see how to use Action creators with network request. i.e. how to make an API call when working with Redux.

### Install axios package

it is used for requests to an API end point

### Install redux-thunk package

it is a package from the redux ecosystem and is the standard way to define the `Async Action creators` in our applicaion. the redux-thunk library biscally is a Middleware which we will apply to our Redux store.

### In Coding

1. install axios `npm install axios`
2. install redux-thunk `npm install redux-thunk`
3. apply redux-thunk Middleware to our Redux store. The argument to applyMiddleware will be redux-thunk middleware.
4. import thunkMiddleware from `redux-thunk`.

```
const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios')
// pass it to the store
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
```

### thunk middleware

first we define a function `fetchUsers()` as an Action creator. an Action creator returns an action. but what thunk middleware brings to the table is the ability to return a function instead of an Action object. And what is special about this function is it doesn't have to be pure. so it is allowed to have sideEffects such as Async API calls. And this function can also dispatch Actions like the one we have seen before. that is made possible because it receives the dispatch method as an argument.

so lets see how to make axios requests and dispatch the necessary actions. for the API endpoint we use JSON placeholder users `https://jsonplaceholder.typicode.com/users`.

```
// axios Async requests
const fetchUsers = () => {
  return function(dispatch){
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          // response.data is the array of users
        })
        .catch(error => {
          // error.message is the error description
        })
  }
}
```

so we have made the axios request. now we will dispatch the appropriate actions. before we fire off our API call we dispatch `fetchUsersRequest()` this will basically set loading to `true`. when we get back the response we are going to dispatch `fetchUsersSuccess()` passing in the list of `users`. now what is the list of users. it is

```
const users = response.data
dispatch(fetchUsersSuccess(users))
```

This will give us all the properties so our logs will be flooded with data. instead we use the map operator and use only the id for each user.

```
const users = response.data.map((user) => user.id);
dispatch(fetchUsersSuccess(users));
```

so when the `fetchUsersSuccess(users)` is dispatched it stores the users in our state. similarly when the request fails dispatch `fetchUsersFailure(error.message)`

finally subscribe to the store and dispatch `fetchUsers()`

```
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
```

The full code is as under

```
/* lecture 13 Redux Thunk Middleware */

// for Store
const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');
// State
const initialState = {
  loading: false,
  users: [],
  error: '',
};

// String Constants
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

// Action Creators
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

// Reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: '',
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

// axios Async requests
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest()); // this will set loading to true
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        // response.data is the array of users
        const users = response.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        // error.message is the error description
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

// store
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
```

now if we run `node asyncAction.js` file. we see the result.

```
$ node asyncActions.js
{ loading: true, users: [], error: '' }
{
  loading: false,
  users: [
    1, 2, 3, 4,  5,
    6, 7, 8, 9, 10
  ],
  error: ''
}
```

now if we provide an invalid URL. the result is

```
$ node asyncActions.js
{ loading: true, users: [], error: '' }
{
  loading: false,
  users: [],
  error: 'getaddrinfo ENOTFOUND jsonplaceholer.typicode.com'
}
```
