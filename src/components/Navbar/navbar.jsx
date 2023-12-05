import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from "../../assets/logo.svg"

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className='d-flex justify-content-between align-items-center bg-dark text-light ps-5'>
      <div className='w-25 p-0 d-flex align-items-center'>
        <img style={{marginRight:"-15px"}} className='w-25' src={logo}/>
        <h3 className='p-0 m-0'>Color Palette</h3>
      </div>

      <ul className='d-flex justify-content-center gap-5 p-0 m-0 fs-5 w-25'>
        <li
          style={{ cursor: 'pointer', borderBottom: location.pathname === '/' ? '3px solid purple' : 'inherit' }}
          onClick={() => navigate('/')}
        >
          Home
        </li>
        <li
          style={{ cursor: 'pointer', borderBottom: location.pathname === '/settings' ? '3px solid purple' : 'inherit' }}
          onClick={() => navigate('/settings')}
        >
          Settings
        </li>
      </ul>
    </nav>
  );
};
