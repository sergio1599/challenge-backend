require('dotenv').config();
require('./src/database/associations');

const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./src/database/databaseConnection');



app.set('port', process.env.PORT || 5000);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//routes
app.use('/api/auth', require('./src/routes/auth'));
app.use('/api/notes', require('./src/routes/notes'));
app.use('/api/category', require('./src/routes/category'));


app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
    sequelize.sync({ force: false })
        .then(() => {
            console.log('Se conectó la base de datos');
        })
        .catch(err => {
            console.log(`Error al conectarse a la base de datos ${err.message}`);
        })

}); 
