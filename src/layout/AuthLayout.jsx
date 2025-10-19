import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
        <header className='max-w-5xl mx-auto py-4'>
            <Navbar></Navbar>
        </header>
        <main className='max-w-5xl mx-auto py-5'>
            <Outlet></Outlet>
        </main>
        </div>
    );
};

export default AuthLayout;