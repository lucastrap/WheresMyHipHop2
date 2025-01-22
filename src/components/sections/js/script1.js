
// Fonction pour charger les posts Instagram
async function loadInstagramFeed() {
    const ACCESS_TOKEN = 'IGAAIa1yZCin7NBZAE9fVVBtRG5QR2hFSFpBWGstM1NHUFJHLUdrZAzNlNDBKZAGY4UzJYWDQ4SkdOdlNjY0I2Wll0dDQtNzA4Tm96aXdldGhCOEFvSXRIb0NVaEtMSXJzc0tSSlJCTkxUVTg0bFJwTlJtOFZAORGpfekVHazhlSlcySQZDZD';
    const INSTAGRAM_ID = 'whereismyhiphop';

    try {
        const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${ACCESS_TOKEN}`);
        const data = await response.json();

        const gridContainer = document.getElementById('instagram_grid');

        // Afficher seulement les 6 derniers posts
        const recentPosts = data.data.slice(0, 6);

        recentPosts.forEach(post => {
            const mediaUrl = post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url;

            const postElement = `
        <a href="${post.permalink}" target="_blank" class="instagram_post">
          <img src="${mediaUrl}" alt="${post.caption || 'Instagram post'}" loading="lazy">
          <div class="instagram_post_overlay">
            <div class="instagram_post_stats">
              <span>Voir sur Instagram</span>
            </div>
          </div>
        </a>
      `;

            gridContainer.innerHTML += postElement;
        });
    } catch (error) {
        console.error('Erreur lors du chargement des posts Instagram:', error);
    }
}

// Charger les posts quand la page est prête
document.addEventListener('DOMContentLoaded', loadInstagramFeed);

document.addEventListener('DOMContentLoaded', function() {
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
    sujet.parentNode.appendChild(charCountDiv);

    function updateCharCount() {
        const count = messageField.value.length; // Compte le nombre de caractères
        charCountDiv.textContent = `${count} / 1000`; // Met à jour le texte du compteur

        // Ajout d'une marge et d'une couleur basée sur le seuil
        charCountDiv.style.color = count > 900 ? '#fb1c04' : '#666'; // Couleur d'avertissement
        charCountDiv.style.fontWeight = count > 900 ? 'bold' : 'normal'; // Texte en gras si proche de la limite

        // Décaler le texte de 20px vers la droite
        charCountDiv.style.marginLeft = '20px';

        // Gestion d'un cas où le maximum est dépassé
        if (count > 1000) {
            charCountDiv.style.color = '#d81803'; // Rouge vif si dépassement
        }
    }


    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showError(fieldId, show) {
        const errorElement = document.getElementById(fieldId + 'Error');
        errorElement.style.display = show ? 'block' : 'none';
    }

    function validateField(field) {
        let isValid = true;

        if (field.id === 'email') {
            isValid = isValidEmail(field.value);
        } else if (field.id === 'message') {
            isValid = field.value.trim() !== '' && field.value.length <= 1000;
            if (!isValid) {
                const errorElement = document.getElementById('messageError');
                errorElement.textContent = field.value.length > 1000
                    ? '1000 caractères maximum autorisés'
                    : 'Veuillez entrer votre message';
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
        field.addEventListener('blur', () => validateField(field));
        field.addEventListener('input', () => {
            if (field.value.trim() !== '') {
                showError(field.id, false);
            }
            if (field.id === 'message') {
                updateCharCount();
            }
        });
    });

    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        let isValid = true;
        ['email', 'subject', 'message'].forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (!validateField(field)) {
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
                updateCharCount(); // Réinitialiser le compteur
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
});