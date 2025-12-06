export default (sequelize, DataTypes) => {
  const AtividadeTurma = sequelize.define('AtividadeTurma', {
    atividade_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Atividades', key: 'id' }
    },
    turma_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Turmas', key: 'id' }
    }
  }, {
    tableName: 'Atividade_Turmas'
  });

  AtividadeTurma.associate = (models) => {
    AtividadeTurma.belongsTo(models.Atividade, { foreignKey: 'atividade_id', as: 'atividade' });
    AtividadeTurma.belongsTo(models.Turma, { foreignKey: 'turma_id', as: 'turma' });
  };

  return AtividadeTurma;
};
