import React from 'react';
import Navibar from '../Pages/Shared/NaviBar/Navibar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const LoginLayout = () => {
    return (
        <div className='layout-fix'>
            <Navibar></Navibar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;