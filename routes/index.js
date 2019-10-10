const express = require('express');
const router = express.Router();
const PagesController = require('../controllers/PagesController');
const {
    catchErrors
} = require('../handlers/errorHandlers');


router.get('/',
    PagesController.something,
    catchErrors(PagesController.login));


module.exports = router;