const comments = require("../data/comments");

const list = (req, res) => {
	//Respond with each comment (get comments)
	res.json(comments);
};

// This is like GET comments by ID
const show = (req, res) => {
    let paramID = req.params.id;
    const foundComments = comments.find(element => element._id  == paramID);
    res.json(foundComments);
}

// This is like posting a new comment
const create = (req, res) => {
    let newComment = {};
    newComment._id = comments.length + 1; 
    newComment.body = req.body.body;
    newComment.postId = 1;
    comments.push(newComment);
    res.json(newComment)
}


//export the list, show and create
module.exports = { list, show, create };