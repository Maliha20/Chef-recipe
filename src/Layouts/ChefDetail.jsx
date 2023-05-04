import React from 'react';
import Navibar from '../Pages/Shared/NaviBar/Navibar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import './Layout.css'

const ChefDetail = () => {
    return (
        <div className='layout-fix'>
            <Navibar></Navibar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default ChefDetail;