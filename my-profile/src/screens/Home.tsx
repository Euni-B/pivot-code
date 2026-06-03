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
                            src="/your-photo.jpg"
                            alt="Profile"
                        />
                    </div>
                </div>

                <div className="hero-right">
                    <h1>Your Name</h1>

                    <p className="hero-tagline">
                        Designer • Developer • Creator
                    </p>

                    {/* NEW: bio line */}
                    <p className="profile-bio">
                        I build clean, modern web experiences with React and a focus on smooth UI design.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Home;