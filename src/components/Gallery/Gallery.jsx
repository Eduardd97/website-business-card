import React, { useState, useEffect } from "react";
import Carousel from "../Carousel/Carousel";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./Gallery.css";

import convertCurrensiIcons from "../../assets/carouselIcon/convertCurensi.png";
import jobSearchIcons from "../../assets/carouselIcon/jobSearchSite.png";
import landingPageIcons from "../../assets/carouselIcon/landingPage.png";
import shopSiteIcons from "../../assets/carouselIcon/shopSite.png";
import songSiteIcons from "../../assets/carouselIcon/songSite.png";
import userListIcons from "../../assets/carouselIcon/userList.png";
import usersListAndUsersPostsIcons from "../../assets/carouselIcon/usersListAndUsersPosts.png";
import userTableSiteIcons from "../../assets/carouselIcon/userTableSite.png";
import weatherIcons from "../../assets/carouselIcon/weather.png";

import GitHubIcon from "@mui/icons-material/GitHub";
import Pagination from "@mui/material/Pagination";
import { Button, Drawer } from "@mui/material";

import projects from "../../projects";

const slides = [
    convertCurrensiIcons,
    jobSearchIcons,
    landingPageIcons,
    shopSiteIcons,
    songSiteIcons,
    userListIcons,
    usersListAndUsersPostsIcons,
    userTableSiteIcons,
    weatherIcons,
];

export const Gallery = () => {
    const itemsPerPage = 4; // Количество элементов на странице
    const [currentPage, setCurrentPage] = useState(
        parseInt(localStorage.getItem("currentPage")) || 1
    );
    const [state, setState] = useState({
        left: false,
        right: false,
    });
    const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

    const indexOfLastProject = currentPage * itemsPerPage;
    const indexOfFirstProject = indexOfLastProject - itemsPerPage;
    const currentProjects = projects.slice(
        indexOfFirstProject,
        indexOfLastProject
    );

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
        localStorage.setItem("currentPage", value); // Сохранение текущей страницы в localStorage
    };

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = () => (
        <div className='gallery-skills-box'>
            <h2>My Skills:</h2>
            <h3>Front-end</h3>
            <ul className='profession'>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>TypeScript (used with React, Angular)</li>
                <li>
                    <strong>Preprocessors:</strong>
                    <ul>
                        <li>SASS (SCSS)</li>
                    </ul>
                </li>
                <li>
                    <strong>Frameworks:</strong>
                    <ul>
                        <li>React</li>
                        <li>Angular</li>
                    </ul>
                </li>
                <li>
                    <strong>Libraries:</strong>
                    <ul>
                        <li>React Redux (basic)</li>
                        <li>Bootstrap</li>
                        <li>Materialize</li>
                        <li>Material-UI</li>
                        <li>Jest (basic)</li>
                    </ul>
                </li>
            </ul>

            <h3>Backend</h3>
            <ul className='profession'>
                <li>Node.js (basic)</li>
                <li>Strapi (basic)</li>
                <li>
                    <strong>Databases:</strong>
                    <ul>
                        <li>MongoDB (basic)</li>
                    </ul>
                </li>
            </ul>

            <h3>Languages</h3>
            <ul className='languages'>
                <li>Ukrainian — native</li>
                <li>Russian — fluent</li>
                <li>English — currently taking courses</li>
                <li>
                    Polish — conversational, sufficient for work (self-taught)
                </li>
            </ul>
        </div>
    );

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 600);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            <Header />
            <div className='button-container'>
                {isMobile && (
                    <>
                        <Button onClick={toggleDrawer("left", true)}>
                            Skils Left
                        </Button>
                        <Button onClick={toggleDrawer("right", true)}>
                            Skils Right
                        </Button>
                    </>
                )}
            </div>
            <div className='gallery-content-box'>
                {isMobile &&
                    ["left", "right"].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <Drawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                                sx={{
                                    "& .MuiDrawer-paper": {
                                        width: "240px", // Установите желаемую ширину здесь
                                    },
                                }}
                            >
                                {list(anchor)}
                            </Drawer>
                        </React.Fragment>
                    ))}

                {/* Отображение списка навыков при ширине экрана больше 600 пикселей */}
                {!isMobile && list()}

                <div className='gallery-box'>
                    <Carousel slides={slides} />

                    <h2
                        style={{
                            color: "#fff",
                            borderBottom: "1px solid #fff",
                        }}
                    >
                        My projects
                    </h2>

                    <div className='my-portfolio'>
                        {currentProjects.map((project, index) => (
                            <div className='site-link' key={index}>
                                <a
                                    className='site-link-Icon'
                                    href={project.link}
                                >
                                    <img
                                        src={project.icon}
                                        alt='link-icon'
                                        className='link-icon'
                                    />
                                </a>
                                <section
                                    className='site-description-box'
                                    style={{ textAlign: "justify" }}
                                >
                                    <p className='site-description'>
                                        {project.description}
                                    </p>
                                    <a href={project.githubLink}>
                                        <GitHubIcon />
                                    </a>
                                </section>
                            </div>
                        ))}
                        <Pagination
                            count={Math.ceil(projects.length / itemsPerPage)}
                            variant='outlined'
                            color='primary'
                            page={currentPage}
                            onChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
