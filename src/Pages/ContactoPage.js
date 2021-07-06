import React from 'react';
import Contact from '../Components/Contact';
import About4 from '../Components/About4';
import Footer from '../Components/Footer';

function HomePage(props) {
    return (
        <div>
            <div className="">
                <Contact />
            </div>  
            <div className="">
            <div className="">
                <About4 />
            </div>  
            </div>  
            <div className="">   
                <Footer />              
            </div>
        </div>
    );
}

export default HomePage;