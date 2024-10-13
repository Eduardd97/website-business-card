import { useEffect, useState } from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import "./CV.css";

import CV_En from "../../assets/documents/Eduard-CV.pdf";
import coverLetter_En from "../../assets/documents/Eduard-cover-letter.pdf";


export const CV = () => {
    const [zoom, setZoom] = useState(60);

    // Function to determine zoom depending on screen width
    const updateZoom = () => {
        const screenWidth = window.innerWidth;

        screenWidth < 550 ? setZoom(80) : setZoom(60);
    };

    useEffect (() => {
        updateZoom();

        // Add a listener for window resizing
        window.addEventListener("resize", updateZoom);

        return () => {
            // Remove the listener when the component is unmounted
            window.removeEventListener("resize", updateZoom);
        };

    }, [])

    return (
        <div>
            <Header />

            <div className='CV-conteyner'>
                <section className='CV'>
                    <iframe src={`${CV_En}#zoom=${zoom}`} width='100%' height='100%'>
                        Ваш браузер не поддерживает отображение PDF. Вы можете
                        скачать файл
                        <a href={CV_En} target='_blank' download={CV_En}>
                            здесь
                        </a>
                        .
                    </iframe>

                    <iframe
                        src={`${coverLetter_En}#zoom=${zoom}`}
                        width='100%'
                        height='100%'
                    >
                        Ваш браузер не поддерживает отображение PDF. Вы можете
                        скачать файл
                        <a
                            href={coverLetter_En}
                            target='_blank'
                            download={coverLetter_En}
                        >
                            здесь
                        </a>
                        .
                    </iframe>
                </section>
            </div>

            <Footer />
        </div>
    );
};
