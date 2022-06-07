const contacts = require("../data/contacts");

// this function is like GET all of the contacts available
const list = (req, res) => {
	res.json(contacts);
};


// This function brings on contact based on ID
const show = (req, res) => {
    console.log("GET /contacts/:id", req.params.id);
    let paramID = req.params.id;
    const foundContact = contacts.find(element => element._id  == paramID);
    res.json(foundContact);
};

// This will POST a new contact
const create = (req, res) => {
let newContact = {};
newContact._id = contacts.length + 1; 
newContact.name = req.body.name;
console.log(req.body.name);
newContact.occupation = req.body.occupation;
newContact.avatar = req.body.avatar;
contacts.push(newContact);
res.json(newContact)
};
//export the list, show and create module
module.exports = { list, show, create };