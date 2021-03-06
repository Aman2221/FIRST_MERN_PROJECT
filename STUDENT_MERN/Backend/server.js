const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(require('./routers.js'))
app.use(require('./Schema.js'))
const port = process.env.PORT || 5000 ;
const CONN_URL = `mongodb+srv://admin:as562770@cluster0.t600v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(CONN_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Database Connected');
})

app.listen(port , () => {
    console.log(`Listening on ${port}`);
})