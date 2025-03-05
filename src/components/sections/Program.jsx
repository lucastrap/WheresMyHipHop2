import { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';

const Program = () => {
    const [activeDay, setActiveDay] = useState('day1');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const schedule = {
        day1: [
            { time: "13:00 - 14:30", activity: "STAGE - Beatbox avec Kenôzen", location: "Ynov" },
            { time: "13:00 - 14:30", activity: "STAGE - Graffiti avec Claks", location: "Ynov" },
            { time: "14:30 - 16:30", activity: "STAGE - DJing avec Davyd Vener", location: "Ynov" },
            { time: "15:00 - 16:00", activity: "STAGE - HipHop avec Tito", location: "Ynov" },
            { time: "15:00 - 20:00", activity: "STAND - Textile, Custom, Radio, Créatif", location: "Ynov" },
            { time: "16:00 - 17:30", activity: "STAGE - Rap avec Sense ou Lu'K", location: "Ynov" },
            { time: "16:00 - 17:00", activity: "STAGE - Breaking avec Keyz", location: "Ynov" },
            { time: "19:00 - 22:00", activity: "OPEN MIC - animé par Lu'K", location: "Ynov" },
        ],
        day2: [
            { time: "10:00 - 11:00", activity: "STAGE - Waacking avec Mina", location: "Ynov" },
            { time: "11:00 - 12:30", activity: "CONFÉRENCE - La mixité au sein du HipHop par Manon Brunel", location: "Ynov" },
            { time: "13:00 - 15:00", activity: "BATTLE - Bonnie and Clyde HipHop", location: "Ynov" },
            { time: "15:00 - 17:00", activity: "BATTLE - Where's My Crew Breaking", location: "Ynov" },
            { time: "17:00 - 18:00", activity: "BATTLE - Cypher King et Queen", location: "Ynov" },
            { time: "18:00 - 20:00", activity: "JAM", location: "Ynov" },
        ]
    };

    const workshops = [
        {
            name: "DANSE",
            details: "Break, Popping, House Dance",
            capacity: "15 personnes max",
            level: "Tous niveaux",
            icon: "💃"
        },
        {
            name: "DJ",
            details: "Mix, Scratch, Production",
            capacity: "8 personnes max",
            level: "Débutant accepté",
            icon: "🎧"
        },
        {
            name: "RAP",
            details: "Écriture, Flow, Recording",
            capacity: "12 personnes max",
            level: "Tous niveaux",
            icon: "🎤"
        },
        {
            name: "GRAFFITI",
            details: "Lettrage, Color, Design",
            capacity: "10 personnes max",
            level: "Débutant accepté",
            icon: "🎨"
        },
        {
            name: "BEATBOX",
            details: "Techniques vocales, sons, rythmes",
            capacity: "12 personnes max",
            level: "Tous niveaux",
            icon: "🎵"
        }
    ];

    return (
        <section id="program" className="bg-black text-white py-20">
            <div className="max-w-6xl mx-auto px-4">
                {/* Titre de section avec animation */}
                <div className={`text-center mb-16 transform transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-hiphop-orange mb-6 relative">
                        Programmation
                        <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-hiphop-orange/30"/>
                        <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-hiphop-orange/30"/>
                    </h2>
                    <div className="w-24 h-1 bg-hiphop-orange mx-auto relative">
                        <div className="absolute -left-2 -top-2 w-4 h-4 bg-hiphop-orange/20 rounded-full blur-lg"/>
                    </div>
                </div>

                {/* Sélecteur de jour */}
                <div className="flex justify-center gap-4 mb-12">
                    <button
                        onClick={() => setActiveDay('day1')}
                        className={`px-6 py-3 rounded-lg font-bold transition-all ${
                            activeDay === 'day1'
                                ? 'bg-hiphop-orange text-white'
                                : 'bg-white/10 hover:bg-white/20'
                        }`}
                    >
                        SAMEDI
                    </button>
                    <button
                        onClick={() => setActiveDay('day2')}
                        className={`px-6 py-3 rounded-lg font-bold transition-all ${
                            activeDay === 'day2'
                                ? 'bg-hiphop-orange text-white'
                                : 'bg-white/10 hover:bg-white/20'
                        }`}
                    >
                        DIMANCHE
                    </button>
                </div>

                {/* Programme du jour avec animation */}
                <div className="mb-20">
                    <div className="grid gap-4">
                        {schedule[activeDay].map((item, index) => (
                            <div
                                key={index}
                                className={`bg-gradient-to-r from-white/5 to-white/10 rounded-lg p-6 transform transition-all duration-100 relative group overflow-hidden ${
                                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                                }`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-hiphop-orange/0 via-hiphop-orange/5 to-hiphop-orange/0 opacity-0 group-hover:opacity-100 transition-opacity duration-100"/>

                                <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div className="flex items-center gap-4">
                                        <span className="text-hiphop-orange font-bold text-md md:text-xl min-w-[120px]">
                                            {item.time}
                                        </span>
                                        <span className="font-bold md:text-xl group-hover:text-hiphop-orange transition-colors duration-100">
                                            {item.activity}
                                        </span>
                                    </div>
                                    <span className="text-gray-400 group-hover:text-white transition-colors duration-100 -mt-5">
                                        {item.location}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Workshops avec animation */}
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
                    {workshops.map((workshop, index) => (
                        <div
                            key={index}
                            className={`bg-gradient-to-br from-black via-black/90 to-hiphop-orange/10 rounded-lg p-6 border border-hiphop-orange/30 transform transition-all duration-500 group relative overflow-hidden
                                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                                ${index === 2 ? 'col-span-2 md:col-span-1' : ''}`
                            }
                            style={{ transitionDelay: `${600 + index * 100}ms` }}
                        >
                            {/* Effet de gradient au hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-hiphop-orange/0 via-hiphop-orange/5 to-hiphop-orange/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>

                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="md:text-2xl group-hover:scale-125 transition-transform duration-300">
                                        {workshop.icon}
                                    </span>
                                    <h3 className="md:text-2xl font-bold text-hiphop-orange relative inline-block">
                                        {workshop.name}
                                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-hiphop-orange group-hover:w-full transition-all duration-500"/>
                                    </h3>
                                </div>
                                <div className="space-y-2 text-gray-300">
                                    <p className="text-white transition-colors duration-300">{workshop.details}</p>
                                    <li className="marker:text-hiphop-orange text-sm">{workshop.capacity}</li>
                                    <li className="marker:text-hiphop-orange text-sm">{workshop.level}</li>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <h3 className="text-2xl font-bold mb-4 text-white">LIEU DE L'ÉVÉNEMENT</h3>

                    <div
                        className="bg-gray-900 rounded-lg p-8 inline-block max-w-2xl w-full shadow-xl border border-gray-800">
                        {/* Location Header */}
                        <div className="flex items-center justify-center mb-6">
                            <MapPin className="w-6 h-6 text-hiphop-orange mr-2"/>
                            <p className="text-xl font-semibold text-white">Toulouse Ynov Campus</p>
                        </div>

                        {/* Address */}
                        <p className="text-gray-300 mb-6">2 Place de l'Europe, 31000 Toulouse</p>

                        {/* Interactive Map */}
                        {/* Carte Google Maps */}
                        <div className="w-full md:w4/3">
                            <div className="h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5779.676011254147!2d1.4285343766459877!3d43.61172197117634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebdbb42d83293%3A0x6e448c24640106bd!2sToulouse%20Ynov%20Campus!5e0!3m2!1sfr!2sfr"
                                    width="100%"
                                    height="100%"
                                    className="border-0"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>

                        {/* Transport Options */}
                        <div className="text-left text-sm text-gray-300 mt-5">
                            <p className="mb-2">🚇 Métro : Ligne B - Station Compans-Caffarelli</p>
                            <p className="mb-2">🚌 Bus : Lignes 14, 45 - Arrêt Leclerc</p>
                            <p>🚗 Parking Indigo Place De L'Europe (à 50m)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Program;