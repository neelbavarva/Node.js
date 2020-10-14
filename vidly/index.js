const  mongoose = require('mongoose');
const express = require('express');
const customers  =require('./routes/customers');
const genres = require('./routes/genres');
const app = express();

mongoose.connect('mongodb://localhost/vidly')
        .then(() => console.log('Connected to mongoDB ... '))
        .catch(err => console.error('Could not connect to mongoDb '));

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));
