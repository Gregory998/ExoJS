const repliques = document.querySelectorAll(".replique");
const h2Replique = document.querySelector("h2");


//2

repliques.forEach((replique) => {
    replique.addEventListener("click", function() {
        if (replique.classList.contains("jaune")){
        replique.classList.remove("jaune")
        }else {
        replique.classList.add("jaune")
        }
    })
})

//3

repliques.forEach((replique) => {
  replique.addEventListener("click", function() {
    repliques.forEach((element) => {
        // Supprimer la classe "jaune"
      element.classList.remove("jaune");
    });
        // Ajouter la classe "jaune"
    replique.classList.add("jaune");
  });
});

//5

repliques.forEach((replique, index) => {
  replique.addEventListener("click", function() {
    repliques.forEach((element) => {
      element.classList.remove("jaune");
    });
    replique.classList.add("jaune");

    // Extraire le numéro de la réplique
    const numeroReplique = index + 1;

    // Mettre à jour le contenu de l'élément <h2> avec le numéro de la réplique
    h2Replique.textContent = "Réplique sélectionnée : " + "Réplique " + numeroReplique;
  });
});

//6

const descendreRepliquesButton = document.getElementById("btn2");
const remonterRepliquesButton = document.getElementById("btn1");

descendreRepliquesButton.addEventListener("click", function() {
  // Sauvegardez le contenu de la dernière réplique
    const dernierContenu = repliques[repliques.length - 1].innerHTML;
  
  // Déplacez toutes les répliques vers le bas
    for (let i = repliques.length - 1; i > 0; i--) {
        repliques[i].innerHTML = repliques[i - 1].innerHTML;
  }
  
  // Insérez le contenu de la dernière réplique en haut
     repliques[0].innerHTML = dernierContenu;

  // Mettez à jour le contenu de l'élément <h2>
    h2Replique.textContent = "Réplique sélectionnée : " + "Réplique 1";
});

// On fait pareil mais inversément

remonterRepliquesButton.addEventListener("click", function() {

    const premierContenu = repliques[0].innerHTML;
  
    for (let i = 0; i < repliques.length - 1; i++) {
        repliques[i].innerHTML = repliques[i + 1].innerHTML;
    }
  
    repliques[repliques.length - 1].innerHTML = premierContenu;

    h2Replique.textContent = "Réplique sélectionnée : " + "Réplique 1";
});