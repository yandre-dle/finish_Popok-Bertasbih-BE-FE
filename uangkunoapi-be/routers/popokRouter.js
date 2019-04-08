var express = require('express')
var router = express.Router()

//
const { popokController } = require('../controllers')

router.get('/getlistpopok', popokController.getListPopok)

router.get('/getlistdetailpopok/:id', popokController.getListDetailpopok)
router.post('/addpopok', popokController.addPopok)
router.put('/editpopok/:id', popokController.editPopok)
router.delete('/deletepopok/:id', popokController.deletePopok)

module.exports = router;

