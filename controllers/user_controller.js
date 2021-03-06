var userModel = require('../db/models/user')
var campaignsUsersModel = require('../db/models/campaignsUsers')
var campaignModel = require('../db/models/campaign')
var express = require('express')
var router = express.Router()

// Get all of the users
router.get('/', function (req, res) {
    userModel.User.findAll()
        .then(users => res.send(users))
})

// Get a User given a userId
router.get('/:userId', function (req, res) {
    userModel.User.find({
        where: {
            id: req.params.userId
        }
    }).then(users => res.send(users))
})

// Get all campaigns for a given userId
router.get('/:userId/campaigns', function (req, res) {
    campaignsUsersModel.CampaignsUsers.findAll({
        where: {
            userId: req.params.userId
        }
    }).then(campaignUsers => {
        campaignModel.Campaign.findAll().then(campaigns => res.send(campaigns.filter(c => campaignUsers.map(cu => cu.campaignId).includes(c.id))))
    })
})

// Create an association between a userId and campaignId
router.post('/:userId/campaigns/:campaignId', function (req, res) {
    campaignsUsersModel.CampaignsUsers.create({
        userId: req.params.userId,
        campaignId: req.params.campaignId
    }).then(response => res.send(response))
})

// Delete an association between a userId and campaignId
router.delete('/:userId/campaigns/:campaignId', function (req, res) {
    campaignsUsersModel.CampaignsUsers.destroy({
        where: {
            userId: req.params.userId,
            campaignId: req.params.campaignId
        }
    }).then(response => res.send("Successfully deleted"))
})

module.exports = router