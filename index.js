const express = require("express");
const bodyParser = require("body-parser");
// Between lines 2 and 3, require the data from the following .js files:
// /data/contacts
// /data/vehicles
// /data/comments
// /data/products
const contacts  = require("./data/contacts");
const vehicles  = require("./data/vehicles");
const comments  = require("./data/comments");
const products  = require("./data/products");
const app = express();


app.use(express.static('public'));
app.use(bodyParser.json());
const port = process.env.PORT || 4000;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});

// Add app.get() routes for the following:
// "/contacts"
// "/vehicles"
// "/comments"
// "/products"
app.get("/contacts", function(req, res){
    console.log("GET /contacts");
    res.json(contacts)
  });

  app.get("/vehicles", function(req, res){
    console.log("GET /vehicles");
    res.json(vehicles)
  });

  app.get("/comments", function(req, res){
    console.log("GET /comments");
    res.json(comments)
  });

  app.get("/products", function(req, res){
    console.log("GET /products");
    res.json(products)
  });

//   Add app.get() routes for the following:
// "/contacts/:id"
// "/vehicles/:id"
// "/comments/:id"
// "/products/:id"

app.get("/contacts/:id", function(req, res){
    console.log("GET /contacts/:id", req.params.id);
    let paramID = req.params.id;
    const foundContact = contacts.find(element => element._id  == paramID);
    res.json(foundContact);
})

app.get("/vehicles/:id", function(req, res){
    console.log("GET /vehicles/:id", req.params.id);
    let paramID = req.params.id;
    const foundVehicles = vehicles.find(element => element._id  == paramID);
    res.json(foundVehicles);
})

app.get("/comments/:id", function(req, res){
    console.log("GET /comments/:id", req.params.id);
    let paramID = req.params.id;
    const foundComments = comments.find(element => element._id  == paramID);
    res.json(foundComments);
})

app.get("/products/:id", function(req, res){
    console.log("GET /products/:id", req.params.id);
    let paramID = req.params.id;
    const foundProducts = products.find(element => element._id  == paramID);
    res.json(foundProducts);
})

// Add app.post() routes for the following:
// "/contacts"
// "/vehicles"
// "/comments"
// "/products"

// "_id": 1,
//     "name": "Dale Cooper",
//     "occupation": "FBI Agent",
//     "avatar": "https://upload.wikimedia.org/wikipedia/en/5/50/Agentdalecooper.jpg"
 
app.post("/contacts", function(req, res){
let newContact = {};
newContact._id = contacts.length + 1; 
newContact.name = req.body.name;
newContact.occupation = req.body.occupation;
newContact.avatar = req.body.avatar;
contacts.push(newContact);
res.json(newContact)
  })