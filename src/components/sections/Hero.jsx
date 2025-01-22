import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import mainVideo from '../../assets/videos/main.mp4';
import sloganImage from '../../assets/images/slogan.png';

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.from(".hero-content > *", {
            y: 30,
            opacity: 0.2, // Initial
            duration: 0.2,
            stagger: 0.2,
            ease: "power3.out"
        }).to(".hero-content > *", {
            opacity: 1 // Final
        });
    }, []);

    return (
        <section ref={heroRef} className="relative w-screen h-screen overflow-hidden">
            {/* Vidéo en plein écran */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src={mainVideo} type="video/mp4" />
            </video>

            {/* Contenu centré */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center hero-content">
                <img
                    src={sloganImage}
                    alt="Where is my HipHop"
                    className="w-full max-w-md md:max-w-lg xl:max-w-xl mb-6 px-4"
                />

                <p className="text-white text-xl md:text-2xl font-bold mb-12 px-4 text-center">
                    Le rendez-vous culture HipHop
                </p>

                <div className="flex flex-col sm:flex-row gap-4 px-4">
                    <a
                        href="#events"
                        className="px-8 py-3 bg-hiphop-orange text-white text-lg font-bold rounded
                     hover:bg-opacity-90 transition-all duration-300"
                    >
                        Découvrir les événements
                    </a>
                    <a
                        href="#program"
                        className="px-8 py-3 border-2 border-white text-white text-lg font-bold rounded
                     hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Voir le programme
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;