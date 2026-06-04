import "../styles/Home.css";

function Home() {
    return (
        <div className="home-page">
            <div className="hero-container">

                <div className="hero-left">
                    <div className="hero-glow"></div>

                    {/* NEW: avatar wrapper with diamond */}
                    <div className="avatar-wrapper">
                        <div className="diamond-bg"></div>

                        <img
                            className="profile-avatar"
                            src="/headshot.jpg"
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