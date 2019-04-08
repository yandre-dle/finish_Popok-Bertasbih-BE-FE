var express = require('express')
var router = express.Router()

//
const { transaksiitemController } = require('../controllers')

router.post('/getlisttransaksiitem/:id', transaksiitemController.getListTransaksiitem)
router.post('/addtransaksiitem', transaksiitemController.addTransaksiitem)

module.exports = router;
