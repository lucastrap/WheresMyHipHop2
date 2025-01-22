import React, { useState, useEffect } from 'react';
import eventVideo from '../../assets/videos/event-2024.mp4';
import {array} from "ts-interface-checker";

const Intro = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="intro" className="bg-black text-white py-20">
            <div className="max-w-6xl mx-auto px-4">
                {/* En-tête de section avec animation */}
                <div
                    className={`text-center mb-16 transform transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-hiphop-orange mb-6 relative">
                        L'événement Hip-Hop de l'année à Toulouse
                        <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-hiphop-orange/30"/>
                        <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-hiphop-orange/30"/>
                    </h2>
                    <div className="w-24 h-1 bg-hiphop-orange mx-auto relative">
                        <div className="absolute -left-2 -top-2 w-4 h-4 bg-hiphop-orange/20 rounded-full blur-lg"/>
                    </div>
                </div>

                {/* Présentation principale avec animation décalée */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div
                        className={`space-y-6 transform transition-all duration-700 delay-200 ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                        }`}
                    >
                        <p className="text-xl md:text-2xl leading-relaxed relative group">
                            <span className="absolute -left-4 top-0 w-1 h-0 bg-hiphop-orange group-hover:h-full transition-all duration-500"/>
                            Where is my HipHop est bien plus qu'un événement : c'est une célébration
                            vivante de la culture hip-hop sous toutes ses formes, parrainée par Pone,
                            producteur iconique de la Fonky Family.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-300">
                            Plongez dans un univers où la danse, le rap, le graffiti et le beatbox
                            se rencontrent pour créer une expérience unique au cœur de Toulouse.
                        </p>
                    </div>
                    <div
                        className={`bg-gradient-to-br from-black via-black/90 to-hiphop-orange/10 rounded-lg p-8 space-y-4 transform transition-all duration-700 delay-400 relative group ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                        }`}
                    >
                        {/* Élément décoratif coin supérieur droit */}
                        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-hiphop-orange/30 group-hover:border-hiphop-orange transition-colors duration-300"/>
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative">
                                <div className="absolute -top-2 -left-2 w-16 h-16 bg-hiphop-orange/20 rounded-full blur-xl group-hover:bg-hiphop-orange/30 transition-all duration-300"/>
                                <span className="text-4xl font-bold text-hiphop-orange relative">300+</span>
                            </div>
                            <span className="text-lg">participants lors de l'édition 2024</span>
                        </div>

                        <div className="space-y-3">
                            {[
                                "18 intervenants professionnels",
                                "Des stages et battles de danse",
                                "Ateliers rap, graffiti, et beatbox",
                                "Conférences sur la professionnalisation"
                            ].map((text, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 group/item"
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    <span className="text-hiphop-orange transform group-hover/item:rotate-180 transition-transform duration-300">✓</span>
                                    <span className="group-hover/item:text-hiphop-orange transition-colors duration-300">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Points clés avec animation */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-20">
                    {[
                        {
                            title: "Pour Tous les Niveaux",
                            text: "Des débutants aux experts, chacun trouve sa place dans nos ateliers et stages adaptés à tous les niveaux."
                        },
                        {
                            title: "Apprentissage & Partage",
                            text: "Apprenez auprès de professionnels passionnés et partagez votre amour pour la culture hip-hop."
                        },
                        {
                            title: "Rencontres & Opportunités",
                            text: "Créez des connexions, découvrez des opportunités et intégrez la communauté hip-hop toulousaine."
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`bg-black/50 p-6 rounded-lg border border-hiphop-orange/30 transition-all duration-500 transform relative group overflow-hidden ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            } ${index === 2 ? 'col-span-2 md:col-span-1' : ''}`}
                            style={{ transitionDelay: `${600 + index * 200}ms` }}
                        >
                            {/* Fond avec effet de gradient animé */}
                            <div className="absolute inset-0 bg-gradient-to-br from-hiphop-orange/0 via-hiphop-orange/5 to-hiphop-orange/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>

                            <div className="relative z-10">
                                <h3 className="text-base md:text-xl font-bold mb-4 text-hiphop-orange relative inline-block">
                                    {item.title}
                                    <div
                                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-hiphop-orange group-hover:w-full transition-all duration-500"/>
                                </h3>
                                <p className="text-sm md:text-base text-gray-300 group-hover:text-white transition-colors duration-300">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Vidéo de l'édition précédente */}
                <div className="text-center">
                    <h3 className="text-2xl font-bold mb-8">Retour sur l'édition 2024</h3>
                    <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden">
                        <video
                            className="w-full h-full object-cover"
                            ref={(el) => {
                                if (!el) return;
                                const observer = new IntersectionObserver(
                                    ([entry]) => {
                                        if (entry.isIntersecting) {
                                            el.play();
                                        } else {
                                            el.pause();
                                        }
                                    },
                                    {threshold: 0.5}
                                );
                                observer.observe(el);
                            }}
                            muted
                            playsInline
                            loop
                            controls
                        >
                            <source src={eventVideo} type="video/mp4"/>
                            Votre navigateur ne supporte pas la lecture de vidéos.
                        </video>
                    </div>
                    <div className="space-y-2 mt-8">
                        <h3 className="text-2xl font-bold text-hiphop-orange">Vous étiez nombreux l'année dernière</h3>
                        <h3 className="text-2xl font-bold">On vous attend encore plus nombreux cette année !</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;