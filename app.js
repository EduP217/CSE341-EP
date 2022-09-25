const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/", require('./routes'));

app.listen(port, () => {
    require("./database");
    console.log(`Example app listening on port ${port}`)
})