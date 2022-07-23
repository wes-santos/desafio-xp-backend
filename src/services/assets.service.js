const { Acao } = require('../database/models');

const getAssets = async () => {
  const assets = await Acao.findAll();

  return assets;
};

module.exports = { getAssets }