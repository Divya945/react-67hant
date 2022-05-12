import React from 'react';
import './style.css';
import Introduction from './Components/Introduction';
import Jsxextension from './Components/Jsxextension';
import Studentdetails from './Components/CustomizeComponentswithprops/Studentdetails';
import AnimalDetails from './Components/WrapperComponentswithProps/AnimalDetails';
import Productpurchae from './Components/StateinClassComponent/Productpurchae';
import Itemspurchse from './Components/StatewithHooksComponent/Itemspurchse';
import SlectedItems from './Components/BasicPoc/SlectedItems';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
//Need to State with Hooks hgh
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
            <li>
              <Link to="/animaldetails">Wrapper Components with Props</Link>
            </li>
            <li>
              <Link to="/Productpurchae">Online purchase</Link>
            </li>
            <li>
              <Link to="/Itemspurchse">Items purchase</Link>
            </li>
            <li>
              <Link to="/SlectedItems">Select your Dish</Link>
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
          <Route
            exact
            path="/animaldetails"
            element={<AnimalDetails />}
          ></Route>
          <Route
            exact
            path="/Productpurchae"
            element={<Productpurchae />}
          ></Route>
          <Route exact path="/Itemspurchse" element={<Itemspurchse />}></Route>
          <Route exact path="/SlectedItems" element={<SlectedItems />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
