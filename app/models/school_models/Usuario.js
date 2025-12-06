export default (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipo_usuario: {
      type: DataTypes.ENUM('aluno', 'professor', 'administrador'), // valores em português
      allowNull: false
    },
    nivel_acesso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'Usuarios',   // garante que o Sequelize use a tabela correta
    timestamps: true         // cria automaticamente createdAt e updatedAt
  });

  return Usuario;
};
