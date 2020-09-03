const Comment = require('../models/comment');

exports.addComment = (req, res, next) => {
    const comment = new Comment({
        name: req.body.name,
        comment: req.body.comment
    })

    comment.save()
        .then(comment => res.json(comment))
        .catch(err => console.log(err));

}

exports.getComments = (req, res, next) => {
    Comment.find()
        .then(items => res.json(items))
        .catch(err => console.log(err));
}