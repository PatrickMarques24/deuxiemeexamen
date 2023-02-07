"use strict";

import User from "./User.js";

const affichageDesPersonnes = async () => {
	fetch(` https://randomuser.me/api/?results=20`)
		.then((res) => {
			return res.json();
		})
		.then((res) => {
			// Affichage du tableau résults qui était un objet du fetch recu
			return res.results;
		})
		.then((res) => {
			let objet = [];

			res.forEach((personne) => {
				objet.push({
					titre: personne.name.title,
					prenom: personne.name.first,
					nom: personne.name.last,
					ville: personne.location.city,
					pays: personne.location.country,
					age: personne.dob.age,
					image: personne.picture.large,
				});
				// new User(personne);
			});
			// Tableau nettoyé
			console.log(objet);
			new User(objet);
			return objet;
		})
		.catch((err) => {
			console.error(err.message);
		});
};

affichageDesPersonnes();
