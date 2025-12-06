export default (sequelize, DataTypes) => {
  const AlunoTurmaHistorico = sequelize.define('AlunoTurmaHistorico', {
    aluno_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Alunos', key: 'id' }
    },
    turma_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Turmas', key: 'id' }
    },
    ano_letivo: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'Aluno_Turma_Historicos'
  });

  AlunoTurmaHistorico.associate = (models) => {
    AlunoTurmaHistorico.belongsTo(models.Aluno, { foreignKey: 'aluno_id', as: 'aluno' });
    AlunoTurmaHistorico.belongsTo(models.Turma, { foreignKey: 'turma_id', as: 'turma' });
  };

  return AlunoTurmaHistorico;
};
