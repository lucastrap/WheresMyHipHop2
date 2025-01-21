import React from 'react';

const LegalNotice = () => {
    return (
        <div className="min-h-screen bg-black text-white py-20">
            <div className="max-w-5xl mx-auto px-6">
                {/* En-tête */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold mb-6">Mentions Légales</h1>
                    <div className="w-28 h-1 bg-hiphop-orange mx-auto"></div>
                </div>

                {/* Contenu */}
                <div className="space-y-10">
                    {/* Conteneur pour chaque section avec background */}
                    <div className="bg-hiphop-orange/10 p-8 rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold mb-4 text-hiphop-orange">1. Présentation de l'association</h2>
                        <p className="text-lg leading-relaxed mb-4">
                            <span className="font-semibold">Nom de l'association :</span> Sound Workerz<br />
                            <span className="font-semibold">Contact :</span> soundworkerz@gmail.com
                        </p>
                        <p className="text-lg leading-relaxed">
                            Sound Workerz est une association à but non lucratif dédiée à la promotion
                            de la culture HipHop et à l'organisation de cours et d'événements visant
                            à soutenir les acteurs culturels et à sensibiliser le public à la diversité
                            de la musique HipHop.
                        </p>
                    </div>

                    <div className="bg-hiphop-orange/10 p-8 rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold mb-4 text-hiphop-orange">2. Protection des données personnelles</h2>
                        <p className="text-lg leading-relaxed mb-4">
                            Conformément au Règlement Général sur la Protection des Données (RGPD) et à
                            la loi "Informatique et Libertés" du 6 janvier 1978 modifiée, vous disposez
                            d'un droit d'accès, de rectification et de suppression des données vous concernant.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Pour exercer ces droits ou pour toute question, vous pouvez nous contacter à
                            l'adresse : <a href="mailto:soundworkerz@gmail.com" className="text-hiphop-orange underline">soundworkerz@gmail.com</a>
                        </p>
                    </div>

                    <div className="bg-hiphop-orange/10 p-8 rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold mb-4 text-hiphop-orange">3. Propriété intellectuelle</h2>
                        <p className="text-lg leading-relaxed">
                            Tous les contenus présents sur le site de Sound Workerz, y compris les textes,
                            les images, les vidéos, et autres éléments multimédias, sont protégés par les
                            lois sur le droit d'auteur et demeurent la propriété exclusive de l'association
                            ou de ses partenaires. Toute reproduction ou utilisation non autorisée de ces
                            contenus est strictement interdite et peut entraîner des sanctions légales.
                        </p>
                    </div>

                    <div className="bg-hiphop-orange/10 p-8 rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold mb-4 text-hiphop-orange">4. Utilisation des cookies</h2>
                        <p className="text-lg leading-relaxed">
                            Ce site utilise des cookies à des fins techniques uniquement. Ces cookies sont
                            nécessaires au bon fonctionnement du site et ne collectent aucune donnée
                            personnelle. En utilisant notre site, vous acceptez l'utilisation de ces cookies essentiels.
                        </p>
                    </div>

                    <div className="bg-hiphop-orange/10 p-8 rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold mb-4 text-hiphop-orange">5. Liens vers d'autres sites</h2>
                        <p className="text-lg leading-relaxed">
                            Le site de Sound Workerz peut contenir des liens vers d'autres sites web gérés
                            par des tiers. Sound Workerz décline toute responsabilité quant au contenu ou
                            aux pratiques de confidentialité de ces sites externes. L'inclusion de ces liens
                            ne constitue pas une approbation de leur contenu par Sound Workerz.
                        </p>
                    </div>

                    <div className="bg-hiphop-orange/10 p-8 rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold mb-4 text-hiphop-orange">6. Loi applicable</h2>
                        <p className="text-lg leading-relaxed">
                            Tout litige relatif au site de Sound Workerz est soumis à la loi française.
                            En cas de litige, la compétence exclusive est attribuée aux tribunaux de Toulouse.
                            Les parties s'engagent à rechercher une résolution amiable préalablement à toute
                            action judiciaire.
                        </p>
                    </div>

                    <div className="bg-hiphop-orange/10 p-8 rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold mb-4 text-hiphop-orange">7. Modifications</h2>
                        <p className="text-lg leading-relaxed">
                            Sound Workerz se réserve le droit de modifier à tout moment les présentes mentions
                            légales. Les utilisateurs sont invités à consulter régulièrement cette page pour
                            prendre connaissance des éventuelles mises à jour. L'utilisation continue du site
                            après la publication des modifications constitue une acceptation de ces dernières.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegalNotice;
