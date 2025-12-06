export default (sequelize, DataTypes) => {
  const Professor = sequelize.define('Professor', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    telefone: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: true
  });

  return Professor;
};
