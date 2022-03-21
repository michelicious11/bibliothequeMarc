let email = document.getElementById('input-email');
let password = document.getElementById('input-password');
let form = document.getElementById('form-inscription');
const erreurEmail = document.getElementById('erreur-email-inscription');
const erreurPassword = document.getElementById('erreur-password-inscription');

// Ajouter evenement soummettre au bouton d'inscription
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const data = {
        email: email.value,
        password: password.value
    };

   let response = await fetch('/inscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    if(response.ok) {
        window.location.replace('/login');
    }
    else if (response.status === 409) {
        let data = await response.json();
        console.log(data);
    }

    // Validation envoi HTTP
    if(form.checkValidity()) {
        let data = {
            email: email.value,
            password: password.value
        }

        await fetch('/inscription', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    }
});