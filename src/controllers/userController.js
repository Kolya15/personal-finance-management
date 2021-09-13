const UserModels = require('../models/User')

class User {
    async getAllUsers(req, res) {
        try {
          const users = await UserModels.find()
            res.json(users)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new User()