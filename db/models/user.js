const Sequelize = require ('sequelize')
const Op = Sequelize.Op
var utilities = require ('../utilities.js')

var connection = utilities.createConnection()
var User = connection.define ('users',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: Sequelize.STRING,
        type: Sequelize.STRING,
        email: Sequelize.STRING,
        zip: Sequelize.STRING
    },
    {
        timestamps: false,
        tableName: 'users'
    }
)

module.exports= {
    User: User
}