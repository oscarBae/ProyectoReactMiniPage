import React from 'react';
import Service from '../Components/Service';
import Service2 from '../Components/Service2';
import Service6 from '../Components/Service6';
import Footer from '../Components/Footer';

function ServiciosPage() {
    return (
        <div>
            <div className="">
                <Service />
            </div>
            <div className="">
                <Service2 />
            </div>
            <div className="">
                <Service6 />
            </div>
            <div className="">
                <Footer />
            </div>
           
        </div>
    );
}

export default ServiciosPage;