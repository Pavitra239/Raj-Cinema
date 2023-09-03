import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import AuthService from "./services/auth.service";
import Home from "./components/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import "./ChatsComp.css";
import "./mainstyle.css";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "./state/index1";
import { userDetailsTemplate } from "./templates/Templates";
import Login from "./components/login.component";

import HomeContext from "./context/HomeContext";



import NavBar from "./components/common/NavBar";
function App() {

  const [currentUser, setCurrentUser] = useState(userDetailsTemplate);
  const [contactId, setContactId] = useState("-1");


  const navigate = useNavigate();

  useEffect(() => {
    const localCurrentUser = AuthService.getCurrentUser();
    console.log("app.js useEffect localCurrentUser :", localCurrentUser);
    if (localCurrentUser == null) {
      navigate("/login");
    } else {
      setCurrentUser(localCurrentUser);
      navigate("/home");
    }
  }, []);



  return (
    <HomeContext.Provider value={{}} >
      <div className="App">
        {/* myContacts, setMyContacts, */}
        <NavBar />
        <div className="MainComponents">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div></HomeContext.Provider>

  );
}

export default App;
