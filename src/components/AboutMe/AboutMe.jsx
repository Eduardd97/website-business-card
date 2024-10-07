import Header from "../Header/Header";

import "./AboutMe.css";
import backgroundAboutMePhoto from "../../assets/aboutMe/about-me-pfoto.jpg";
import aboutMeAvatar from "../../assets/aboutMe/about-me-avatar.png";
import Footer from "../Footer/Footer";

export const AboutMe = () => {
    return (
        <div>
            <Header />
            
            <div className='about-me-conteyner'>
                <div className='about-me-content-box'>
                    <div className='background-about-me-photo'>
                        <img
                            className='background-photo'
                            src={backgroundAboutMePhoto}
                            alt='My-Black-White-Photo'
                        />
                    </div>
                    <section className='about-me-section'>
                        <h2 className='about-me-title'>About Me</h2>
                        <img
                            className='about-me-avatar'
                            src={aboutMeAvatar}
                            alt='my avatar'
                        />
                        <p className='about-me-text'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Facere in, ratione a adipisci eveniet
                            molestiae, repudiandae doloribus quis iure corporis
                            nisi deleniti doloremque amet culpa officia tempora.
                            Tempora, minima nesciunt! Animi pariatur iste
                            provident expedita ut magnam repudiandae quae rem,
                            fugit accusamus fugiat blanditiis odio,
                            necessitatibus aperiam laborum ad deleniti
                            veritatis! Dolor placeat pariatur officiis possimus
                            rerum sapiente, expedita rem. Excepturi et tempore
                            debitis natus, ipsum voluptatum, eos voluptas
                            eligendi sunt vel alias doloribus praesentium harum.
                            Suscipit laudantium debitis numquam laboriosam odio
                            blanditiis itaque deleniti quaerat sequi. Dicta,
                            veritatis exercitationem. Nihil voluptates atque
                            possimus harum nemo est. Exercitationem placeat
                            minima, cum maxime perferendis mollitia architecto
                            possimus repellat, natus ab magnam incidunt. Beatae
                            magni officia asperiores itaque assumenda atque est
                            quod. Minima blanditiis nostrum quisquam ut modi
                            dignissimos, eos molestias nulla, corporis odit
                            laborum consequatur, expedita officia. Deserunt
                            possimus sed sunt quos eveniet aliquam! Aperiam iste
                            minima alias aliquam veniam at!
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </div>
    );
};
