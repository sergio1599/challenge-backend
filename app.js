require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');


app.set('port', process.env.SERVER_PORT || 5000);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api/auth', require('./src/routes/auth'));
app.use('/api/notes', require('./src/routes/notes'));


app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
}); 
