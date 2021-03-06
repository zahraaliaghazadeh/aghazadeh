const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Product
            .find()
            .sort({ name: 1 })
            .then(result => res.json(result))
            .catch(err => res.status(422).json(err))
    },
    findById: function (req, res) {
        db.Product
            .findById(req.params.id)
            .then(product => res.json(product))
            .catch(err => res.status(422).json(err))
    },
    create: function (req, res) {
        db.Product
            .create(req.body)
            .then(product => res.json(product))
            .catch(err => res.status(422).json(err))
    },
    update: function (req, res) {
        db.Product
            .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .then(product => res.json(product))
            .catch(err => res.status(422).json(err))

    },
    remove: function (req, res) {
        db.Product
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    search: function (req, res) {
        db.Product
            .find({ name: new RegExp(req.params.query, "i") })
            // .find( { name : { $regex : req.body.search, $options : 'i' } } )
            .then(product => res.json(product))
            .catch(err => res.status(422).json(err))
    }
};