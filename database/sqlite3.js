import sqlite3 from 'sqlite3';

let db = new sqlite3.Database('./bibliotheque.db', (err) => {
    if (err) {
       return console.error(err.message);
    }
    console.log('Connexion à la base de données');
});


//      Création des tables
db.run(
    'CREATE TABLE IF NOT EXISTS Livres ('
        + 'id_livre INT NOT NULL,'
        + 'titre VARCHAR(50) NOT NULL,'
        + 'auteur VARCHAR(50) NOT NULL,'
        + 'resume VARCHAR(255),'
        + 'type VARCHAR(25),'
        + 'PRIMARY KEY (id_livre);'
);

db.run(
    'CREATE TABLE IF NOT EXISTS Compte ('
        + 'id_compte INT NOT NULL,'
        + 'prenom VARCHAR(45) NOT NULL,'
        + 'nom VARCHAR(45) NOT NULL,'
        + 'mot_de_passe VARCHAR(45) NOT NULL,'
        + 'email VARCHAR(45) NOT NULL,'
        + 'adresse VARCHAR(45) NOT NULL,'
        + 'PRIMARY KEY (id_compte),'
);

db.run(
    'CREATE TABLE IF NOT EXISTS Emprunt ('
        + 'id_emprunt INT NOT NULL,'
        + 'id_livre INT NOT NULL,'
        + 'id_compte INT NOT NULL,'
        + 'date_emprunt DATETIME NOT NULL,'
        + 'date_retour DATETIME NOT NULL,'
        + 'PRIMARY KEY (id_emprunt),'
        + 'FOREIGN KEY (id_livre) REFERENCES Livre (id_livre));'
        + 'FOREIGN KEY (id_compte) REFERENCES Compte (id_compte));'
);

db.run(
    'INSERT INTO Livre' 
        +'(titre, auteur, resume, type) VALUES'
        + "(Livre1', 'Connell', 'pass1234', 'jconnell@gmail.com'),"
        + "(Livre2', 'Tremblay', 'pass1357', 'anonyme@gmail.com'),"
        + "(Livre3', 'Baker', 'pass5678', 'caca@gmail.com');"
);

db.run(
    'INSERT INTO Compte' 
        +'(prenom, nom, mot_de_passe, email, adresse) VALUES'
        + "(Jason', 'Connell', 'pass1234', 'jconnell@gmail.com', '2 Montreal Road, Ottawa, QC,),"
        + "(Marc', 'Tremblay', 'pass1357', 'anonyme@gmail.com', '2 boul. Rene-Levesque, Montreal, QC,),"
        + "(Laure', 'Baker', 'pass5678', 'caca@gmail.com', '2 rue Canadien, Quebec, QC,);"
);

db.run(
    'INSERT INTO Emprunt' 
        +'(livre, compte, date_emprunt, date_retour) VALUES'
        + "(1'2022-04-01', '2022-04-01'),"
        + "(1'2022-04-01', '2022-04-01'),"
        + "(1'2022-04-01', '2022-04-01');"
);

export { db, selectLivre }

db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Fermeture de la connexion à la base de données.');
});
