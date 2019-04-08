const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'reuter3yandri3@gmail.com',
        pass: 'erqbcrttilzfmyvf'
    },
    tls: {
        rejectUnauthorized: false
    }
})

module.exports = transporter;
