'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Acoes',
    [
      {
        codAtivo: 'PETR4',
        subtitulo: 'Petrobras Pn N2',
        imagem: 'https://i.imgur.com/3rXRnXm.jpg',
        valor: 27.96,
      },
      {
        codAtivo: 'AZUL4',
        subtitulo: 'Azul Pn N2',
        imagem: 'https://i.imgur.com/oiVRlDJ.jpg',
        valor: 12.19,
      },
      {
        codAtivo: 'VALE3',
        subtitulo: 'Vale On Nm',
        imagem: 'https://i.imgur.com/W7AMnRR.jpg',
        valor: 68.37,
      },
      {
        codAtivo: 'MGLU3',
        subtitulo: 'Magaz Luiza On Nm',
        imagem: 'https://i.imgur.com/N0po0Vw.jpg',
        valor: 2.78,
      },
      {
        codAtivo: 'BBAS3',
        subtitulo: 'Brasil On Nm',
        imagem: 'https://i.imgur.com/9ZvjALL.jpg',
        valor: 33.28,
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Acoes', null, {}),
};
