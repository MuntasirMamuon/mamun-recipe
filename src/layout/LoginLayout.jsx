import React from 'react';
import NavigationBar from '../Shear/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shear/Footer/Footer';

const LoginLayout = () => {
   
    return (
        <div>
            {/* navbar commponent call  */}
            <NavigationBar></NavigationBar>  
            <Outlet></Outlet>
            {/* footer component call  */}
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;