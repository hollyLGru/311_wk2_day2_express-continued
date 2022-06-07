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
console.log(req.body.name);
newContact.occupation = req.body.occupation;
newContact.avatar = req.body.avatar;
contacts.push(newContact);
res.json(newContact)
  })

//   "_id": 1,
//     "body": "ACA is great!",
//     "postId": 1

  app.post("/comments", function(req, res){
    let newComment = {};
    newComment._id = comments.length + 1; 
    newComment.body = req.body.body;
    newComment.postId = 1;
    comments.push(newComment);
    res.json(newComment)
      })

    //   {
    //     "_id": 3,
    //     "name": "Almond",
    //     "description": "Other disorders of continuity of bone, unsp tibia and fibula",
    //     "rating": 5,
    //     "imgUrl": "http://dummyimage.com/149x190.jpg/dddddd/000000",
    //     "price": "$51.83",
    //     "category": "food",
    //     "reviews": [{
    //       "description": "architect revolutionary deliverables",
    //       "rating": 2
    //     }, {
    //       "description": "orchestrate dynamic schemas",
    //       "rating": 2
    //     }, {
    //       "description": "aggregate integrated convergence",
    //       "rating": 4
    //     }
    //   ]
    //   },

      app.post("/products", function(req, res){
        let newProduct = {};
        newProduct._id = products.length + 1; 
        newProduct.name = req.body.name;
        newProduct.description = req.body.description;
        newProduct.rating = req.body.rating;
        newProduct.imgURL = req.body.imgURL;
        newProduct.price = req.body.price;
        newProduct.category = req.body.category;
        newProduct.reviews = req.body.reviews;
        contacts.push(newProduct);
        res.json(newProduct)
          })

        //   {
        //     "_id": 1,
        //     "imgUrl": "./featured-img-1.jpg",
        //     "year": "2004",
        //     "make": "HONDA",
        //     "model": "Accord",
        //     "price": "$7456.40",
        //     "km": 34720,
        //     "miles": 10615,
        //     "fuel": "Gas",
        //     "city": "Colca",
        //     "isNew": false
        //   }

        app.post("/vehicles", function(req, res){
            let newVehicle = {};
            newVehicle._id = vehicles.length + 1; 
            newVehicle.imgURL = req.body.imgURL;
            newVehicle.year = req.body.year;
            newVehicle.make = req.body.make;
            newVehicle.model = req.body.model;
            newVehicle.price = req.body.price;
            newVehicle.km = req.body.km;
            newVehicle.miles = req.body.miles;
            newVehicle.isNew = req.body.isNew;
            newVehicle.fuel = req.body.fuel;
            newVehicle.city = req.body.city;
            contacts.push(newVehicle);
            res.json(newVehicle)
              })