const express = require('express');
//const auth = require('../../middleware/auth');

const router = express.Router();

const controller = require('../../controller/menuList');


router.get('/getItem', controller.getAllItem);
router.post('/getItem', controller.postAnItem);
router.delete('/deleteItem/:prodId', controller.deletItem);
router.post('/editItem', controller.editItem);


module.exports = router;