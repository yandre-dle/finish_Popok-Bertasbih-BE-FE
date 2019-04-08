const conn = require('../database')
var fs = require('fs');
// var { uploader } = require('../helpers/uploader')

module.exports = {
    getListCart: (req,res) => {
        var sql = `SELECT * from cart where username='${req.params.username}';`;
        conn.query(sql,(err, results) => {
            if(err) throw err;
            res.send(results);
        })   
    },
    getListCart1: (req,res) => {
        data1={
            username:req.body.username,
            popokId:req.body.popokId
        }
        var sql = `SELECT * from cart;`;
        conn.query(sql,data1, (err, results) => {
            if(err) throw err;
            console.log(results)
            res.send(results);
           
        }) 
    },
    
    editCart: (req, res) => {
        var sql = `UPDATE cart SET ? WHERE id=${req.params.id};`;
        conn.query(sql,req.body, (err, results) => {
            if(err) throw err;
            console.log(results)
            res.send({status: "edit cart sukses yah", id: req.params.id})
            // res.send(results);
        })
    },

    editCart1:(req, res) => {
    var sql = `UPDATE cart SET ? WHERE id=${req.params.id};`;
        conn.query(sql,req.body, (err, results) => {
            if(err) throw err;
            console.log(results)
            // res.send({status: "save item cart sukses yah", id: req.params.id, updateRows: results.changeRows})
            res.send(results);
        })
    },
    deleteCart: (req, res) => {
      var  sql = `DELETE FROM cart WHERE id=${req.params.id};`;
        conn.query(sql, (err, results) => {
            if(err) throw err;
            console.log(results)
            res.send({status: "delete cart Sukses yah", id: req.params.id, updateRows: results.changeRows})
            //  res.send(results);
        })  
    },
    addCart: (req, res) => {
    
        data = {
            nama: req.body.nama,
            harga: req.body.harga,
            img: req.body.img,
            username: req.body.username,
            quantity: req.body.quantity,
            popokId:req.body.popokId,
        }
        
        var sql = `INSERT INTO cart SET?`;
        conn.query(sql,data, (err, results) => {
            if(err) throw err;
            console.log(results)
                res.send(results);
            }
        )
    },
    deleteCart1: (req, res) => {
        sql = `DELETE FROM cart WHERE id=${req.params.id};`;
        conn.query(sql, (err, results) => {
            if(err) throw err;
            console.log(results)
            res.send({status: "delete item cart Sukses", id: req.params.id, updateRows: results.changeRows})
            // res.send(results);
        }) 
    },

    
}

