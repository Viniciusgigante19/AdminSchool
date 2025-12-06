export default (sequelize, DataTypes) => {
  const AlteracaoAdmin = sequelize.define('AlteracaoAdmin', {
    administrador_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Administradores', key: 'id' }
    },
    acao: {
      type: DataTypes.STRING,
      allowNull: false
    },
    data_hora: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'Alteracao_Admins'
  });

  AlteracaoAdmin.associate = (models) => {
    AlteracaoAdmin.belongsTo(models.Administrador, {
      foreignKey: 'administrador_id',
      as: 'administrador'
    });
  };

  return AlteracaoAdmin;
};
