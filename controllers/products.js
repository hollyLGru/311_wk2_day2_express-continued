const products = require("../data/products");

// this function is like GET all of the products available
const list = (req, res) => {
	res.json(products);
};


// This function brings one product based on ID
const show = (req, res) => {
	console.log("GET /products/:id", req.params.id);
    let paramID = req.params.id;
    const foundProducts = products.find(element => element._id  == paramID);
    res.json(foundProducts);
};

// This will POST a new product
const create = (req, res) => {
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
};



//export the list, show and create module
module.exports = { list, show, create };