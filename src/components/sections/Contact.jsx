import React, { useEffect, useRef } from "react";
// Imports relatifs avec des chemins corrects
import '../../css/contact.css';
import '../../css/style.css';

import LOGO_SOUNDWORKERZ from '../../assets/images/logo_SoundWorkerz.png';
import LOGO_HOPUS from '../../assets/images/logo_hopus.png';
import LOGO_YNOV_CAMPUS from '../../assets/images/logo_ynov_campus_toulouse.png';
import LOGO_EIGHT_BALL from '../../assets/images/logo_eight_ball.jpg';
import LOGO_ALPHAB from '../../assets/images/logo_alphab.png';
import LOGO_EDLS from '../../assets/images/logo_edls.jpg';
import LOGO_REGION from '../../assets/images/Médaillon lauréat Bpart Occitanie.jpg';
import LOGO_BOOSTER from '../../assets/images/Logo_BoosterFM.png';


// Importer directement le HTML comme une chaîne de caractères
// Nécessite d'ajouter un plugin Vite ou de copier le HTML dans un fichier JS
const contactHTML = `
<!-- Contact Section-->
<section id="contact_section">
    <div class="contact_container">
        <div class="contact_us_container">
            <p class="contact_text">CONTACTEZ NOUS</p>
            <div class="alert alert-success" id="successMessage">
                Votre message a été envoyé avec succès !
            </div>
            <div class="alert alert-error" id="errorMessage">
                Une erreur s'est produite. Veuillez réessayer.
            </div>

            <form id="contactForm" action="https://formspree.io/f/xlddqyww" method="POST">
                <div class="form-group">
                    <input class="input_textarea" type="email" id="email" name="email" placeholder="Votre email *" required>
                    <div class="error" id="emailError" >Veuillez entrer une adresse email valide</div>
                </div>

                <div class="form-group">
                    <input class="input_textarea" type="text" id="subject" name="subject" placeholder="Sujet *" required>
                    <div class="error" id="subjectError">Veuillez entrer un sujet</div>
                </div>

                <div class="form-group">
                    <textarea class="input_textarea textarea" id="message" name="message" placeholder="Votre message *" required></textarea>
                    <div class="error" id="messageError">Veuillez entrer votre message</div>
                </div>

                <button class="button" type="submit">Envoyer <span class="button-arrow">→</span></button>
                <div class="loading" id="loading">Envoi en cours...</div>
            </form>
        </div>
        <div class="contact_partnership_container">
            <p class="contact_text"> NOS PARTENAIRES</p>
            <div class="contact_partnership_logo_container">
            <img class="contact_logo_partnership" src="${LOGO_SOUNDWORKERZ}" alt="Logo SoundWorkerz">
            <img class="contact_logo_partnership" src="${LOGO_HOPUS}" alt="Logo Hopus">
            <img class="contact_logo_partnership" src="${LOGO_YNOV_CAMPUS}" alt="Logo Ynov Campus">
            <img class="contact_logo_partnership" src="${LOGO_EDLS}" alt="Logo EDLS">
            <img class="contact_logo_partnership" src="${LOGO_REGION}" alt="Logo EDLS">            
            <img class="contact_logo_partnership" src="${LOGO_BOOSTER}" alt="Logo EDLS">       
            <img class="contact_logo_partnership" src="${LOGO_EIGHT_BALL}" alt="Logo Eight Ball">
            <img class="contact_logo_partnership" src="${LOGO_ALPHAB}" alt="Logo Alphab">     
            </div>
        </div>
    </div>
</section>
`;

const Contact = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            // Injecter le HTML
            containerRef.current.innerHTML = contactHTML;

            // Exécuter les scripts
            const scripts = containerRef.current.getElementsByTagName('script');
            Array.from(scripts).forEach(script => {
                const newScript = document.createElement('script');
                Array.from(script.attributes).forEach(attr => {
                    newScript.setAttribute(attr.name, attr.value);
                });
                newScript.textContent = script.textContent;
                script.parentNode.replaceChild(newScript, script);
            });

            // Ajouter manuellement le script qui était dans le HTML
            const initScript = document.createElement('script');
            initScript.textContent = `
                const form = document.getElementById('contactForm');
                const successMessage = document.getElementById('successMessage');
                const errorMessage = document.getElementById('errorMessage');
                const loading = document.getElementById('loading');
                const sujet = document.getElementById('subject');
                const messageField = document.getElementById('message');

                // Ajout du compteur de caractères
                const charCountDiv = document.createElement('div');
                charCountDiv.className = 'char-count';
                charCountDiv.id = 'charCount';
                messageField.parentNode.appendChild(charCountDiv);

                function updateCharCount() {
                    const count = messageField.value.length;
                    charCountDiv.textContent = \`\${count} / 1000\`;
                    charCountDiv.style.color = count > 900 ? '#fb1c04' : '#666';
                    charCountDiv.style.fontWeight = count > 900 ? 'bold' : 'normal';
                    charCountDiv.style.marginLeft = '20px';
                    if (count > 1000) {
                        charCountDiv.style.color = '#d81803';
                    }
                }

                function isValidEmail(email) {
                    const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
                    return re.test(email);
                }

                function showError(fieldId, show) {
                    const errorElement = document.getElementById(fieldId + 'Error');
                    if (errorElement) {
                        errorElement.style.display = show ? 'block' : 'none';
                    }
                }

                function validateField(field) {
                    let isValid = true;
                    if (field.id === 'email') {
                        isValid = isValidEmail(field.value);
                    } else if (field.id === 'message') {
                        isValid = field.value.trim() !== '' && field.value.length <= 1000;
                        if (!isValid) {
                            const errorElement = document.getElementById('messageError');
                            if (errorElement) {
                                errorElement.textContent = field.value.length > 1000
                                    ? '1000 caractères maximum autorisés'
                                    : 'Veuillez entrer votre message';
                            }
                        }
                    } else {
                        isValid = field.value.trim() !== '';
                    }
                    showError(field.id, !isValid);
                    return isValid;
                }

                // Ajout de l'événement input pour le compteur de caractères
                messageField.addEventListener('input', updateCharCount);

                ['email', 'subject', 'message'].forEach(fieldId => {
                    const field = document.getElementById(fieldId);
                    if (field) {
                        field.addEventListener('blur', () => validateField(field));
                        field.addEventListener('input', () => {
                            if (field.value.trim() !== '') {
                                showError(field.id, false);
                            }
                            if (field.id === 'message') {
                                updateCharCount();
                            }
                        });
                    }
                });

                form.addEventListener('submit', async function(event) {
                    event.preventDefault();

                    let isValid = true;
                    ['email', 'subject', 'message'].forEach(fieldId => {
                        const field = document.getElementById(fieldId);
                        if (field && !validateField(field)) {
                            isValid = false;
                        }
                    });

                    if (!isValid) {
                        return;
                    }

                    successMessage.style.display = 'none';
                    errorMessage.style.display = 'none';
                    loading.style.display = 'block';

                    try {
                        const response = await fetch(form.action, {
                            method: 'POST',
                            body: new FormData(form),
                            headers: {
                                'Accept': 'application/json'
                            }
                        });

                        if (response.ok) {
                            form.reset();
                            updateCharCount();
                            successMessage.style.display = 'block';
                            setTimeout(() => {
                                successMessage.style.display = 'none';
                            }, 1000);
                        } else {
                            errorMessage.style.display = 'block';
                        }
                    } catch (error) {
                        errorMessage.style.display = 'block';
                    }

                    loading.style.display = 'none';
                });

                // Initialiser le compteur de caractères
                updateCharCount();
            `;
            document.body.appendChild(initScript);

            // Nettoyage lors du démontage du composant
            return () => {
                document.body.removeChild(initScript);
            };
        }
    }, []);

    return <div ref={containerRef} />;
};

export default Contact;