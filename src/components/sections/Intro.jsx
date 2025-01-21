import React from 'react';
import eventVideo from '../../assets/videos/event-2024.mp4';

const Intro = () => {
    return (
        <section id="intro" className="bg-black text-white py-20">
            <div className="max-w-6xl mx-auto px-4">
                {/* En-tête de section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-hiphop-orange mb-6">
                        L'événement Hip-Hop de l'année à Toulouse
                    </h2>
                    <div className="w-24 h-1 bg-hiphop-orange mx-auto"></div>
                </div>

                {/* Présentation principale */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-6">
                        <p className="text-xl md:text-2xl leading-relaxed">
                            Where is my HipHop est bien plus qu'un événement : c'est une célébration
                            vivante de la culture hip-hop sous toutes ses formes, parrainée par Pone,
                            producteur iconique de la Fonky Family.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-300">
                            Plongez dans un univers où la danse, le rap, le graffiti et le beatbox
                            se rencontrent pour créer une expérience unique au cœur de Toulouse.
                        </p>
                    </div>
                    <div className="bg-hiphop-orange/10 rounded-lg p-8 space-y-4">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-4xl font-bold text-hiphop-orange">300+</span>
                            <span className="text-lg">participants lors de l'édition 2024</span>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-4">
                                <span className="text-hiphop-orange">✓</span>
                                <span>18 intervenants professionnels</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-hiphop-orange">✓</span>
                                <span>Des stages et battles de danse</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-hiphop-orange">✓</span>
                                <span>Ateliers rap, graffiti, et beatbox</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-hiphop-orange">✓</span>
                                <span>Conférences sur la professionnalisation</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Points clés */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-black/50 p-6 rounded-lg border border-hiphop-orange/30 hover:border-hiphop-orange transition-colors">
                        <h3 className="text-xl font-bold mb-4 text-hiphop-orange">Pour Tous les Niveaux</h3>
                        <p className="text-gray-300">
                            Des débutants aux experts, chacun trouve sa place dans nos ateliers
                            et stages adaptés à tous les niveaux.
                        </p>
                    </div>
                    <div className="bg-black/50 p-6 rounded-lg border border-hiphop-orange/30 hover:border-hiphop-orange transition-colors">
                        <h3 className="text-xl font-bold mb-4 text-hiphop-orange">Apprentissage & Partage</h3>
                        <p className="text-gray-300">
                            Apprenez auprès de professionnels passionnés et partagez votre amour
                            pour la culture hip-hop.
                        </p>
                    </div>
                    <div className="bg-black/50 p-6 rounded-lg border border-hiphop-orange/30 hover:border-hiphop-orange transition-colors">
                        <h3 className="text-xl font-bold mb-4 text-hiphop-orange">Rencontres & Opportunités</h3>
                        <p className="text-gray-300">
                            Créez des connexions, découvrez des opportunités et intégrez
                            la communauté hip-hop toulousaine.
                        </p>
                    </div>
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
                    <h3 className="text-2xl font-bold mt-8">Vous étiez nombreux l'année dernière</h3>
                    <h3 className="text-2xl font-bold">On vous attend encore plus nombreux cette année !</h3>
                </div>
            </div>
        </section>
    );
};

export default Intro;