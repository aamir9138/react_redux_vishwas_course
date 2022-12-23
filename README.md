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
