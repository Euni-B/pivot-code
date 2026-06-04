import "../styles/Footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">

            <div className="footer-line"></div>

            <div className="footer-content">

                <p>
                  
                  Designed & Developed by Eunice Bontreger
                </p>

                <div className="footer-diamond"></div>

                <p>
                    © {currentYear} 
                </p>

            </div>

        </footer>
    );
}

export default Footer;