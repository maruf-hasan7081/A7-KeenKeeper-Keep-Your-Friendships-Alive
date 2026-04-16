import React from 'react';
import Navber from '../Component/Shared/Navber/Navber';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Navber />
            <Outlet />
            
        </div>
    );
};

export default MainLayout;