import React from "react";
import './AboutUs.css';

function VMC(){
    return(

        <section classname="section bg-c-light border-top">
        <div className="container">
     <div className="row">
         <div className="col-md-12 mb-5 text-center">
             <h3 className="main-heading">Vision, Mission and Values</h3>
             <div className="underline mx-auto"></div>
            
         </div>
         <div className="col-md-4">
             <h6>Our Vision</h6>
             <p>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
             </p>
         </div>
         <div className="col-md-4">
             <h6>Our Mission</h6>
             <p>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
             </p>
         </div>
         <div className="col-md-4">
             <h6>Our Core Values</h6>
             <p>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             </p>
         </div>
     </div>
        </div>
        </section>
    );
}

export default VMC;

