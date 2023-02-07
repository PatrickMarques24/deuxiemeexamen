"use strict";

import User from "./User.js";

const render = async (el) => {
	const mainElement = document.querySelector("main");

	let html = `<div class="user" data-present="${el.estPresent}">
<img src="${el.image}">
<div class="user--info">
    <h1>${el.titre} ${el.prenom} ${el.nom}</h1>
    <p>${el.age} years old</p>
    <p>${el.ville}, ${el.pays}</p>
</div>
<a href="mailto:${el.prenom}.${el.nom}@example.com">
    <span class="mail">✉️</span>
</a>
</div>`;

	mainElement.insertAdjacentHTML("afterbegin", html);
};

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
			// Je n'arrive pas a exploiter User.js
			let objet = [];

			// Je fais en sorte d'afficher le contenu d'un tableau en attendant de pouvoir exploiter User.js
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

				new User(
					personne.name.title,
					personne.name.first,
					personne.name.last,
					personne.location.city,
					personne.location.country,
					personne.dob.age,
					personne.picture.large
				);
			});
			// Fin de je n'arrive pas à exploiter User.js

			// Ceci est techniquement temporaire mais je n'arrive pas a créer des nouveaux USER et ensuite faire en sorte de les appeler

			objet.forEach((el) => {
				render(el);
				// Fin de la partie techniquement temporaire
			});
		})
		.catch((err) => {
			console.error(err.message);
		});
};

affichageDesPersonnes();

// PRESENT - NON PRESENT (tentative)
const element = document.querySelector("div");

element.addEventListener("click", (e) => {
	alert("Test");
	if (e.target.dataset.present === "false") {
		e.target.dataset.present = true;
	} else {
		e.target.dataset.present = false;
	}
});
