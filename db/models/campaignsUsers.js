const Sequelize = require ('sequelize')
const Op = Sequelize.Op
var utilities = require ('../utilities.js')

var connection = utilities.createConnection()
var CampaignsUsers = connection.define ('CampaignsUsers',
    {
        userId: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        campaignId: {
            type: Sequelize.INTEGER,
            primaryKey: true
        }
    },
    {
        timestamps: false,
        tableName: 'CampaignsUsers'
    }
)

module.exports= {
    CampaignsUsers: CampaignsUsers
}