const router = require('express').Router()

const adminroute = require('./adminRoute')

router.use(adminroute);

module.exports = router;
