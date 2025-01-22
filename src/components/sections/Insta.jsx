import React, { useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';

const InstagramSection = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const ACCESS_TOKEN = 'IGAAIa1yZCin7NBZAE9fVVBtRG5QR2hFSFpBWGstM1NHUFJHLUdrZAzNlNDBKZAGY4UzJYWDQ4SkdOdlNjY0I2Wll0dDQtNzA4Tm96aXdldGhCOEFvSXRIb0NVaEtMSXJzc0tSSlJCTkxUVTg0bFJwTlJtOFZAORGpfekVHazhlSlcySQZDZD';
    const INSTAGRAM_USERNAME = 'whereismyhiphop';

    useEffect(() => {
        const fetchInstagramPosts = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(
                    `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${ACCESS_TOKEN}`
                );
                const data = await response.json();

                if (data.error) {
                    throw new Error(data.error.message);
                }

                setPosts(data.data.slice(0, 6));
            } catch (err) {
                setError(err.message);
                console.error('Error fetching Instagram posts:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchInstagramPosts();
    }, []);

    if (error) {
        return (
            <div className="p-4 text-red-600 text-center text-sm">
                Une erreur s'est produite lors du chargement des posts Instagram.
            </div>
        );
    }

    return (
        <section className="w-full py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold flex items-center justify-center gap-2 mb-2">
                        SUIVEZ-NOUS SUR INSTAGRAM
                        <Instagram size={28} style={{ color: '#fb1c04' }} />
                    </h2>
                    <div className="w-16 h-0.5 bg-[#fb1c04] mx-auto" />
                </div>

                <div className="relative">
                    <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {isLoading ? (
                            Array(6).fill(0).map((_, index) => (
                                <div
                                    key={`skeleton-${index}`}
                                    className="aspect-square bg-gray-100 animate-pulse rounded-lg"
                                />
                            ))
                        ) : (
                            posts.map(post => (
                                <a
                                    key={post.id}
                                    href={post.permalink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block relative aspect-square group overflow-hidden rounded-lg shadow-sm hover:shadow transition-shadow duration-300"
                                >
                                    <img
                                        src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
                                        alt={post.caption || 'Instagram post'}
                                        className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-sm font-medium px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm">
                        Voir sur Instagram
                      </span>
                                        </div>
                                    </div>
                                </a>
                            ))
                        )}
                    </div>

                    <div className="mt-8 mb-24 text-center">
                        <a
                            href={`https://www.instagram.com/${INSTAGRAM_USERNAME}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow"
                            style={{ backgroundColor: '#fb1c04' }}
                        >
                            @{INSTAGRAM_USERNAME}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstagramSection;