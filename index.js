const express = require("express");
const bodyParser = require("body-parser");

const contacts  = require("./routes/contacts");
const vehicles  = require("./routes/vehicles");
const comments  = require("./routes/comments");
const products  = require("./routes/products");

const app = express();


app.use(express.static('public'));
app.use(bodyParser.json());


app.use(comments);
app.use(contacts);
app.use(products);
app.use(vehicles);


const port = process.env.PORT || 4000;
app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});

