export default (sequelize, DataTypes) => {
  const Atividades = sequelize.define('Atividades', {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descricao: {
      type: DataTypes.TEXT
    },
    data_entrega: {
      type: DataTypes.DATEONLY
    },
    arquivo_anexo: {
      type: DataTypes.STRING
    }
  });

  return Atividades;
};
