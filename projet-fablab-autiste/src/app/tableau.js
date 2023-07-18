// Tableau de données initial
var tableauDonnees = [];

// Fonction pour ajouter une nouvelle donnée au tableau
function ajouterDonnee(donnee) {
  tableauDonnees.push(donnee);
}

// Fonction pour récupérer les données en fonction des critères
function recupererDonnees(criteres) {
  var resultats = [];

  // Parcours du tableau de données
  for (var i = 0; i < tableauDonnees.length; i++) {
    var donnee = tableauDonnees[i];

    // Vérification des critères
    var correspondAuxCriteres = true;
    for (var critere in criteres) {
      if (donnee[critere] !== criteres[critere]) {
        correspondAuxCriteres = false;
        break;
      }
    }

    // Ajout de la donnée aux résultats si elle correspond aux critères
    if (correspondAuxCriteres) {
      resultats.push(donnee);
    }
  }

  return resultats;
}

// Exemple de fonction pour créer un compte
function creerCompte(nom, prenom, age, commune, temperature, frequenceCardiaque, frequenceRespiratoire) {
  var compte = {
    id: tableauDonnees.length + 1, // ID automatiquement généré en fonction de la taille du tableau
    nom: nom,
    prenom: prenom,
    age: age,
    commune: commune,
    temperature: temperature,
    frequenceCardiaque: frequenceCardiaque,
    frequenceRespiratoire: frequenceRespiratoire
  };

  ajouterDonnee(compte);
}

// Exemple d'utilisation : création d'un compte et récupération des données correspondantes
creerCompte("Doe", "John", 30, "Paris", 37.5, 80, 18);

var criteres = {
  age: 30,
  commune: "Paris"
};

var resultats = recupererDonnees(criteres);
console.log(resultats);
