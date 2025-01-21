import React, { useState, useEffect } from 'react';

import IMG1 from '../../../public/gallery/2024 jour 1/out-WIMHH-02.jpg';
import IMG2 from '../../../public/gallery/2024 jour 1/out-WIMHH-47.jpg';
import IMG3 from '../../../public/gallery/2024 jour 1/out-WIMHH-52.jpg';
import IMG4 from '../../../public/gallery/2024 jour 1/out-WIMHH-15.jpg';

const AboutSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const texts = [
        {
            text: "L'événement WHERE'S MY HIPHOP est porté par l'association loi 1901 nommée Sound Workerz. Déclarée officiellement en janvier 2024, cette entité a pour objectif de promouvoir la culture urbaine et plus précisément, la culture HipHop.",
            highlight: "SOUND WORKERZ",
            icon: "🎵",
            bgImage: IMG1
        },
        {
            text: "Par ailleurs, l'une de ses principales priorités est l'inclusion. L'association propose des animations ouvertes à tous, jusqu'à l'invitation des populations issues de QPV. La raison étant de donner accès à tout un chacun, aux différentes ressources mises en place.",
            highlight: "INCLUSION",
            icon: "🤝",
            bgImage: IMG2
        },
        {
            text: "Sound Workerz souhaite unifier et offrir un tremplin à chaque acteur HipHop local. Le travail avec des partenaires lui est familier, principalement pour l'organisation de stage, battle, conférence, exposition, et bien encore.",
            highlight: "AMBITION",
            icon: "🚀",
            bgImage: IMG3
        },
        {
            text: "Les valeurs qui pousse l'association à son accomplissement sont le respect, la mixité et la bienveillance.",
            highlight: "VALEURS",
            icon: "💫",
            bgImage: IMG4
        }
    ];

    return (
        <section id="about" className="bg-black text-white py-20">
            <div className="max-w-6xl mx-auto px-4">
                {/* En-tête de section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-hiphop-orange mb-6">
                        À PROPOS
                    </h2>
                    <div className="w-24 h-1 bg-hiphop-orange mx-auto"></div>
                </div>

                {/* Grille des cartes */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {texts.map((item, index) => (
                        <div
                            key={index}
                            className={`transform transition-all duration-500 opacity-0 translate-y-4 ${
                                isVisible ? 'opacity-100 translate-y-0' : ''
                            }`}
                            style={{
                                transitionDelay: `${index * 200}ms`
                            }}
                        >
                            <div className="relative h-full rounded-lg border border-hiphop-orange/30 hover:border-hiphop-orange transition-all duration-300 group flex flex-col overflow-hidden">
                                {/* Image de fond */}
                                <img
                                    src={item.bgImage}
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/70" />

                                <div className="relative p-6 flex flex-col h-full z-10">
                                    {/* Icône avec cercle lumineux */}
                                    <div className="relative mb-6">
                                        <div className="absolute -top-2 -left-2 w-16 h-16 bg-hiphop-orange/20 rounded-full blur-xl group-hover:bg-hiphop-orange/30 transition-all duration-300"/>
                                        <span className="relative text-4xl block mb-4">{item.icon}</span>
                                    </div>

                                    {/* Titre avec soulignement animé */}
                                    <div className="relative mb-4">
                                        <h3 className="text-xl font-bold text-hiphop-orange">
                                            {item.highlight}
                                        </h3>
                                        <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-hiphop-orange group-hover:w-full transition-all duration-500"/>
                                    </div>

                                    {/* Texte */}
                                    <div className="flex-grow">
                                        <p className="text-gray-200 text-base leading-relaxed">
                                            {item.text}
                                        </p>
                                    </div>

                                    {/* Élément décoratif coin supérieur droit */}
                                    <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                                        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-hiphop-orange/30 group-hover:border-hiphop-orange transition-colors duration-300"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Message final */}
                <div className="text-center mt-16">
                    <h3 className="text-2xl font-bold text-hiphop-orange">
                        Rejoignez l'aventure Sound Workerz
                    </h3>
                    <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                        Ensemble, continuons à faire vibrer la culture Hip-Hop à Toulouse !
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;