function Footer() {
    return (
        <footer id="footer">
            <div className="footer py-md-5">
                <div className="footer-container container py-md-4 py-5">
                    <ul className="footer-lista">
                        <li>
                            &copy; 2023 Adam Malos. Todos os direitos reservados.
                        </li>
                        <li>
                            <img src="img/phone-fill.svg" alt=""/>
                            +55 11964451613
                        </li>
                        <li>
                            <img src="img/google.svg" className="mr-1" alt=""/> 
                            adamdomingosmm@gmail.com
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

const rootElement = document.getElementById("footer");
const root = ReactDOM.createRoot(rootElement);
root.render(<Footer />);
