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
                            <p className='about-me-text'>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Facere in, ratione a adipisci
                                eveniet molestiae, repudiandae doloribus quis
                                iure corporis nisi deleniti doloremque amet
                                culpa officia tempora. Tempora, minima nesciunt!
                                Animi pariatur iste provident expedita ut magnam
                                repudiandae quae rem, fugit accusamus fugiat
                                blanditiis odio, necessitatibus aperiam laborum
                                ad deleniti veritatis! Dolor placeat pariatur
                                officiis possimus rerum sapiente, expedita rem.
                                Excepturi et tempore debitis natus, ipsum
                                voluptatum, eos voluptas eligendi sunt vel alias
                                doloribus praesentium harum. Suscipit laudantium
                                debitis numquam laboriosam odio blanditiis
                                itaque deleniti quaerat sequi. Dicta, veritatis
                                exercitationem. Nihil voluptates atque possimus
                                harum nemo est. Exercitationem placeat minima,
                                cum maxime perferendis mollitia architecto
                                possimus repellat, natus ab magnam incidunt.
                                Beatae magni officia asperiores itaque assumenda
                                atque est quod. Minima blanditiis nostrum
                                quisquam ut modi dignissimos, eos molestias
                                nulla, corporis odit laborum consequatur,
                                expedita officia. Deserunt possimus sed sunt
                                quos eveniet aliquam! Aperiam iste minima alias
                                aliquam veniam at!
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
