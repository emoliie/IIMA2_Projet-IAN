document.addEventListener("DOMContentLoaded", function () {
  const languageButton = document.getElementById("language-button");
  const languageDropdown = document.getElementById("language-dropdown");
  const languageOptions = document.querySelectorAll(".language-option");

  // Fonction pour ouvrir/fermer le menu déroulant
  function toggleDropdown() {
    const expanded = languageButton.getAttribute("aria-expanded") === "true";

    languageButton.setAttribute("aria-expanded", !expanded);
    if (!expanded) {
      languageDropdown.classList.add("show");
      // Focus sur la première option
      languageOptions[0].focus();
    } else {
      languageDropdown.classList.remove("show");
    }
  }

  // Ouverture/fermeture au clic
  languageButton.addEventListener("click", function (e) {
    e.preventDefault();
    toggleDropdown();
  });

  // Gestion des touches pour l'accessibilité
  languageButton.addEventListener("keydown", function (e) {
    // Ouvrir avec Espace ou Entrée
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      toggleDropdown();
    }
    // Ouvrir avec flèche bas et focus sur la première option
    else if (e.key === "ArrowDown" || e.key === "Down") {
      e.preventDefault();
      languageDropdown.classList.add("show");
      languageButton.setAttribute("aria-expanded", "true");
      languageOptions[0].focus();
    }
  });

  // Gestion de la navigation par clavier dans le menu
  let currentIndex = -1;

  languageOptions.forEach((option, index) => {
    option.addEventListener("keydown", function (e) {
      switch (e.key) {
        case "ArrowDown":
        case "Down":
          e.preventDefault();
          if (index < languageOptions.length - 1) {
            languageOptions[index + 1].focus();
          }
          break;
        case "ArrowUp":
        case "Up":
          e.preventDefault();
          if (index > 0) {
            languageOptions[index - 1].focus();
          } else {
            languageButton.focus();
            languageDropdown.classList.remove("show");
            languageButton.setAttribute("aria-expanded", "false");
          }
          break;
        case "Escape":
          e.preventDefault();
          languageButton.focus();
          languageDropdown.classList.remove("show");
          languageButton.setAttribute("aria-expanded", "false");
          break;
        case " ":
        case "Enter":
          e.preventDefault();
          // Simulation du changement de langue
          languageButton.textContent = option.textContent.substring(0, 2);

          // Mise à jour de la classe "current"
          languageOptions.forEach((opt) => opt.classList.remove("current"));
          option.classList.add("current");

          // Fermer le menu
          languageDropdown.classList.remove("show");
          languageButton.setAttribute("aria-expanded", "false");
          languageButton.focus();

          // Mise à jour de l'aria-label
          languageButton.setAttribute(
            "aria-label",
            `Sélectionner une langue, ${option.textContent} actuellement sélectionné`
          );
          break;
      }
    });

    // Changement de langue au clic
    option.addEventListener("click", function (e) {
      e.preventDefault();

      // Mise à jour du bouton
      languageButton.textContent = option.textContent.substring(0, 2);

      // Mise à jour de la classe "current"
      languageOptions.forEach((opt) => opt.classList.remove("current"));
      option.classList.add("current");

      // Fermer le menu
      languageDropdown.classList.remove("show");
      languageButton.setAttribute("aria-expanded", "false");

      // Mise à jour de l'aria-label
      languageButton.setAttribute(
        "aria-label",
        `Sélectionner une langue, ${option.textContent} actuellement sélectionné`
      );
    });
  });

  // Fermer le menu en cliquant à l'extérieur
  document.addEventListener("click", function (e) {
    if (
      !languageButton.contains(e.target) &&
      !languageDropdown.contains(e.target)
    ) {
      languageDropdown.classList.remove("show");
      languageButton.setAttribute("aria-expanded", "false");
    }
  });
});
