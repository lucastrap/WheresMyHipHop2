import {useEffect, useState} from 'react';
import {Link, NavLink} from 'react-router-dom';

import WIMHH_Dj from '../../assets/images/WIMHH-DJ.jpg';
import WIMHH_BEATBOX from '../../assets/images/WIMHH-BEATBOX.jpg';
import WIMHH_HH from '../../assets/images/WIMHH-HH.jpg';
import WIMHH_RAP from '../../assets/images/WIMHH-RAP.png';
import WIMHH_GRAPH from '../../assets/images/WIMHH-GRAPH.jpg';
import WIMHH_GALLERY from '../../assets/images/WIMHH-GALLERY.jpg';

const Events = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
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
        }
    ];

    return (
        <section id="events" className="bg-black text-white py-20">
            <div className="max-w-6xl mx-auto px-4">
                {/* Compteur */}
                <div className="text-center mb-10 md:mb-20">
                    <div className="text-center mb-6 md:mb-8">
                        <h2 className="text-2xl md:text-5xl font-bold mb-2">
                            PRÊT POUR L'ÉDITION 2025 ?
                        </h2>
                        <p className="text-lg md:text-3xl text-gray-200">
                            RENDEZ-VOUS LES 10 ET 11 MAI
                        </p>
                    </div>
                    <div className="flex justify-center items-center gap-2 md:gap-8 flex-wrap">
                        <div className="text-center">
                            <div className="bg-hiphop-orange rounded-lg p-3 md:p-6 min-w-[70px] md:min-w-[100px]">
                                <span
                                    className="text-2xl md:text-5xl font-bold">{String(timeLeft.days).padStart(2, '0')}</span>
                                <p className="text-xs md:text-base mt-1 md:mt-2">JOURS</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="bg-hiphop-orange rounded-lg p-3 md:p-6 min-w-[70px] md:min-w-[100px]">
                                <span
                                    className="text-2xl md:text-5xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
                                <p className="text-xs md:text-base mt-1 md:mt-2">HEURES</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="bg-hiphop-orange rounded-lg p-3 md:p-6 min-w-[70px] md:min-w-[100px]">
                                <span
                                    className="text-2xl md:text-5xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
                                <p className="text-xs md:text-base mt-1 md:mt-2">MINUTES</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="bg-hiphop-orange rounded-lg p-3 md:p-6 min-w-[70px] md:min-w-[100px]">
                                <span
                                    className="text-2xl md:text-5xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
                                <p className="text-xs md:text-base mt-1 md:mt-2">SECONDES</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* En-tête de section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Les stages durant l'événement</h2>
                    <div className="w-24 h-1 bg-hiphop-orange mx-auto"></div>
                </div>

                {/* Grille d'événements */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
                        >
                            {/* Image avec zoom au hover */}
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay spécial pour la galerie */}
                            {event.title === "Voir les photos" ? (
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 transition-opacity duration-300">
                                    <a
                                        href="/gallery"
                                        className="relative overflow-hidden group/button inline-flex items-center px-8 py-3 rounded-lg bg-hiphop-orange hover:bg-opacity-90 transition-all duration-300"
                                    >
                                        {/* Effet de brillance */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/button:translate-x-[200%] transition-all duration-1000"></div>

                                        {/* Texte du bouton */}
                                        <span className="relative text-white font-medium text-lg">
                                        Galerie photo
                                    </span>
                                    </a>
                                </div>
                            ) : (
                                <>
                                    {/* Overlay standard pour les autres événements */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/70 to-transparent">
                                        <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                                        <p className="text-sm text-gray-300">{event.miniDescription}</p>
                                    </div>

                                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute top-1/2 left-0 right-0 p-6 text-center transform -translate-y-1/2">
                                            <p className="text-lg text-hiphop-orange font-medium">{event.description}</p>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                {/* Section des packs */}
                <div id="packs" className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
                    {/* Pack Simple */}
                    <div className="bg-hiphop-orange/10 p-4 md:p-8 rounded-lg border border-hiphop-orange/20 hover:border-hiphop-orange transition-all duration-300">
                        <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">PACK SOLO</h3>
                        <p className="mb-4 md:mb-6 text-gray-300">1 STAGE AU CHOIX</p>
                        <ul className="space-y-2 md:space-y-3 text-gray-300 text-sm md:text-base mb-6 md:mb-8">
                            <li>• Accès à un atelier</li>
                            <li>• Style au choix</li>
                            <li>• Pass une journée</li>
                        </ul>
                    </div>

                    {/* 2PACK */}
                    <div className="bg-hiphop-orange/10 p-4 md:p-8 rounded-lg border border-hiphop-orange/20 hover:border-hiphop-orange transition-all duration-300">
                        <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">2PACK</h3>
                        <p className="mb-4 md:mb-6 text-gray-300">2 STAGES AU CHOIX</p>
                        <ul className="space-y-2 md:space-y-3 text-gray-300 text-sm md:text-base mb-6 md:mb-8">
                            <li>• Accès à deux ateliers</li>
                            <li>• Choix parmi tous les styles</li>
                            <li>• Pass pour les deux jours</li>
                        </ul>
                    </div>

                    {/* 3STYLE PACK */}
                    <div className="bg-hiphop-orange/10 p-4 md:p-8 rounded-lg border border-hiphop-orange/20 hover:border-hiphop-orange transition-all duration-300">
                        <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">3STYLE PACK</h3>
                        <p className="mb-4 md:mb-6 text-gray-300">3 STAGES AU CHOIX</p>
                        <ul className="space-y-2 md:space-y-3 text-gray-300 text-sm md:text-base mb-6 md:mb-8">
                            <li>• Accès à trois ateliers</li>
                            <li>• Mix de styles possible</li>
                            <li>• Pass pour les deux jours</li>
                        </ul>
                    </div>

                    {/* ALL EYES ON ME PACK */}
                    <div className="bg-hiphop-orange/10 p-4 md:p-8 rounded-lg border border-hiphop-orange/20 hover:border-hiphop-orange transition-all duration-300">
                        <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">ALL EYES ON ME PACK</h3>
                        <p className="mb-4 md:mb-6 text-gray-300">TOUS LES STAGES</p>
                        <ul className="space-y-2 md:space-y-3 text-gray-300 text-sm md:text-base mb-6 md:mb-8">
                            <li>• Accès illimité aux ateliers</li>
                            <li>• Tous les styles inclus</li>
                            <li>• Pass VIP deux jours</li>
                        </ul>
                    </div>
                </div>

                {/* Call to action centralisé */}
                <div className="text-center">
                    <a
                        href="https://www.helloasso.com/votre-lien"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-hiphop-orange text-white text-xl font-bold rounded-lg hover:bg-opacity-90 transform hover:-translate-y-1 transition-all duration-300"
                    >
                        Découvrir les tarifs et réserver
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Events;