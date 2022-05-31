import React from "react";
import Stacks from "./stacks";

function Home(){
    return(
        
    
        <div className="home-template">
        <section class="section section-1 w-100">
            <div class="container">
                    <div class="row">
                        <div class="col-sm-12 px-4 mx-4">
                        <h3 class="title position-relative">Let’s build something <span>cool</span>!</h3>
                        <p>There are only 3 steps in the process: tech stack, starter template and database schema.</p>
                        </div>
                    </div>
            </div>
        </section>

        <section class="section section-3 w-100">
                        <div class="container">
                                <div class="row">
                                    <div class="col-sm-12 px-4 mx-4">
                                   
                                    <Stacks />

                                    </div>
                                </div>
                        </div>
        </section>

        </div>
    )
};

export default Home;