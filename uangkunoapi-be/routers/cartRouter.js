var express = require('express')
var router = express.Router()

//
const { cartController } = require('../controllers')

router.post('/getlistcart/:username', cartController.getListCart)

router.post('/getlistcart1', cartController.getListCart1)

router.post('/addcart', cartController.addCart)

router.put('/editcart/:id', cartController.editCart)
router.put('/editcart1/:id', cartController.editCart1)

router.delete('/deletecart/:id', cartController.deleteCart)

router.delete('/deletecart1/:id', cartController.deleteCart1)

module.exports = router;

