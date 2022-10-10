import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Home from './routes/Home';
import Students from './routes/Students';
import Student from './routes/Student';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}>
        <Route path="Home" element={<Home />} />
        <Route path="Students" element={<Students />}>
          <Route path=":StudentId" element={<Student />} />
        </Route>
        <Route
          path="*"
          element={
          <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
          </main>
        }
        />
      </Route>
    </Routes>  
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
