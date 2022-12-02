import React from 'react';
import ReactDOM from "react-dom";
import './index.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

import MainPage from './Components/MainPage';
import About from './Components/About';
import ContactForm from './Components/ContactForm';
import Layout from './Components/Layout';
import MyWork from './Components/MyWork';

import DinoDoods from './Components/WorkExperience/DinoDoods';
import Gentlemen from './Components/WorkExperience/Gentlemen';
import Artist from './Components/WorkExperience/Artist';

export default function App() {

  return (
    <HashRouter>
          <Routes>
              <Route path = "/" element = {<Layout/>}>
                <Route index element = {<MainPage/>}/>
                <Route path = "About" element = {<About/>}/>
                <Route path = "MyWork" element = {<MyWork/>}/>
                <Route path = "ContactMe" element = {<ContactForm/>}/>   
                <Route path = "Dinodoods" element = {<DinoDoods/>}/>
                <Route path = "Gentlemen" element = {<Gentlemen/>}/>
                <Route path = "Artist" element = {<Artist/>}/>
              </Route>
          </Routes>
      </HashRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
