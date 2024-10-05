import "./HomePage.css";
import "./HomePageMobile.css";
import codingLogo from "../../assets/coding.png";
import linkedin from "../../assets/contacts/linkedin.svg";
import mail from "../../assets/contacts/mail.svg";
import git from "../../assets/contacts/git.svg";
import phone from "../../assets/contacts/phone.svg";
import avatar from "../../assets/avatar/photo_2024-09-17_20-16-29.jpg";
import burger from "../../assets/nav-burger/burger-menu-svgrepo-com.svg"
import closeIcon from "../../assets/nav-burger/close-svgrepo-com.svg"

import { Link } from "react-router-dom";
import { useState } from "react";

export const HomePage = () => {
    const routers = [
        {
            title: "My Gallery",
            path: "/gallery",
        },
    ];

    const [menuOpen, setMenuOpen] = useState(false);

    const togleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const AlertPhone = () => {
        alert("My phone: +48-577-366-267");
    };

    const AlertEmeil = () => {
        alert("My email: kozeychukk1997@gmail.com");
    };

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
            {routers.map((route, index) => (
                <div className='cards' key={index}>
                    <div className='card-box card-box-top' key={1}>
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
                                <Link className='gallery-title' to={route.path}>
                                    <h3>{route.title}</h3>
                                </Link>
                            </div>
                            <div className='gallery-preview'></div>
                        </div>
                    </div>
                    <div className='card-box card-box-bottom' key={2}>
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
                            <img className="nav-burger-icon" src={menuOpen ? closeIcon : burger} alt="" onClick={togleMenu} />
                            {menuOpen && (
                            <nav className="nav-burger">
                                <Link className="nav-burger-list-item" to={route.path}><span>{route.title}</span></Link>
                                <Link className="nav-burger-list-item"><span>About me</span></Link>
                                <Link className="nav-burger-list-item"><span>Contacts</span></Link>
                                {/* <Link className="nav-burger-list-item"><span></span></Link> */}
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
            ))}
        </div>
    );
};
