import React, { useEffect, useRef, useState } from "react";
import '/src/css/history.css'; // Importez votre CSS ici

const HTMLComponent = ({ htmlContent }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.innerHTML = htmlContent;
            const scripts = containerRef.current.getElementsByTagName('script');
            Array.from(scripts).forEach(script => {
                const newScript = document.createElement('script');
                Array.from(script.attributes).forEach(attr => {
                    newScript.setAttribute(attr.name, attr.value);
                });
                newScript.textContent = script.textContent;
                script.parentNode.replaceChild(newScript, script);
            });
        }
    }, [htmlContent]);

    return <div ref={containerRef} />;
};

const Contact = () => {
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        // Charger le fichier HTML
        fetch('/src/components/sections/history.html')
            .then(response => response.text())
            .then(content => setHtmlContent(content))
            .catch(error => console.error('Error loading HTML:', error));
    }, []);

    return (
        <div>
            <HTMLComponent htmlContent={htmlContent} />
        </div>
    );
};

export default Contact;