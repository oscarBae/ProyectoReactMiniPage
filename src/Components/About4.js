import React from 'react';
import Testimonios from '../Components/Testimonios';
import {InstagramOutlined} from '@ant-design/icons';

function AboutPage() {
    return (
        <div className="container w-2 pt-3 pb-3 ">
  
        <div className="container alert alert-secondary">
                        <h2 className="text-dark text-center pb-3">Testimonios</h2>  
                        </div>                                      
                    <div className="w-2 pt-3 pb-3 bg-light ">
                        <Testimonios />
                        
                <div className="container">
                    <div className="w-1 pt-5 pb-3 ">
                        <h3>Seguinos en Instagram</h3>
                         <a href="https://www.instagram.com/" target="_blanck"><InstagramOutlined style={{fontSize: "60px", color:"#58585a"}}padding="5%"/></a>  
                    </div>    
                    </div>
                    
                    
                    </div>
                   
</div>
    );
};
  

export default AboutPage;