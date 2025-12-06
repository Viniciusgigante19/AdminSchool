export default (sequelize, DataTypes) => {
  const Administrador = sequelize.define('Administrador', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nivel_acesso: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'Administradores',// nome exato da tabela criada pela migration
    freezeTableName: true,        // evita pluralização automática
    timestamps: true
  });

  return Administrador;
};
