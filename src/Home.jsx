import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <section id="home" className="home">
                <div className="content">
                    <h1 className="banner">Neelima Industries</h1>
                    <h3 className="slogan">Our reputation is as solid as concrete</h3>
                    <div className="btn-group">
                        <NavLink to="/about">
                            <button>Get started</button>
                        </NavLink>
                    </div>
                </div>

                {/* <div className="wave wave1"></div> */}
                {/* <div className="wave wave2"></div> */}
                {/* <div className="wave wave3"></div> */}
            </section>
        </>
    );
};
export default Home;