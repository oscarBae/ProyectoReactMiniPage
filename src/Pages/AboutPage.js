import React from 'react';
import About from '../Components/About';
import About2 from '../Components/About2';
import About3 from '../Components/About3';
import About4 from '../Components/About4';
import Footer from '../Components/Footer';

function HomePage(props) {
    return (
        <div>
            <div className="">
                <About />
            </div>  
            <div className="">
            <About2 />
            </div>
            <div className="">
            <About3 />
            </div>
            <div className="">
            <About4 />
            </div>
            <div className="">   
                <Footer />              
            </div>
        </div>
    );
}

export default HomePage;