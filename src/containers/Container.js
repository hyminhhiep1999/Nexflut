import React from 'react';
import Header from '../components/blocks/header/Header';
import Footer from '../components/blocks/footer/Footer';
import Router from '../routers/Router';

export default () => {
    return (
        <div>
            <Header/>
            <Router/>
            <Footer/>
        </div>
    );
}
