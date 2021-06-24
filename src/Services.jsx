import React from 'react';
// import { NavLink } from 'react-router-dom';
import Card from './Card';
import Sdata from './Sdata'
// import {
//     FaGithub,
//     FaCamera,
//     FaCircleNotch,
//     FaApple,
//     FaFileVideo,
//     FaSearchDollar,
// } from "react-icons/fa";

const Services = () => {
    const [header] = React.useState({
        subHeading: "Our Services",
        text:
            "These are the services we provide",
    });
    const [state] = React.useState([
        {
            id: 1,
            // icon: <FaGithub className="commonIcons" />,
            heading: "Construction",
            text:
                "Lorem Ipsum is simply dummy text of the printing typesetting\
          industry. simply dummy",
        },
        {
            id: 2,
            // icon: <FaCamera className="commonIcons" />,
            heading: "Road contruction",
            text:
                "Lorem Ipsum is simply dummy text of the printing typesetting\
            industry. simply dummy",
        },
        {
            id: 3,
            // icon: <FaCircleNotch className="commonIcons" />,
            heading: "Real Estate",
            text:
                "Lorem Ipsum is simply dummy text of the printing typesetting\
            industry. simply dummy",
        },
        // {
        //     id: 4,
        //     // icon: <FaApple className="commonIcons" />,
        //     heading: "App Devlopment",
        //     text:
        //         "Lorem Ipsum is simply dummy text of the printing typesetting\
        //     industry. simply dummy",
        // },
        // {
        //     id: 5,
        //     // icon: <FaFileVideo className="commonIcons" />,
        //     heading: "Video Editing",
        //     text:
        //         "Lorem Ipsum is simply dummy text of the printing typesetting\
        //     industry. simply dummy",
        // },
        // {
        //     id: 6,
        //     // icon: <FaSearchDollar className="commonIcons" />,
        //     heading: "SEO Expert",
        //     text:
        //         "Lorem Ipsum is simply dummy text of the printing typesetting\
        //     industry. simply dummy",
        // },
    ]);
    return (
        <>
            <div className="services">
                <div className="container">
                    <div className="services__header">
                        <div className="common">
                            {/* <h3 className="heading">{header.mainHeader}</h3> */}
                            <h1 className="mainHeader">{header.subHeading}</h1>
                            <p className="mainContent">{header.text}</p>
                            <div className="commonBorder"></div>
                        </div>

                        {/* <div className="row bgMain">
                            {state.map((info) => (
                                <div className="col-4 bgMain">
                                    <div className="services__box">
                                        {info.icon}
                                        <div className="services__box-header">{info.heading}</div>
                                        <div className="services__box-p">{info.text}</div>
                                    </div>
                                </div>
                            ))}
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="my-5">
                {/* <h1 className="text-center">Our </h1> */}
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4" >
                            {Sdata.map((val, ind) => {
                                return (
                                    <>
                                        <Card imgsrc={val.imgsrc} title={val.title} description={val.description} />
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Services;