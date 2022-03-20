import  Sequilize  from 'sequelize';

const sequelize = 
new Sequilize('biblio-db', 'user', 'pass', {
    dialect: 'sqlite',
    host: './database/dev.sqlite'
})

export default sequelize;
