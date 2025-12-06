export default (sequelize, DataTypes) => {
  const Aluno = sequelize.define('Aluno', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    data_nascimento: {
      type: DataTypes.DATEONLY
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    responsavel_nome: {
      type: DataTypes.STRING
    },
    responsavel_telefone: {
      type: DataTypes.STRING
    },
    responsavel_email: {
      type: DataTypes.STRING
    }
  });

  return Aluno;
};

