export default (sequelize, DataTypes) => {
  const Presenca = sequelize.define('Presenca', {
    aluno_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    turma_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    data: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    justificativa: {
      type: DataTypes.TEXT
    }
  });

  return Presenca;
};
