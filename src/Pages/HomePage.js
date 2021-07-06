import React from 'react';
import Home from '../Components/Home';
import Home2 from '../Components/Home2';
import Home3 from '../Components/Home3';
import Footer from '../Components/Footer';

function HomePage(props) {
    return (
        <div>
            <div className="">
                <Home />
            </div>  
            <div className="">
                <Home2 />               
            </div>
            <div className="">
                <Home3 />   
            </div>
            <div className="">   
                <Footer />              
            </div>
        </div>
    );
}

export default HomePage;