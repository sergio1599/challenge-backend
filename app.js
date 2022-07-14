require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./src/database/databaseConnection');


app.set('port', process.env.PORT || 5000);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//conexion a la base de datos
sequelize.authenticate()
    .then(() => {
        console.log('Se conectó a la base de datos 🥵');
    }).catch(err => {
        console.log(`error al conectarse a la base de datos 😢 ${err.meesage}`);
    });

//routes
app.use('/api/auth', require('./src/routes/auth'));
app.use('/api/notes', require('./src/routes/notes'));
app.use('/api/category', require('./src/routes/category'));


app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
}); 
