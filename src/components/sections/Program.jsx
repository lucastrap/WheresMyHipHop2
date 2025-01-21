import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Program = () => {
    const [activeDay, setActiveDay] = useState('day1');
    const position = [43.6121, 1.4307]; // Coordonnées d'Ynov Toulouse

    const schedule = {
        day1: [
            { time: "10:00", activity: "Ouverture des portes", location: "Entrée principale" },
            { time: "10:30 - 12:30", activity: "Stage Danse Hip-Hop", location: "Studio 1" },
            { time: "10:30 - 12:30", activity: "Atelier DJ", location: "Studio Son" },
            { time: "14:00 - 16:00", activity: "Stage Rap", location: "Studio 2" },
            { time: "14:00 - 16:00", activity: "Session Graffiti", location: "Zone Street Art" },
            { time: "16:30 - 18:30", activity: "Stage Beatbox", location: "Studio 3" },
            { time: "20:00", activity: "Open Mic", location: "Scène principale" },
        ],
        day2: [
            { time: "10:00", activity: "Ouverture des portes", location: "Entrée principale" },
            { time: "11:00", activity: "Conférence : Professionnalisation dans le Hip-Hop", location: "Auditorium" },
            { time: "14:00", activity: "Battle Bonnie & Clyde 2vs2", location: "Scène principale" },
            { time: "16:00", activity: "Battle Breakdance 3vs3", location: "Scène principale" },
            { time: "18:00", activity: "Cypher final", location: "Scène principale" },
            { time: "19:00", activity: "Remise des prix", location: "Scène principale" },
        ]
    };

    const workshops = [
        {
            name: "DANSE",
            details: "Break, Popping, House Dance",
            capacity: "15 personnes max",
            level: "Tous niveaux"
        },
        {
            name: "DJ",
            details: "Mix, Scratch, Production",
            capacity: "8 personnes max",
            level: "Débutant accepté"
        },
        {
            name: "RAP",
            details: "Écriture, Flow, Recording",
            capacity: "12 personnes max",
            level: "Tous niveaux"
        },
        {
            name: "GRAFFITI",
            details: "Lettrage, Color, Design",
            capacity: "10 personnes max",
            level: "Débutant accepté"
        },
        {
            name: "BEATBOX",
            details: "Techniques vocales, sons, rythmes",
            capacity: "12 personnes max",
            level: "Tous niveaux"
        }
    ];

    return (
        <section id="program" className="bg-black text-white py-20">
            <div className="max-w-6xl mx-auto px-4">
                {/* Titre de section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Programme</h2>
                    <div className="w-24 h-1 bg-hiphop-orange mx-auto"></div>
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

                {/* Programme du jour */}
                <div className="mb-20">
                    <div className="grid gap-4">
                        {schedule[activeDay].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all"
                            >
                                <div
                                    className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div className="flex items-center gap-4">
                    <span className="text-hiphop-orange font-bold text-xl min-w-[120px]">
                      {item.time}
                    </span>
                                        <span className="font-bold text-xl">
                      {item.activity}
                    </span>
                                    </div>
                                    <span className="text-gray-400">
                    {item.location}
                  </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Infos Workshops */}
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {workshops.map((workshop, index) => (
                        <div
                            key={index}
                            className="bg-hiphop-orange/20 rounded-lg p-6 border border-hiphop-orange/30 hover:border-hiphop-orange transition-all"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-hiphop-orange">
                                {workshop.name}
                            </h3>
                            <div className="space-y-2 text-gray-300">
                                <p>{workshop.details}</p>
                                <p>{workshop.capacity}</p>
                                <p>{workshop.level}</p>
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
                            <div className="h-[400px] md:h-[400px] rounded-lg overflow-hidden">
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