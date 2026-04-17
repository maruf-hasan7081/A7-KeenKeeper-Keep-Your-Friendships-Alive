import React from 'react';
import { GoHome } from 'react-icons/go';
import { ImStatsDots } from 'react-icons/im';
import { RiTimeLine } from 'react-icons/ri';
import { NavLink } from 'react-router'; // ✅ FIX

const Navber = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">KeenKeeper</a>
                </div>
               
                <div className="navbar-end lg:mr-10 sm:mr-1 sm:gap-5 lg:gap-3">
                    <NavLink 
                        to="/" 
                        className={({isActive})=> isActive ? "btn bg-green-500 text-white" : "btn"}
                    >
                        <GoHome /> Home
                    </NavLink>

                    <NavLink 
                        to="/time" 
                        className={({isActive})=> isActive ? "btn bg-green-500 text-white" : "btn"}
                    >
                        <RiTimeLine /> Timeline
                    </NavLink>

                    <NavLink 
                        to="/stas" 
                        className={({isActive})=> isActive ? "btn bg-green-500 text-white" : "btn"}
                    >
                        <ImStatsDots /> Stats
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navber;