import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./login";
import { Signup } from "./signup";
import { User } from "./userpage";
import { AuthContextProvider } from "./AuthContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Protected from "./Protected";


function App() {
  const [currForm, setCurrForm] = useState('login');
  const changeForm = (formName) => {
    setCurrForm(formName)
  }
  return (
    <Router>
      <AuthContextProvider>
        <div className="App">
          {
            currForm === "userpage" ? <User />
              : (currForm === "login" ? <Login onFormSwitch={changeForm} /> : <Signup onFormSwitch={changeForm} />)
          }
          <Routes>
            <Route path='/login' element={<Login onFormSwitch={changeForm} />} />
            <Route path='/userpage' element={<Protected><User onFormSwitch={changeForm} /></Protected>} />
          </Routes>
        </div>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
