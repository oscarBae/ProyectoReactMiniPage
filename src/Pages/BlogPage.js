import React from 'react';
import Blog from '../Components/Blog';
import Blog2 from '../Components/Blog2';
import Footer from '../Components/Footer';

function BlogPage(props) {
    return (
        <div>
            <div className="">
                <Blog />
            </div>
            <div className="Blog2">
                <Blog2 />
            </div>  
            <div className="">   
                <Footer />        
            </div>
    </div>
    );
}

export default BlogPage