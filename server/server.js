const express = require ('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = 3001;

const URI = 'mongodb+srv://vercel-admin-user:Ilovemywife123@cluster0.rmskjpq.mongodb.net/posts'

app.use(cors());
app.use(express.json());

//connect to mongoose
mongoose.connect(URI);
//require route
app.use('/', require('./routes/postRoute'));
app.listen(port, () => {
    console.log('Server is Running.');
})