import React, { useEffect, useRef } from "react";
// Utiliser un chemin relatif pour l'import CSS
import '/src/css/history.css';

const History = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            // Injecter le HTML
            containerRef.current.innerHTML = `
                <section id="history" class="history_section">
                    <div class="text-center">
                        <h2 class="text-4xl md:text-5xl font-bold text-hiphop-orange mb-6">
                            Notre Histoire
                        </h2>
                        <div class="w-24 h-1 bg-hiphop-orange mx-auto"></div>
                    </div>
                   
                    <div class="histoirebody">
                        <div class="containerhistory">
                            <div class="clip clip1">
                                <div class="section-word">CULTURE</div>
                                <div class="content">
                                    <h2 class="history_h2">CULTURE</h2>
                                    <p class="history_p">
                                        Depuis sa création, cette culture universelle et sans frontières a profondément influencé le monde.
                                        Elle résonne en chacun de nous, quelle que soit la manière dont nous l'exprimons. Aujourd'hui, le HipHop
                                        ne cesse de s'ouvrir, d'évoluer et d'embrasser de nouveaux styles et pratiques.
                                    </p>
                                </div>
                            </div>
                            <div class="clip clip2">
                                <div class="section-word">MY HIPHOP</div>
                                <div class="content">
                                    <h2 class="history_h2">MY HIPHOP</h2>
                                    <p class="history_p">
                                        L'événement <strong>WHERE'S MY HIPHOP</strong> célèbre une culture riche et diversifiée.
                                        Il met à l'honneur les valeurs fondamentales du HipHop : partage, transmission et respect, à travers des activités variées.
                                    </p>

                                </div>
                            </div>
                            <div class="clip clip3">
                                <div class="section-word">FONDEMENTS</div>
                                <div class="content">
                                    <h2 class="history_h2" >FONDEMENTS</h2>
                                    <p class="history_p">
                                        Un point d'honneur sera accordé à l'inclusivité, ainsi qu'à la mixité, dans le sens où les intervenants représenteront l'ouverture fondamentale du HipHop sur la féminité, le handicap, l'âge ou la couleur de peau.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `;

            // Fonction pour initialiser l'interactivité
            const initializeClips = () => {
                // Sélectionner tous les clips
                const clips = containerRef.current.querySelectorAll('.clip');

                // Déterminer si on est sur mobile
                const isMobile = window.innerWidth <= 768;

                // Fonction pour gérer le clic sur un clip
                const handleClipClick = function(e) {
                    e.preventDefault(); // Empêche les comportements par défaut

                    // Si le clip cliqué est déjà actif
                    if (this.classList.contains('active')) {
                        // Retirer la classe active
                        this.classList.remove('active');
                    } else {
                        // Retirer la classe active de tous les clips
                        clips.forEach(c => c.classList.remove('active'));
                        // Ajouter la classe active au clip cliqué
                        this.classList.add('active');
                    }
                };

                // Supprimer d'abord tous les écouteurs d'événements existants (pour éviter les doublons)
                clips.forEach(clip => {
                    const newClip = clip.cloneNode(true);
                    clip.parentNode.replaceChild(newClip, clip);
                });

                // Ajouter les nouveaux écouteurs d'événements
                const updatedClips = containerRef.current.querySelectorAll('.clip');
                updatedClips.forEach(clip => {
                    // Utiliser touchstart et touchend pour mobile
                    if (isMobile) {
                        clip.addEventListener('touchend', function(e) {
                            e.preventDefault();
                            handleClipClick.call(this, e);
                        }, { passive: false });
                    }

                    // Conserver le clic pour tous les dispositifs
                    clip.addEventListener('click', handleClipClick);
                });

                // Ajouter un gestionnaire pour fermer les clips actifs en touchant ailleurs
                if (isMobile) {
                    const historySection = containerRef.current.querySelector('.history_section');
                    historySection.addEventListener('touchend', function(e) {
                        // Si le clic est directement sur la section et non sur un clip
                        if (e.target === historySection || e.target.classList.contains('histoirebody')) {
                            clips.forEach(c => c.classList.remove('active'));
                        }
                    }, { passive: false });
                }
            };

            // Initialiser les clips
            initializeClips();

            // Réinitialiser en cas de redimensionnement
            const handleResize = () => {
                initializeClips();
            };

            window.addEventListener('resize', handleResize);

            // Fonction de nettoyage pour le démontage du composant
            return () => {
                window.removeEventListener('resize', handleResize);
                // Nettoyer tous les écouteurs d'événements
                const clips = containerRef.current?.querySelectorAll('.clip');
                if (clips) {
                    clips.forEach(clip => {
                        clip.replaceWith(clip.cloneNode(true));
                    });
                }
            };
        }
    }, []);

    return <div ref={containerRef} />;
};

export default History;