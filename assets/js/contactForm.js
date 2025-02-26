document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre immédiatement

    // Réinitialise les messages d'erreur précédents
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach((error) => {
      error.textContent = "";
      error.setAttribute("aria-live", "off"); // Désactive l'annonce pour les erreurs réinitialisées
    });

    let formValid = true;

    const situation = document.getElementById("situation");
    const gender = document.getElementById("gender");
    const name = document.getElementById("name");
    const firstname = document.getElementById("firstname");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const messageObject = document.getElementById("message-object");
    const message = document.getElementById("message");

    // Vérification des champs

    // Vérification de la situation
    if (!situation.value) {
      const situationError = document.getElementById("situation-error");
      situationError.textContent = "Veuillez sélectionner votre situation.";
      situationError.setAttribute("aria-live", "assertive"); // Annonce immédiate
      formValid = false;
    }

    // Vérification de la civilité
    if (!gender.value) {
      const genderError = document.getElementById("gender-error");
      genderError.textContent = "Veuillez sélectionner votre civilité.";
      genderError.setAttribute("aria-live", "assertive"); // Annonce immédiate
      formValid = false;
    }

    // Vérification du nom
    if (!name.value) {
      const nameError = document.getElementById("name-error");
      nameError.textContent = "Le nom est requis.";
      nameError.setAttribute("aria-live", "assertive"); // Annonce immédiate
      formValid = false;
    }

    // Vérification du prénom
    if (!firstname.value) {
      const firstnameError = document.getElementById("firstname-error");
      firstnameError.textContent = "Le prénom est requis.";
      firstnameError.setAttribute("aria-live", "assertive"); // Annonce immédiate
      formValid = false;
    }

    // Vérification de l'email
    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      const emailError = document.getElementById("email-error");
      emailError.textContent = "Veuillez entrer un email valide.";
      emailError.setAttribute("aria-live", "assertive"); // Annonce immédiate
      formValid = false;
    }

    // Vérification du téléphone
    if (!phone.value || !/\+?\d{10,15}/.test(phone.value)) {
      const phoneError = document.getElementById("phone-error");
      phoneError.textContent = "Veuillez entrer un numéro de téléphone valide.";
      phoneError.setAttribute("aria-live", "assertive"); // Annonce immédiate
      formValid = false;
    }

    // Vérification de l'objet du message
    if (!messageObject.value) {
      const messageObjectError = document.getElementById(
        "message-object-error"
      );
      messageObjectError.textContent =
        "Veuillez sélectionner un objet pour votre message.";
      messageObjectError.setAttribute("aria-live", "assertive"); // Annonce immédiate
      formValid = false;
    }

    // Vérification du message
    if (!message.value) {
      const messageError = document.getElementById("message-error");
      messageError.textContent = "Le message est requis.";
      messageError.setAttribute("aria-live", "assertive"); // Annonce immédiate
      formValid = false;
    }

    // Si tout est valide, soumettre le formulaire
    if (formValid) {
      alert("Votre message a bien été envoyé !");
      // Ici tu pourrais envoyer le formulaire si tout est valide
      // event.target.submit();
    }
  });
