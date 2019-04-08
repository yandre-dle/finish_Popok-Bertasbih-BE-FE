var express = require('express')
var router = express.Router()

//
const { transaksiController } = require('../controllers')

router.post('/getlisttransaksi/:username', transaksiController.getListTransaksi)
router.post('/addtransaksi', transaksiController.addTransaksi)

module.exports = router;

