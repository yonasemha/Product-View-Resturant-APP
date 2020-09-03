const FoodItems = require('../models/modelItems');

exports.getAllItem = (req, res, next) => {
    FoodItems.find()
        .then(items => res.json(items))
        .catch(err => console.log(err))
}

exports.postAnItem = (req, res, next) => {
    const newFood = new FoodItems({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description
    })
    console.log('llllll', newFood);

    newFood.save()
        .then(item => res.json(item))
        .catch(err => console.log(err))
}

exports.deletItem = (req, res, next) => {
    const id = req.params.prodId;
    FoodItems.findByIdAndRemove(id)
        .then(item => res.json(item))
        .catch(err => console.log(err));
}

exports.editItem = (req, res, next) => {
    const newFood = new FoodItems({
        _id: req.body._id,
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description
    })
   console.log('tttttttt',newFood)
    newFood.save()
        .then(item => res.json(item))
        .catch(err => console.log(err));
}