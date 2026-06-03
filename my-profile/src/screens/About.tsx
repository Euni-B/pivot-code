import "../styles/About.css";

function About() {
    return (
        <div className="about-page">

            {/* BACKLIT DIAMOND LAYER */}
            <div className="about-diamond" />

            {/* TOP TITLE */}
            <div className="about-header">
                <h1>About Me</h1>
                <p>I'm a frontend developer with a passion for clean design and smooth user experiences. I enjoy building projects that challenge me to learn new technologies and design patterns.</p>
            </div>

            {/* MIDDLE TWO COLUMNS */}
            <div className="about-grid">

                <div className="about-card">
                    <h2>Fun Facts</h2>
                    <ul>
                        <li>I enjoy building UI from scratch</li>
                        <li>I like clean, minimal design systems</li>
                        <li>I prefer frontend over backend (for now)</li>
                        <li>I learn best by building projects</li>
                    </ul>
                </div>

                <div className="about-card">
                    <h2>Interests</h2>
                    <ul>
                        <li>React & UI design</li>
                        <li>Product design</li>
                        <li>Animations & micro-interactions</li>
                        <li>Fitness + productivity systems</li>
                    </ul>
                </div>

            </div>

            {/* BOTTOM SECTION */}
            <div className="about-bottom">
                <h2>Currently Learning</h2>
                <p>
                    TypeScript, advanced React patterns, and UI animation systems.
                </p>
            </div>

        </div>
    );
}

export default About;