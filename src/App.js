import { Outlet, Link } from "react-router-dom";
import './App.css';
//import Chart from './Chart'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Dashboard</h1>
        <nav
          style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          }}
        >
        <Link to="/Home">Home</Link> |{" "}  
        <Link to="/Students">Select Student</Link> 
        </nav>
        <Outlet />
      </header> 
      
      {/* <main>
       <Chart />
      </main>  */}
      <footer>
        <p>Copyright 2022</p>
      </footer>
      
    </div>
  );
}

export default App;
