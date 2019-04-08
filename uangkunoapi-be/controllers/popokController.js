const conn = require('../database')
var fs = require('fs');
// var { uploader } = require('../helpers/uploader')

module.exports = {
    getListPopok: (req,res) => {
        var sql = `SELECT * from popok;`;
        conn.query(sql, (err, results) => {
            if(err) throw err;
            // console.log(results);
            res.send(results);
        })   
},
    getListDetailpopok : (req,res) => {
        var popokId = req.params.id
        var sql = `SELECT * from popok where id =${popokId};`;
        conn.query(sql, (err, results) => {
            if(err) throw err;
            // console.log(results);
            res.send(results);
        })   
    
},
    addPopok: (req, res) => {
        data = {
            nama: req.body.nama,
            merk: req.body.merk,
            harga: req.body.harga,
            img: req.body.img,
            description: req.body.description
        }
        var sql = `INSERT INTO popok SET ?;`;
        conn.query(sql, data, (err, results) => {
            if(err) throw err;
            console.log(results);
                    // res.send({status: "Tambah popok Sukses"})
                    res.send(results);
                })
    },
    editPopok: (req, res) => {
        sql = `UPDATE popok SET ? WHERE id=${req.params.id}`
        conn.query(sql, req.body, (err, results) => {
            if(err) throw err;
            console.log(results)
            res.send({status: "Update popok sukses", id: req.params.id, updateRows: results.changeRows})
        })
    },
    deletePopok: (req, res) => {
        sql = `DELETE FROM popok WHERE id=${req.params.id};`;
        conn.query(sql, (err, results) => {
            if(err) throw err1;
            console.log(results)
            res.send({status: "Hapus popok Sukses", id: req.params.id,  updateRows: results.changeRows})
        })  
    },
}
