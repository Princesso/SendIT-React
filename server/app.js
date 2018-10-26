const express = require('express');
const bodyParser = require('body-parser');
import cors from 'cors';

const app = express();

// define access policies
app.use(
  cors({
    origin: "*",
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
  })
);

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  return res.status(200).json({ msg: 'Hello Boo'});
});


app.listen(8080, () => console.log('app stareted on port 8080'));