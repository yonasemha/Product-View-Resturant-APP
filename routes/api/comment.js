const express = require('express');
const commentController = require('../../controller/comment');

const router = express.Router();



//router.get('/addorder/:itemId',orderControler.addOrderedItem);
router.post('/addComment', commentController.addComment);
router.get('/getComment', commentController.getComments);


module.exports = router;