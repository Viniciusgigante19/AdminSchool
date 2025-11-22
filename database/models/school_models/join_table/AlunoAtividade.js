export default (sequelize, DataTypes) => {
  const AlunoAtividade = sequelize.define('AlunoAtividade', {
    aluno_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Alunos', key: 'id' }
    },
    atividade_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Atividades', key: 'id' }
    }
  }, {
    tableName: 'Aluno_Atividades'
  });

  AlunoAtividade.associate = (models) => {
    AlunoAtividade.belongsTo(models.Aluno, { foreignKey: 'aluno_id', as: 'aluno' });
    AlunoAtividade.belongsTo(models.Atividade, { foreignKey: 'atividade_id', as: 'atividade' });
  };

  return AlunoAtividade;
};
