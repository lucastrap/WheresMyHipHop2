import { useState, useEffect } from 'react';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [isChangingFilter, setIsChangingFilter] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const handleFilterChange = (category) => {
        if (category !== selectedFilter) {  // Ne déclencher que si c'est un changement réel
            setIsChangingFilter(true);
            setTimeout(() => {
                setSelectedFilter(category);
                setTimeout(() => {
                    setIsChangingFilter(false);
                }, 500);  // Plus long pour laisser le temps aux images de se positionner
            }, 300);
        }
    };

    // Fonction pour extraire le nom de fichier sans extension
    const getFilenameWithoutExtension = (path) => {
        const filename = path.split('/').pop();
        return filename.split('.')[0];
    };

    useEffect(() => {
        const loadImages = async () => {
            setIsLoading(true);
            
            try {
                // Définir les années et jours disponibles
                const directories = [
                    { year: "2024", day: "1" },
                    { year: "2024", day: "2" }
                    // Ajoutez d'autres années/jours au besoin
                ];
                
                const loadedImages = [];
                let id = 1;
                
                // Pour chaque répertoire, récupérer la liste des images
                for (const dir of directories) {
                    const { year, day } = dir;
                    const dirUrl = `https://whereismyhiphop.fr/WEB_CODE/gallery/${year}_jour_${day}/`;
                    
                    // Essayer de charger la page d'index du répertoire
                    const response = await fetch(dirUrl);
                    const html = await response.text();
                    
                    // Utiliser une expression régulière pour extraire les noms de fichiers d'images
                    const regex = /href="([^"]+\.(jpg|jpeg|png))"/gi;
                    let match;
                    
                    while ((match = regex.exec(html)) !== null) {
                        const imageFilename = match[1];
                        const imageUrl = `${dirUrl}${imageFilename}`;
                        
                        loadedImages.push({
                            id: id++,
                            url: imageUrl,
                            year: year,
                            day: parseInt(day),
                            category: `${year} - Jour ${day}`,
                            description: getFilenameWithoutExtension(imageFilename).replace(/-/g, ' ')
                        });
                    }
                }
                
                loadedImages.sort((a, b) => {
                    if (a.year !== b.year) return b.year - a.year;
                    return a.day - b.day;
                });
                
                setImages(loadedImages);
                if (loadedImages.length > 0) {
                    setSelectedFilter(loadedImages[0].category);
                }
            } catch (error) {
                console.error("Erreur lors du chargement des images:", error);
            } finally {
                // Petit délai pour s'assurer que les images commencent à charger
                setTimeout(() => {
                    setIsLoading(false);
                }, 300);
            }
        };
        
        loadImages();
    }, []);

    const categories = [...new Set(images.map(img => img.category))];
    const filteredImages = images.filter(img => img.category === selectedFilter);

    return (
        <div className="min-h-screen bg-black text-white py-20">
            <div className="max-w-7xl mx-auto px-4">
                {/* En-tête de la galerie */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-6">Galerie Photo</h1>
                    <div className="w-24 h-1 bg-hiphop-orange mx-auto mb-8"></div>

                    {/* Filtres */}
                    <div className="flex justify-center gap-4 flex-wrap mb-8">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleFilterChange(category)}
                                className={`px-6 py-2 rounded-lg transition-all ${
                                    selectedFilter === category
                                        ? 'bg-hiphop-orange text-white'
                                        : 'bg-white/10 hover:bg-white/20'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* État de chargement */}
                {isLoading ? (
                    <div className="min-h-[50vh] flex items-center justify-center">
                        <div className="text-hiphop-orange text-4xl">Chargement...</div>
                    </div>
                ) : (
                    <div className="min-h-screen overflow-hidden pb-20">
                        <div
                            className={`columns-2 md:columns-2 lg:columns-3 gap-4 break-inside-avoid transition-opacity duration-700 ${
                                isLoading || isChangingFilter ? 'opacity-0' : 'opacity-100'
                            }`}
                        >
                            {filteredImages.map((image) => (
                                <div
                                    key={image.id}
                                    className="relative mb-4 group cursor-pointer break-inside-avoid"
                                    onClick={() => setSelectedImage(image)}
                                    style={{
                                        visibility: isChangingFilter ? 'hidden' : 'visible',
                                        opacity: isChangingFilter ? 0 : 1,
                                        transition: 'opacity 0.3s ease-in-out'
                                    }}
                                >
                                    <img
                                        src={image.url}
                                        alt={image.description}
                                        className="w-full rounded-lg"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Modal avec navigation */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
                            <button
                                className="absolute top-4 right-4 text-white text-xl hover:text-hiphop-orange z-50 bg-black/50 p-4 rounded-full"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImage(null);
                                }}
                            >
                                ✕
                            </button>

                            <button
                                className="fixed left-0 top-1/2 -translate-y-1/2 w-24 h-24 flex items-center justify-center text-white hover:text-hiphop-orange transition-colors bg-black/50 hover:bg-black/70 z-50"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
                                    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
                                    setSelectedImage(filteredImages[prevIndex]);
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <img
                                src={selectedImage.url}
                                alt={selectedImage.description}
                                className="max-w-[80vw] max-h-[90vh] object-contain"
                                onClick={e => e.stopPropagation()}
                            />

                            <button
                                className="fixed right-0 top-1/2 -translate-y-1/2 w-24 h-24 flex items-center justify-center text-white hover:text-hiphop-orange transition-colors bg-black/50 hover:bg-black/70 z-50"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
                                    const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
                                    setSelectedImage(filteredImages[nextIndex]);
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gallery;