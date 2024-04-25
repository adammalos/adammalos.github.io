function Navbar() {
    const navEL = React.useRef(null);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 56) {
                navEL.current.querySelector('.navbar').classList.add('scrolled');
            } else {
                navEL.current.querySelector('.navbar').classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={navEL}>
            <nav className="navbar navbar-expand fw-bold">
                <div className="container-fluid">
                    <a className="navbar-brand" href="index.html">AM</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a id="link-1" className="nav-link" aria-current="page" href="index.html">Início</a>
                            </li>
                            <li id="link-2" className="nav-item">
                                <a className="nav-link" href="intuito.html" target="_blank">Intuito</a>
                            </li>
                            <li id="link-3" className="nav-item">
                                <a className="nav-link" href="#footer">Contato</a>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-icon-linkedin">
                        <a href="https://www.linkedin.com/in/adam-malos-583b03198/" target="_blank">
                            <img src="img/linkedin.svg" alt="LinkedIn"/>
                        </a>
                    </div>
                    <div className="nav-icon-insta">
                        <a href="https://www.instagram.com/SEU_PERFIL_DO_INSTAGRAM" target="_blank">
                            <img src="img/instagram.svg" alt="Instagram"/>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

const rootElement = document.getElementById("navbar");
const root = ReactDOM.createRoot(rootElement);
root.render(<Navbar />);
