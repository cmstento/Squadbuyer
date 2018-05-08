const Sequelize = require ('sequelize')
const Op = Sequelize.Op
var utilities = require ('../utilities.js')

var connection = utilities.createConnection()
var Campaign = connection.define ('campaigns',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: Sequelize.STRING,
        details: Sequelize.STRING,
        commits_needed: Sequelize.INTEGER
    },
    {
        timestamps: false,
        tableName: 'campaigns'
    }
)

module.exports= {
    Campaign: Campaign,
    Op: Op
}