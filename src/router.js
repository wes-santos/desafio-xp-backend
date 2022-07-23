const express = require('express');
const assetsController = require('./controllers/assets.controller');

const router = express.Router();

router.use('/acoes', assetsController);

module.exports = router;
