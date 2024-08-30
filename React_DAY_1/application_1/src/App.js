// import logo from './logo.svg';
// import './App.css';

// import Product from './product';

// function App(){
//   return (
//     <div className = "App">
//     <h1>Hello World</h1>
//     <Product/>
//     <Product/>
//     <Product/>
//     <Product/>
//     </div>

//   );
// }
// export default App;


// import React from 'react'

// const App = () => {
//   return (
//     <>
//       <h1>Hello World</h1>
//     </>
//   )
// }

// export default App




// import React from 'react'

// const App = () => {
//   return (
//     // <div>App</div>
//     <h1>Welcome to GLA</h1>
//   )
// }

// export default App

// rce - shortcut command for class component
// import React, { Component } from 'react'

// export class App extends Component {
//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }

// export default App






// function App() {
//   function Test_Case1() {
//     window.alert("Welcome in Events in JS")
//   }
//   return (
//       <div className = "App"> <center>
//         <input type="submit" onClick={Test_Case1} value="GLA"></input>
//         </center>
//       </div>
//   )
// }
// export default App

 // rce
// import React, { Component } from 'react'

// export class App extends Component {
//     render() {
//       return (
//         <div>App</div>
//       )
//     }
// }

// export default App
// import logo from './logo.svg';
// // import './App.css';
// import Product from'./Product';
// function App(){
//   function Test_Case1()
//   {
//     window.alert("welcome to events in ReactJS")
//   }
//   return(
//     <div className='App'>
//       <input type='submit' onClick={Test_Case1} value='GLA'></input>
//     </div>
//   );
// }
// export default App

import React from 'react'

const App = (props) => {
  return (
    <div>
      <h1 style={{backgroundColor:"red",color:"white",textAlign:"center"}}>Welcome to {props.name}</h1>
      <h2>My firstname is: {props.firstname}</h2>
      <h3>My last name is: {props.lastname}</h3>
    </div>
  )
}

export default App


