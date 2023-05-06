// import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './Components/User/Utils/Navbar';
// import Footer from './Components/User/Utils/Footer';
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import Home from './Components/User/User/Home';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//         </Routes>
//         <Footer />
//       </Router>
//     </div>
//   );
// }
// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// Library
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./Components/User/Login";
import Register from "./Components/User/Register";
import Home from "./Components/User/Home";
import Profile from "./Components/User/Profile";
import BoardUser from "./Components/User/BoardUser";
import BoardAdmin from "./Components/User/BoardAdmin";
import Navbar from "./Components/Utils/Navbar";
import CategoryForm from "./Components/Category/UpdateCategory";
import AddCategoryForm from "./Components/Category/AddCategory";
import CategoryPage from "./Components/Category/CategoryPage";
const App = () => {


  return (
    <>
    <Navbar/>
      <div className="container mt-3">    
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/user" element={<BoardUser/>} />
          <Route path="/admin" element={<BoardAdmin/>} />
          <Route path="/addcategory" element={<AddCategoryForm/>} />
          <Route path="/updatecategory" element={<CategoryForm/>} />
          <Route path="/categoryPage" element={<CategoryPage/>} />
        </Routes>
      </div>
      </>
  );
};

export default App;
