const express = require("express");
const bodyParser = require("body-parser");
// Between lines 2 and 3, require the data from the following .js files:
// /data/contacts
// /data/vehicles
// /data/comments
// /data/products
const contacts = require("./data/contacts.js");
const vehicles = require("./data/contacts.js");
const comments = require("./data/contacts.js");
const products = require("./data/contacts.js");
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
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

  app.get("/contacts", function(req, res){
    console.log("GET /products");
    res.json(products)
  });

//   Add app.get() routes for the following:
// "/contacts/:id"
// "/vehicles/:id"
// "/comments/:id"
// "/products/:id"

app.get("/contacts/:id", function(req,res){
    console.log("GET /contacts/:id", req.params.id);
    let found
    for(let i=0; i < contacts.length; i++){
      let item = contacts[i]
      if(item.id  == req.params.id){ 
        found = item;
        break;
      }
    }
    if(found) {
      res.json(found); 
      } else {
      res.sendStatus(404);
      }
    
    }
    )

    app.get("/vehicles/:id", function(req,res){
        console.log("GET /vehicles/:id", req.params.id);
        let found
        for(let i=0; i < vehicles.length; i++){
          let item = vehicles[i]
          if(item.id  == req.params.id){ 
            found = item;
            break;
          }
        }
        if(found) {
          res.json(found); 
          } else {
          res.sendStatus(404);
          }
        
        }
        )

        app.get("/products/:id", function(req,res){
            console.log("GET /products/:id", req.params.id);
            let found
            for(let i=0; i < products.length; i++){
              let item = products[i]
              if(item.id  == req.params.id){ 
                found = item;
                break;
              }
            }
            if(found) {
              res.json(found); 
              } else {
              res.sendStatus(404);
              }
            
            }
            )

            app.get("/comments/:id", function(req,res){
                console.log("GET /comments/:id", req.params.id);
                let found
                for(let i=0; i < comments.length; i++){
                  let item = comments[i]
                  if(item.id  == req.params.id){ 
                    found = item;
                    break;
                  }
                }
                if(found) {
                  res.json(found); 
                  } else {
                  res.sendStatus(404);
                  }
                
                }
                )