import SW_LOGO from '../../assets/images/logo_ws.png';


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-hiphop-orange bg-opacity-5 text-white py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Logo/Nom */}
                    <img
                        src={SW_LOGO}
                        alt="WIM2H"
                        className="relative h-12 w-auto"
                    />


                    {/* Navigation */}
                    <div className="flex flex-wrap justify-center gap-8">
                        <a href="/#events" className="hover:text-black transition-colors">
                            Événements
                        </a>
                        <a href="/#program" className="hover:text-black transition-colors">
                            Programme
                        </a>
                        <a href="/#partners" className="hover:text-black transition-colors">
                            Partenaires
                        </a>
                    </div>

                    {/* Mentions légales et copyright */}
                    <div className="flex flex-col items-center md:items-end gap-2 text-sm">
                        <a
                            href="/legal-notice"
                            className="hover:text-black transition-colors"
                        >
                            Mentions Légales
                        </a>
                        <p>© {currentYear} Where is my HipHop</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;