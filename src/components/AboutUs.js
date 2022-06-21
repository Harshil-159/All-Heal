import React from "react";
import VMC from "./VMC";
import './AboutUs.css';

function About(){
    return(
        <div>
        <section className="py-4 bg-info">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 my-auto">
                        <h4>About us</h4>
                    </div>
                </div>
             <div className="col-md-4 my-auto">
                  <h6 className="float-end">
                     Home  /  About us
                  </h6>
                   </div> 
                 </div>
                    </section>
                    <section className="section bg-c-light border-bottom">  
                    <div className="container">
                       <h5 className="main-heading">our Company</h5>
                       <div className="underline">  </div>
                       <p> 
                           fegfewgrw retgegrw vrrtgrfsfqergrkjj ihfdfigfarewhg vevrwgn
                       </p>
                </div>
                </section>

                  {/*Our vision ,mission and values */}
                <VMC />

            </div>
      
    );
}

export default About;
