import React from "react";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Dashbord from "./Dashbord";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "./UpdateProfile"

function App() {
  return (
    <Container 
    className="d-flex align-items-center justify-content-center"
    style={{minHeight:"100vh"}}
    >
      
      <div className="w-100" style={{maxWidth: '400px'}} >
          <BrowserRouter>
        <AuthProvider>
            <Routes>
              <Route  element={<PrivateRoute/>}>
                <Route exact path="/" element={<Dashbord/>}/>
              </Route>
              <Route  element={<PrivateRoute/>}>
                <Route  path="/update-profile" element={<UpdateProfile/>}/>
              </Route>
              
              <Route path="/home" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
            
        </AuthProvider>
          </BrowserRouter>
          
           
      </div>

    </Container>
    
    
    )
}

export default App;
