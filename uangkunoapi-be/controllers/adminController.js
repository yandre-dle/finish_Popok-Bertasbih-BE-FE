const conn = require('../database')

module.exports = {
    getuserlist: (req,res) => {
        console.log(req.users.id);
        return res.status(200).json({ idUser: req.users.id })
    }
}