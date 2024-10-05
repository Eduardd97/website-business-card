import Header from "../Header/Header";

import "./Gallery.css";

export const Gallery = () => {
    return (
        <div>
            {" "}
            <Header></Header>
            <div className='gallery-content-box'>
                <div className='gallery-skills-box'>
                    <h2>My Skills:</h2>

                    <h3>Front-end</h3>
                    <ul className="profession">
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
                    <ul className="profession">
                        <li>Node.js (basic)</li>
                        <li>Strapi (basic)</li>
                        <li>
                            <strong>Databases:</strong>
                            <ul>
                                <li>MongoDB (basic)</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className='gallery-box'></div>
            </div>
        </div>
    );
};
