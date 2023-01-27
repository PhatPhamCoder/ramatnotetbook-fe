import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <Outlet />
                <Footer />
            </div>
        );
    }
}

export default Layout;