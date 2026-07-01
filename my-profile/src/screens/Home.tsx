import "../styles/Home.css";
import { Helmet } from "react-helmet-async";
import headshot from "../assets/headshot.jpg";

function Home() {
    return (
        <div className="home-page">

            <Helmet>
                <title>Eunice B. | Front-End Developer Portfolio</title>
                <meta
                    name="description"
                    content="Portfolio of Eunice B., a front-end developer building responsive React, TypeScript, Tailwind, and full-stack web projects."
                />
            </Helmet>
            <div className="hero-container">

                <div className="hero-left">
                    <div className="hero-glow"></div>

                    {/* NEW: avatar wrapper with diamond */}
                    <div className="avatar-wrapper">
                        <div className="diamond-bg"></div>

                        <img
                            className="profile-avatar"
                            src={headshot}
                            alt="Profile"
                        />
                    </div>
                </div>

                <div className="hero-right">
                    <h1>Eunice Bontreger</h1>

                    <p className="hero-tagline">
                        Designer • Developer • Creator
                    </p>

                    {/* NEW: bio line */}
                    <p className="profile-bio">
                        I build clean, modern web experiences with React and a focus on smooth UI design.
                    </p>

                    <div className="social-links">
                        <a
                            href="https://github.com/Euni-B/pivot-code"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>

                        <span className="social-diamond"></span>

                        <a
                            href="https://www.linkedin.com/in/eunice-bontreger-030953124/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;