var model = require('../db/models/campaign')
var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
    model.Campaign.findAll()
        .then(campaigns => res.send(campaigns))
})

module.exports = router