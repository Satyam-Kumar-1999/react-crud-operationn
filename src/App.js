import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom" 
import Home from "./pages/Home"
import View from "./pages/View"
import AddEdit from "./pages/AddEdit"
import About from "./pages/About"
import './App.css';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./component/Header"
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <ToastContainer position="top-center"/>
    <div className="App">
     <Routes>
      <Route exact path = "/" element={<Home/>}/>
      <Route path="/AddEdit" element={<AddEdit/>}/>
      <Route path="/update/:id" element={<AddEdit/>} />
      <Route path="/View" element = {<View/>}/>
      <Route path="/About" element={<About/>}/>

</Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
