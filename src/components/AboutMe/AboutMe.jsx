import Header from "../Header/Header";

import "./AboutMe.css";
import backgroundAboutMePhoto from "../../assets/aboutMe/about-me-pfoto.jpg";
import aboutMeAvatar from "../../assets/aboutMe/about-me-avatar.jpg";
import Footer from "../Footer/Footer";

import listenToMusic from "../../assets/hobiePhotos/music.jpg";
import pain from "../../assets/hobiePhotos/paint.jpg";
import soloLeveling from "../../assets/hobiePhotos/solo-leveling.jpg";
import unrealEngine from "../../assets/hobiePhotos/unreal-engine.png";
import wroclawEmbankment from "../../assets/hobiePhotos/wroclaw.jpg";

export const AboutMe = () => {
    return (
        <div>
            <Header />

            <div className='about-me-conteyner'>
                <div className='about-me-content-box'>
                    <div className='background-about-me-photo'>
                        <h2 className='about-me-title'>About Me</h2>
                        <img
                            className='background-photo'
                            src={backgroundAboutMePhoto}
                            alt='My-Black-White-Photo'
                        />
                    </div>
                    <section className='about-me-section'>
                        <img
                            className='about-me-avatar'
                            src={aboutMeAvatar}
                            alt='my avatar'
                        />
                        <div className='about-me'>
                            <p className='about-me-text' style={{fontSize:"20px"}}>
                                Hi, my name is Eduard, and I’m currently looking
                                for my first commercial experience as a Frontend
                                Developer. My journey into web development began
                                with a few years of self-study in HTML and CSS,
                                where I gained confidence in building static
                                websites. However, learning JavaScript
                                independently was more challenging, which led me
                                to seek formal education. 
                                <br />
                                <br />
                                I completed a 3-month
                                &quot;Introduction to Python&quot; course at Hillel IT
                                School, which was a fascinating experience and
                                gave me a good foundational understanding of
                                programming. While Python was engaging, I found
                                frontend development more appealing because I
                                enjoy seeing the visual outcome of my work in
                                the form of interactive websites and landing
                                pages. 
                                <br />
                                <br />
                                I then enrolled in the Frontend Developer
                                course at IT Step Academy, where I spent a year
                                gaining comprehensive knowledge in HTML, CSS,
                                JavaScript, and modern tools like React,
                                TypeScript, and Angular. I’m particularly
                                passionate about React for its flexibility in
                                creating dynamic user interfaces. Additionally,
                                I’ve acquired basic skills in Node.js, giving me
                                a broader understanding of full-stack
                                development.
                                <br />
                                <br />
                                On a personal note, I’m a huge fan
                                of anime, especially &quot;Bleach&quot; and &quot;Demon
                                Slayer.&quot; I also enjoy following tech trends and
                                improving my skills through hands-on projects in
                                my free time. My previous work as a sales
                                consultant and in construction has helped me
                                develop valuable soft skills like teamwork,
                                attention to detail, and problem-solving, all of
                                which I apply in my development process.
                            </p>

                            <h3 className='hobie-title'>Hobies:</h3>

                            <section className='hobies'>
                                <div className='hobies-item'>
                                    <img
                                        className='hobies-icon'
                                        src={listenToMusic}
                                        alt='Listen To Music'
                                    />
                                    <span className='hobies-text'>
                                        Listen to music
                                    </span>
                                </div>
                                <div className='hobies-item'>
                                    <img
                                        className='hobies-icon'
                                        src={pain}
                                        alt='Pain'
                                    />
                                    <span className='hobies-text'>Drawing</span>
                                </div>
                                <div className='hobies-item'>
                                    <img
                                        className='hobies-icon'
                                        src={soloLeveling}
                                        alt='Solo Leveling'
                                    />
                                    <span className='hobies-text'>
                                        Reading manhwa
                                    </span>
                                </div>
                                <div className='hobies-item'>
                                    <img
                                        className='hobies-icon'
                                        src={unrealEngine}
                                        alt='Unreal Engine'
                                    />
                                    <span className='hobies-text'>
                                        Gamedev on Unreal Engine
                                    </span>
                                </div>
                                <div className='hobies-item'>
                                    <img
                                        className='hobies-icon'
                                        src={wroclawEmbankment}
                                        alt='Wroclaw Embankment'
                                    />
                                    <span className='hobies-text'>
                                        Walking in the fresh air
                                    </span>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </div>
    );
};
