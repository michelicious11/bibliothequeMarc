// Aller chercher les configurations de l'application
import 'dotenv/config';

//Importer document de routes externe
import routes from './routes/routes.js';
import path from 'path';
const __dirname = path.resolve();
import exphbs from 'express-handlebars';

// Importer les fichiers et librairies
import express, { json, urlencoded } from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import cspOption from './csp-options.js'

// Création du serveur
const app = express();

//Configuration des handlebars
app.set('view engine', 'hbs');
app.engine('.hbs', exphbs.engine({
    extname: 'hbs',
    defaultLayout: 'index',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
}));

// Ajout de middlewares
app.use(helmet(cspOption));
app.use(compression());
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(express.static(__dirname));


//Charger les routes du fichier externe "routes"
app.use(routes);

// Renvoyer une erreur 404 pour les routes non définies
app.use(function (request, response) {
    // Renvoyer simplement une chaîne de caractère indiquant que la page n'existe pas
    response.status(404).send('<h1>404! Page not found</h1>');
});

// Démarrage du serveur
app.listen(process.env.PORT);
console.info(`Serveurs démarré:`);
console.info(`http://localhost:${ process.env.PORT }`);


