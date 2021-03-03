// import logo from "./logo.svg";
import "./App.css";
// import { ReactComponent as Logo2 } from "./logo.svg";
// import motor from "./motor.jpg";
// import React, { Component } from "react";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* Logo is an actual React component */}
//         <Logo2 />
//         <img src={logo} className="App-logo" alt="logo" />
//         <img src={motor} className="App-motor" alt="motor" />
//         <p>
//           Edit <code> src / App.js </code> and save to reload samu 12.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <div> 
        samu
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Q</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/topics1">Topics ku</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/topics1">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Topics() {
  return <h2>Topics</h2>;
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About samu</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
