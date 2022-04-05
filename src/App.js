import React from 'react';
import './style.css';
import Introduction from './Components/Introduction';
import Jsxextension from './Components/Jsxextension';
import Studentdetails from './Components/CustomizeComponentswithprops/Studentdetails';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Introduction</Link>
            </li>
            <li>
              <Link to="/jsxextension">Jsx Elements</Link>
            </li>
            <li>
              <Link to="/studentdetails">Customize Components with props</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Introduction />}></Route>
          <Route exact path="/jsxextension" element={<Jsxextension />}></Route>
          <Route
            exact
            path="/studentdetails"
            element={<Studentdetails />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
