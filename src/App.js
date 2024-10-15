import React from "react";
// import SignUp from "./Component/SignUp";
// import { BrowserRouter as Router, Routes,Route, BrowserRouter } from 'react-router-dom';
// import HomePage from "./Component/HomePage";
// import SignupForm from "./Component/SignUpForm";
// import LoginForm from "./Component/LoginPage";
// import HeaderPage from "./Component/MenuPage/HeaderPage";
// import SearchBar from "./Component/MenuPage/SearchBar";
// import MenuCategories from "./Component/MenuPage/MenuCategories";
import MenuPage from "./Component/MenuPage/MenuPage";

function App() {
  return (
  // <BrowserRouter>
      <div className="App">
      {/* <Routes>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signupform" element={<SignupForm/>}/>
        <Route path="/loginform" element={<LoginForm/>}/>
      </Routes>
      */}
      <MenuPage/>
      </div>
    // {/* </BrowserRouter> */}
  );
}

export default App;
