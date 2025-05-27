import {useEffect, useState} from 'react';

import WIMHH_Dj from '../../assets/images/WIMHH-DJ.jpg';
import WIMHH_BEATBOX from '../../assets/images/WIMHH-BEATBOX.jpg';
import WIMHH_HH from '../../assets/images/WIMHH-HH.jpg';
import WIMHH_RAP from '../../assets/images/WIMHH-RAP.png';
import WIMHH_GRAPH from '../../assets/images/WIMHH-GRAPH.jpg';
import WIMHH_GALLERY from '../../assets/images/WIMHH-GALLERY.jpg';
import {NavLink} from "react-router-dom";

const Events = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        setIsVisible(true);

        const calculateTimeLeft = () => {
            const eventDate = new Date('2025-05-10T08:00:00').getTime();
            const now = new Date().getTime();
            const difference = eventDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        // Calculer immédiatement et mettre à jour toutes les secondes
        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    const events = [
        {
            image: WIMHH_HH,
            title: "Stages de Danse",
            miniDescription: "Exprimez votre style",
            description: "De la breakdance au popping, maîtrisez les fondamentaux de la danse hip-hop et développez votre style avec nos danseurs pros.",
        },
        {
            image: WIMHH_Dj,
            title: "DJING",
            miniDescription: "Mixez vos sons",
            description: "Initiez-vous à l'art du mix : techniques de scratch, transitions fluides et composition de sets sur matériel pro.",
        },
        {
            image: WIMHH_RAP,
            title: "Ateliers Rap",
            miniDescription: "Trouvez votre flow",
            description: "Développez votre technique d'écriture, affinez votre flow et posez sur le micro comme un pro.",
        },
        {
            image: WIMHH_GRAPH,
            title: "Sessions Graffiti",
            miniDescription: "Colorez vos idées",
            description: "Du tag au graff, apprenez les techniques essentielles : lettrage, couleurs et styles pour créer vos œuvres.",
        },
        {
            image: WIMHH_BEATBOX,
            title: "BEATBOX",
            miniDescription: "Créez des rythmes",
            description: "Apprenez à créer des rythmes et à imiter des instruments avec votre voix. Devenez une véritable boîte à rythmes humaine !",
        },
        {
            image: WIMHH_GALLERY,
            title: "Voir les photos",
            miniDescription: "Vivez nos événements en photos !",
            description: "Vivez nos événements en photos !",
            icon: "📸"
        }
    ];

    const packs = [
        {
            title: "PACK SOLO",
            subtitle: "1 STAGE AU CHOIX",
            features: [
                "Reste de l'événement gratuit",
            ]
        },
        {
            title: "2PACK",
            subtitle: "2 STAGES AU CHOIX",
            features: [
                "Reste de l'événement gratuit",
            ]
        },
        {
            title: "3STYLE PACK",
            subtitle: "3 STAGES AU CHOIX",
            features: [
                "Reste de l'événement gratuit",
            ]
        }
    ];

    return (
        <section id="events" className="bg-black text-white py-10">
            <div className="max-w-6xl mx-auto px-4">
                {/* Compteur avec animation */}
                <div className={`text-center mb-20 transform transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-5xl font-bold mb-2">
                            PRÊT POUR L'ÉDITION 2026 ?
                        </h2>
                        <p className="text-lg md:text-3xl text-gray-200">
                            RENDEZ-VOUS L'ANNEE PROCHAINE
                        </p>
                    </div>

                    {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 ? (
                    <div className="flex flex-col justify-center items-center text-center">
                        <div className="relative group mb-4">
                            <div className="absolute -inset-2 bg-gradient-to-r from-hiphop-orange via-hiphop-orange/50 to-hiphop-orange opacity-30 blur-xl"/>
                            <div className="bg-gradient-to-br from-hiphop-orange to-hiphop-orange/80 rounded-lg p-6 md:p-10 relative">
                                <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                                    TIME'S UP!
                                </h2>
                                <p className="text-lg md:text-xl text-white/90">
                                    À l'année prochaine pour un nouvel event !
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center items-center gap-2 md:gap-8 flex-wrap">
                        {[
                            { value: timeLeft.days, label: "JOURS" },
                            { value: timeLeft.hours, label: "HEURES" },
                            { value: timeLeft.minutes, label: "MINUTES" },
                            { value: timeLeft.seconds, label: "SECONDES" }
                        ].map((time, index) => (
                            <div
                                key={index}
                                className="text-center transform transition-all duration-500"
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-hiphop-orange via-hiphop-orange/50 to-hiphop-orange opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-lg"/>
                                    <div className="bg-gradient-to-br from-hiphop-orange to-hiphop-orange/80 rounded-lg p-3 md:p-6 min-w-[70px] md:min-w-[100px] relative">
                                        <span className="text-2xl md:text-5xl font-bold">
                                            {String(time.value).padStart(2, '0')}
                                        </span>
                                        <p className="text-xs md:text-base mt-1 md:mt-2">{time.label}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                </div>

                {/* En-tête de section */}
                <div className={`text-center mt-32 mb-16 transform transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-hiphop-orange mb-6 relative">
                        Les stages durant l'événement
                        <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-hiphop-orange/30"/>
                        <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-hiphop-orange/30"/>
                    </h2>
                    <div className="w-24 h-1 bg-hiphop-orange mx-auto relative">
                        <div className="absolute -left-2 -top-2 w-4 h-4 bg-hiphop-orange/20 rounded-full blur-lg"/>
                    </div>
                </div>

                {/* Grille d'événements avec animation */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-lg aspect-[4/3]"
                        >
                            {/* Image avec zoom au hover */}
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay spécial pour la galerie */}
                            {event.title === "Voir les photos" ? (
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 transition-opacity duration-300">
                                    <NavLink to="/gallery"
                                             className="relative overflow-hidden group/button inline-flex items-center px-8 py-3 rounded-lg bg-hiphop-orange hover:bg-opacity-90 transition-all duration-300"
                                    >
                                        {/* Effet de brillance */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/button:translate-x-[200%] transition-all duration-1000"></div>

                                        {/* Texte du bouton */}
                                        <span className="relative text-white font-medium text-lg">
                                        Galerie photo
                                        </span>
                                    </NavLink>
                                </div>
                            ) : (
                                <>
                                    <div className="absolute top-0 right-0 p-2 group-hover:opacity-0 transition-opacity duration-300">
                                        <span className="text-xs text-white/80 mt-2 hidden md:block">Survoler pour plus d'infos</span>
                                        <span className="text-xs text-white/80 mt-2 block md:hidden">Cliquer pour plus d'infos</span>
                                    </div>

                                    <div
                                        className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/70 to-transparent">
                                        <div className="gap-3 mb-2">
                                            <h3 className="text-2xl font-bold">{event.title}</h3>
                                        </div>
                                        <p className="text-sm text-gray-300">{event.miniDescription}</p>
                                    </div>

                                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute top-1/3 left-0 right-0 p-6 text-center transform -translate-y-1/2">
                                            <p className="text-lg text-white leading-relaxed">{event.description}</p>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                {/* Section des packs avec animation */}
                <div id="packs" className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {packs.map((pack, index) => (
                        <div
                            key={index}
                            className={`relative group bg-gradient-to-br from-black via-black/90 to-hiphop-orange/10 p-6 rounded-lg border border-hiphop-orange/30 transition-all duration-500 overflow-hidden transform ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                            style={{transitionDelay: `${600 + index * 200}ms`}}
                        >
                            {/* Effet de gradient au hover */}
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-hiphop-orange/0 via-hiphop-orange/5 to-hiphop-orange/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>

                            <div className="relative z-10">
                                <h3 className="text-lg md:text-2xl font-bold text-hiphop-orange relative inline-block">
                                    {pack.title}
                                    <div
                                        className="absolute -bottom-0 left-0 w-0 h-0.5 bg-hiphop-orange group-hover:w-full transition-all duration-500"/>
                                </h3>
                                <p className="text-sm md:text-base mb-4 text-gray-300">{pack.subtitle}</p>
                                <ul className="space-y-3 text-gray-300">
                                    {pack.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center gap-2 group/item"
                                        >
                                            <span
                                                className="text-hiphop-orange transform group-hover/item:rotate-90 transition-transform duration-300">•</span>
                                            <span
                                                className="text-sm md:text-base group-hover/item:text-white transition-colors duration-300">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to action centralisé */}
                <div className="text-center">
                    <a
                        href="https://www.helloasso.com/associations/sound-workerz/evenements/stages-wim2h"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-block group overflow-hidden transform transition-all duration-300 overflow-hidden hover:-translate-y-1"
                    >
                        <div
                            className="relative inline-block px-8 py-4 bg-hiphop-orange text-white text-xl font-bold rounded-lg hover:bg-opacity-90 transform transition-all duration-300 overflow-hidden">
                            {/* Effet de brillance */}
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-all duration-1000"/>
                            <span className="relative">Découvrir les tarifs et réserver</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Events;