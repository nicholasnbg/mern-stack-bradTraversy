const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

//DB config
const db = require('./config/keys').mongoURI;

//Connect to mongoDB
mongoose
    .connect(db)
    .then(() => console.log('mongoDB connected'))
    .catch((err) => console.log(err));


app.get('/', (req, res) => res.send('hello world'));

//Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);


const port = process.env.port || 5000;

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});