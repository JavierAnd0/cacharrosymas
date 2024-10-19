import React from 'react';
//import Logo from "./assets/img/Logo.png";  <img src={Logo} alt="Logo" className="loading-logo" />
import './LoadingScreen.css'; 


const LoadingScreen = () => {
    return (
      <div className="loading-screen">
        <div className="loader">
           
          <div className="loading-circle"></div>
        </div>
      </div>
    );
  };

export default LoadingScreen;
