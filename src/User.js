class User {
	constructor(titre, prenom, nom, ville, pays, age, image) {
		this.titre = titre;
		this.prenom = prenom;
		this.nom = nom;
		this.ville = ville;
		this.pays = pays;
		this.age = age;
		this.image = image;
		this.estPresent = false;
	}

	display() {
		const mainElement = document.querySelector("main");

		let html = `<div class="user" data-present="${this.estPresent}">
		<img src="https://randomuser.me/api/portraits/women/37.jpg">
		<div class="user--info">
				<h1>${this.titre} ${this.prenom} ${this.nom}</h1>
				<p>${this.age} years old</p>
				<p>${this.ville}, ${this.pays}</p>
		</div>
		<a href="mailto:${this.prenom}.${this.nom}@example.com">
				<span class="mail">✉️</span>
		</a>
</div>`;

		mainElement.insertAdjacentHTML("afterbegin", html);
	}
}

export default User;
