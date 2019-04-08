const authRouter = require('./authRouter');
const adminRouter = require('./adminRouter')
const popokRouter = require('./popokRouter')
const cartRouter = require('./cartRouter')
const transaksiRouter = require('./transaksiRouter')
const transaksiitemRouter = require('./transaksiitemRouter')

module.exports = {
    authRouter,
    adminRouter,
    popokRouter,
    cartRouter,
    transaksiRouter,
    transaksiitemRouter
   
}