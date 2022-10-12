import { Outlet, Link } from "react-router-dom";
import logo from './logoWinc.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <a href="http://localhost:3000/"><img src={logo} className="App-logo" alt="logo"/ ></a> 
          <Link className="appLink" to="/">Home</Link> |{" "}  
          <Link className="appLink" to="/Students">Select Student</Link> |{" "}  
          <Link className="appLink" to="/Assignments">Select Assignment</Link>
        </nav>
      <Outlet />  
      </header>
      <footer>
        <p>Copyright 2022 Spelenderwijs Programmeren | All rights reserved</p>
      </footer>
    </div>
  )
}

export default App;
