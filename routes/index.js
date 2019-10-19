const express = require('express');
const router = express.Router();
const PagesController = require('../controllers/PagesController');

router.get('/', PagesController.home);
router.get('/register', PagesController.form)
router.post('/register', PagesController.register)

module.exports = router;