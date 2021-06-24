// import React from 'react';
import { NavLink } from 'react-router-dom';
import Aboutnew from './images/Aboutnew.jpg'
import team3 from './images/team3.jpg'
import team2 from './images/team2.jpg'
import team1 from './images/team1.jpg'
import team7 from './images/team7.jpg'
import team6 from './images/team6.jpg'
import team5 from './images/team5.jpg'
import team8 from './images/team8.jpg'

import React from "react";

const About = () => {
  return (
    <main>
      <section id="mu-about">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-about-area">

                <div className="row">
                  <div className="col-md-12">
                    <div className="mu-title">
                      <h2 className="mainHeader">Who we are</h2>
                      <p>Excellence is our habit & quality is our work. <br /> We can help you create what you want.</p>
                      <div className="commonBorder"></div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="mu-about-left">
                      <img className="" src={Aboutnew} alt="img" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mu-about-right">
                      <ul>
                        <li>
                          <h3>Our Mission</h3>
                          <p> To provide best construction experience through success built on performance. </p>
                        </li>
                        <li>
                          <h3>Our Vision</h3>
                          <p>To be sought out as the recognized and trusted firm in the industry and community , retaining, developing and attracting the best in commited construction leadership ,to derive deliberate and intelligent growth of the company.</p>
                        </li>
                        <li>
                          <h3>Our Values</h3>
                          <p> Clients trust us to build things that work and we take that seriously. Our team will overcome obstacles, find solutions and deliver exceptional results.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="mu-team">
        <div className="container">
          <div className="row">
            <hr className="line-style" />
            <div className="col-md-12">
              <div className="mu-team-area">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mu-title">
                      <h2>Creative team</h2>
                      <p></p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="mu-team-content">
                      <div className="row">
                        <div className="col-md-6 card-about">
                          <div className="mu-single-team">
                            <div className="mu-single-team-img">
                              <img src={team3} alt="img" />
                            </div>
                            <div className="mu-single-team-content">
                              <h3>Kishan Pandey</h3>
                              <span>Founder, CEO & MD</span>
                              <p>Kishan panday, the founder of this dynamic firm, being a youth entrepreneur is inspriring millions in uttar pradesh with such inovative idea.</p>
                              <ul className="mu-team-social">
                                <li><a href="https://m.facebook.com/kishanpandeybjp" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="https://instagram.com/kishanpandeybjp?utm_medium=copy_link" target="_blank"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="https://mobile.twitter.com/kishanpandeybjp?lang=en" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#" target="_blank"><i className="fa fa-google-plus"></i></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 card-about">
                          <div className="mu-single-team">
                            <div className="mu-single-team-img">
                              <img src={team5} alt="img" />
                            </div>
                            <div className="mu-single-team-content">
                              <h3>Ratandeep varma</h3>
                              <span>Marketing officer</span>
                              <p>Ratandeep is the marketing officer  of the company</p>
                              <ul className="mu-team-social">
                                <li><a href="#" target=""><i className="fa fa-instagram"></i></a></li>
                                <li><a href="#" target=""><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#" target=""><i className="fa fa-pinterest-p"></i></a></li>
                                <li><a href="#" target=""><i className="fa fa-google-plus"></i></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 card-about">
                          <div className="mu-single-team">
                            <div className="mu-single-team-img">
                              <img src={team2} alt="img" />
                            </div>
                            <div className="mu-single-team-content">
                              <h3>Anuj singh</h3>
                              <span>MD</span>
                              <p>Since 2020, Anuj singh has helped shape the success of our business. Regardless of what is asked of them, they are always there to help keep the company on track.</p>
                              <ul className="mu-team-social">
                                <li><a href="#" target=""><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#" target=""><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#" target=""><i className="fa fa-pinterest-p"></i></a></li>
                                <li><a href="#" target=""><i className="fa fa-google-plus"></i></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 card-about">
                          <div className="mu-single-team">
                            <div className="mu-single-team-img">
                              <img src={team1} alt="img" />
                            </div>
                            <div className="mu-single-team-content">
                              <h3>Muskan Singh Soni</h3>
                              <span>Chief HR manager</span>
                              <p>This team member is a favorite amongst our clients. They always bring their positive energy and creative ideas with them to work. We couldn’t be happier with our head HR.</p>
                              <ul className="mu-team-social">
                                <li><a href="#" target=""><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#" target=""><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#" target=""><i className="fa fa-pinterest-p"></i></a></li>
                                <li><a href="#" target=""><i className="fa fa-google-plus"></i></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 card-about">
                          <div className="mu-single-team">
                            <div className="mu-single-team-img">
                              <img src={team6} alt="img" />
                            </div>
                            <div className="mu-single-team-content">
                              <h3>AADITY ROONGTA</h3>
                              <span>Chartered Accountant</span>
                              <p>Aadity roongta is an invaluable contributor to the growth of our business. They specialize in projects of all sizes, and have a knack for always getting the job done right. We couldn't ask for a better CA.</p>
                              <ul className="mu-team-social">
                                <li><a href="#" target=""><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#" target=""><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#" target=""><i className="fa fa-pinterest-p"></i></a></li>
                                <li><a href="#" target=""><i className="fa fa-google-plus"></i></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 card-about">
                          <div className="mu-single-team">
                            <div className="mu-single-team-img">
                              <img src={team8} alt="img" />
                            </div>
                            <div className="mu-single-team-content">
                              <h3>LAKSHYA PANDEY</h3>
                              <span>Finance officer</span>
                              <p>Lakshya Pandey is one of the best financial experts, his sound financial advice is always the reason for the success of our company.</p>
                              <ul className="mu-team-social">
                                <li><a href="#" target=""><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#" target=""><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#" target=""><i className="fa fa-pinterest-p"></i></a></li>
                                <li><a href="#" target=""><i className="fa fa-google-plus"></i></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 card-about">
                          <div className="mu-single-team">
                            <div className="mu-single-team-img">
                              <img src={team7} alt="img" />
                            </div>
                            <div className="mu-single-team-content">
                              <h3>Ajay Raj Singh Patel</h3>
                              <span>HR Manager</span>
                              <p>I am convinced that nothing we do is more important than hiring and developing people.</p>
                              <ul className="mu-team-social">
                                <li><a href="#" target=""><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#" target=""><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#" target=""><i className="fa fa-pinterest-p"></i></a></li>
                                <li><a href="#" target=""><i className="fa fa-google-plus"></i></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

  );
};

export default About;