const conn = require('../database')
var fs = require('fs');
// var { uploader } = require('../helpers/uploader')

module.exports = {
    getListTransaksi: (req,res) => {
        var sql = `SELECT * from transaksi where username='${req.params.username}';`;
        conn.query(sql, (err, results) => {
            if(err) throw err;
            res.send(results);
        })   
    },
    addTransaksi: (req, res) => {
        data = {
            username: req.body.username,
            tglTransaksi: new Date(),
            totalPrice: req.body.totalPrice,
            totalItem: req.body.totalItem,
        }
        var sql = `INSERT INTO transaksi SET ?`;
        conn.query(sql, data, (err, results) => {
            if(err) throw err;
            console.log(results);
                    res.send(results);
                    
                })
    },
    
}