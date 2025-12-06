export default (sequelize, DataTypes) => {
  const Turma = sequelize.define('Turma', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    serie: {
      type: DataTypes.STRING
    },
    ano_letivo: {
      type: DataTypes.INTEGER
    },
    capacidade: {
      type: DataTypes.INTEGER
    }
  });

  return Turma;
};
