const express = require('express');
const assetsService = require('../services/assets.service');

const assetsController = express.Router();

assetsController.get('/', async (_request, response) => {
  const assets = await assetsService.getAssets();

  response.status(200).json(assets);
});

module.exports = assetsController;
