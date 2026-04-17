import React from 'react';
import Navber from '../Component/Shared/Navber/Navber';
import { Outlet } from 'react-router';
import Footer from '../Component/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navber />
            <Outlet />
            <Footer />
            
        </div>
    );
};

export default MainLayout;