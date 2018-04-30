const router = require('express').Router();
const Home   = require('../App/controllers/HomeController')
/* GET home page. */
router.get('/', Home.index);

module.exports = router;
