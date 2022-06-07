const vehicles = require("../data/vehicles");

// this function is like GET all of the vehicles available
const list = (req, res) => {
	console.log("vehicles");
	res.json(vehicles);
};


// This function brings one vehicle based on ID
const show = (req, res) => {
    console.log("GET /vehicles/:id", req.params.id);
    let paramID = req.params.id;
    const foundVehicles = vehicles.find(element => element._id  == paramID);
    res.json(foundVehicles);
};

// This will POST a new vehicle
const create = (req, res) => {
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
};
//export the list, show and create module
module.exports = { list, show, create };