const conn = require('../database')
var fs = require('fs');
// var { uploader } = require('../helpers/uploader')

module.exports = {
    getListTransaksiitem: (req,res) => {
        var sql = `SELECT * from transaksiitem where id='${req.params.id}';`;
        conn.query(sql, (err, results) => {
            if(err) throw err;
            res.send(results);
        })   
    },

    addTransaksiitem: (req, res) => {
       var data = {
            transaksiId:req.body.transaksiId,
            popokId:req.body.popokId,
            nama:req.body.nama,
            harga:req.body.harga,
            img:req.body.img,
            quantity:req.body.quantity
        }
         sql = `INSERT INTO transaksiitem set ?`;
        conn.query(sql, data, (err, results2) => {
            if(err) throw err;
            console.log(results2);
            res.send(results2);
                
        })
    },
}

