const Crypto = require("crypto");
const conn = require('../database')
const transporter = require('../helpers/pengirimemail')
const { createJWTToken } = require('../helpers/jwt');

module.exports = {
    verified: (req,res) => {
        var { username, password } = req.body;
        var sql = `SELECT * from users WHERE username='${username}' and password='${password}'`;
        conn.query(sql, (err,results) => {
            if(err) throw err;

            if(results.length > 0) {
                sql = `UPDATE users set status='Verified' WHERE id=${results[0].id}`;
                conn.query(sql, (err1, results1) => {
                    if(err1) throw err1;
                    const token = createJWTToken({ id: results[0].id });
                    res.send({ 
                        username, 
                        email: results[0].email,
                        role: results[0].role,
                        status: 'Verified',
                        token
                    })
                })

            }
            else {
                throw 'User not exist!';
            }
        })
    },
    register: (req,res) => {
        var { username, password, email, phone } = req.body;
        var sql = `SELECT username from users WHERE username='${username}';`;
        conn.query(sql, (err,results) => {
            if(err) {
                throw err;
            }
            if(results.length > 0) {
                res.send({ status: 'error', message: 'Username has been taken!'})
            }
            else {
                var hashPassword = Crypto.createHmac("sha256", "kucingbertasbih").update(password).digest("hex");
                var dataUser = { 
                    username, 
                    password: hashPassword,
                    email,
                    phone,
                    role: 'Users',
                    status: 'Unverified',
                    lastlogin: new Date()
                }
                sql = `INSERT into users SET ? `;
                conn.query(sql,dataUser,(err1, results1) => {
                    if(err1) {
                        throw err1;
                    }
                    var linkVerifikasi = `http://localhost:3000/verified?username=${username}&password=${hashPassword}`;
                    var mailOptions = {
                        from: 'Penguasa Hokage Club <reuter3yandri3@yahoo.co.id>',
                        to: email,
                        subject: 'Verifikasi Email untuk Hokage Club',
                        html: `Tolong click link ini untuk verifikasi : <a href="${linkVerifikasi}">Join Hokage Club!</a>`
                    }

                    transporter.sendMail(mailOptions, (err2,res2) => {
                        if(err2) { 
                            console.log(err2) 
                            throw err2;
                        }
                        else {
                            console.log('Success!')
                            res.send({ username, email, role: 'User', status: 'Unverified', token: '' })
                        }
                    })
                })
            }
        })
    },

    signin: (req,res) => {
        var { username, password } = req.body;
        const hashPassword = Crypto.createHmac('sha256', "kucingbertasbih").update(`${password}`).digest('hex');
        var sql = `SELECT * FROM users WHERE username = '${username}' AND password = '${hashPassword}';`;
        conn.query(sql, (err, result) => {
            if(err) throw err;
            //console.log(`Hash: ${hash}, Hash2: ${hash2}`)
            console.log(req.body)
            console.log(result);
            //var lastlogin = moment().format('YYYY-MM-DD HH:mm:ss');
            var updateLogin = {
                lastlogin: new Date()
            }
            var sql2 = `UPDATE users SET ? WHERE username='${username}';`;
            conn.query(sql2, updateLogin, (err, result2) => {
                if (err) throw err;
                console.log(result2);
            }) 
            res.send(result);
        })
    },

    keeplogin: (req,res) => {
        var { username } = req.body;
        var sql = `SELECT * FROM users WHERE username = '${username}';`;
        conn.query(sql, (err, result) => {
            if(err) throw err;
            console.log(req.body)
            console.log(result);
            res.send(result);
        })
    },
}


