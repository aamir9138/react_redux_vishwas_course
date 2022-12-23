// /* lecture 2 Getting Started */
// console.log("Hello from index.js")

/* lecture 5 Actions */
// const BUY_CAKE = 'BUY_CAKE'; // string constant

// // below is action definition
// {
//   type: BUY_CAKE;
//   info: 'First redux action'
// }

// Action Creator function implementation
const BUY_CAKE = 'BUY_CAKE'; // string constant

function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action',
  };
}
