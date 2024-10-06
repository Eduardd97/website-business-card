import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "./Carousel.css";

const Carousel = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Функция для переключения на следующий слайд
    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Функция для переключения на предыдущий слайд
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    // Автоматическое переключение слайдов каждые 3 секунды
    useEffect(() => {
        const interval = setInterval(goToNext, 4000);
        return () => clearInterval(interval); // Очищаем интервал при размонтировании компонента
    }, []);

    return (
        <div className='carousel-container'>
            <button onClick={goToPrevious} className='carousel-button'>
                <ArrowBackIosNewIcon />
            </button>
            <div className='slide'>
                <img
                    src={slides[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                    className='image'
                />
            </div>
            <button onClick={goToNext} className='carousel-button'>
                <ArrowForwardIosIcon />
            </button>
        </div>
    );
};

// Добавляем типизацию пропсов с помощью PropTypes
Carousel.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
