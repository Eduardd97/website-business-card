import "./HomePage.css";
import "./HomePageMobile.css";
import codingLogo from "../../assets/coding.png";
import linkedin from "../../assets/contacts/linkedin.svg";
import mail from "../../assets/contacts/mail.svg";
import git from "../../assets/contacts/git.svg";
import phone from "../../assets/contacts/phone.svg";
import avatar from "../../assets/avatar/photo_2024-09-17_20-16-29.jpg";
import burger from "../../assets/nav-burger/burger-menu-svgrepo-com.svg";
import closeIcon from "../../assets/nav-burger/close-svgrepo-com.svg";

import { Link } from "react-router-dom";
import { useState } from "react";

export const HomePage = () => {
    const routers = [
        { title: "My Gallery", path: "/gallery" },
        { title: "About me", path: "#" },
        { title: "CV", path: "#" },
        { title: "Certificates", path: "#" },
        { title: "Contacts", path: "#" },
    ];

    const [menuOpen, setMenuOpen] = useState(false);

    const togleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const AlertPhone = () => {
        alert("My phone: +48-577-366-267");
    };

    const AlertEmeil = () => {
        alert("My email: kozeychukk1997@gmail.com");
    };

    const galleryRoute = routers.find((route) => route.path === "/gallery");

    return (
        <div className='home-page-box'>
            <div className='brief-information'>
                <img
                    className='coding-Logo'
                    src={codingLogo}
                    alt='CodingLogo'
                />

                <article className='brief-information-about-me'>
                    <h1>Eduard Kozichuk</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Fuga ad laudantium rerum consequatur magni maiores
                        consequuntur officiis dignissimos reiciendis distinctio?
                        Vel debitis esse soluta nihil deserunt ullam eos quod
                        doloribus.
                    </p>
                </article>
            </div>
            {galleryRoute && (
                <div className='cards' key={galleryRoute.title}>
                    <div className='card-box card-box-top'>
                        {" "}
                        <div className='card-list-item'>
                            <div className='border-fon'></div>
                            <span className='greetings'>
                                Welcome to my site{" "}
                            </span>
                        </div>
                        <div className='card-list-item'>
                            <div className='gallery-name'>
                                {" "}
                                <Link
                                    className='gallery-title'
                                    to={galleryRoute.path}
                                >
                                    <h3>{galleryRoute.title}</h3>
                                </Link>
                            </div>
                            <div className='gallery-preview'></div>
                        </div>
                    </div>
                    <div className='card-box card-box-bottom'>
                        <div className='card-list-item'>
                            <section className='contacts'>
                                <div className='contact'>
                                    <a href='https://www.linkedin.com/in/eduard-kozeichuk-843b06221/'>
                                        <img src={linkedin} alt='linkedin' />
                                    </a>
                                </div>
                                <div className='contact'>
                                    <img
                                        src={mail}
                                        alt='mail'
                                        onClick={AlertEmeil}
                                    />
                                </div>
                            </section>
                            <section className='contacts'>
                                <div className='contact'>
                                    <a href='https://github.com/Eduardd97?tab=overview&from=2024-08-01&to=2024-08-31'>
                                        <img src={git} alt='git' />
                                    </a>
                                </div>
                                <div className='contact'>
                                    <img
                                        src={phone}
                                        alt='import git from "../../assets/contacts/git.svg'
                                        onClick={AlertPhone}
                                    />
                                </div>
                            </section>
                        </div>
                        <div className='card-list-item'>
                            <img
                                className='nav-burger-icon'
                                src={menuOpen ? closeIcon : burger}
                                alt=''
                                onClick={togleMenu}
                            />
                            {menuOpen && (
                                <nav className='nav-burger'>
                                    {routers.map((route, index) => (
                                        <Link
                                            key={route.title + index}
                                            className='nav-burger-list-item'
                                            to={route.path}
                                        >
                                            {route.title}
                                        </Link>
                                    ))}
                                </nav>
                            )}

                            <div className='avatar'>
                                <img
                                    className='my-avatar'
                                    src={avatar}
                                    alt=''
                                />
                            </div>
                            <div className='about-me'>
                                <span>Eduard Kozeichuk</span>
                                <span>Front-end Developer</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
