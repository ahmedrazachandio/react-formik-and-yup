import logo from './logo.svg';
import './App.css';
// import '.components/login';
// import '.components/signup';
import Login from './components/login';
import Signup from './components/signup';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <h1>Form</h1> */}

       <Login />  
       {/* <Signup />   */}





    </div>
  );
}

export default App;
