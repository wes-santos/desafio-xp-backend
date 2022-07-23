const Acao = (sequelize, DataTypes) => {
  const Acao = sequelize.define('Acao',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      codAtivo: DataTypes.STRING,
      subtitulo: DataTypes.STRING,
      imagem: DataTypes.STRING,
      valor: DataTypes.DECIMAL,
    },
    {
      timestamps: false,
      tableName: 'Acoes',
    }
  );

  return Acao;
}

module.exports = Acao;
