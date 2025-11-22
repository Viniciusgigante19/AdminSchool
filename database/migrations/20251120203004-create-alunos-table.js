export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Alunos', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    },
    data_nascimento: {
      type: Sequelize.DATE,
      allowNull: true
    },
    cpf: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: true
    },
    responsavel_nome: {
      type: Sequelize.STRING,
      allowNull: true
    },
    responsavel_telefone: {
      type: Sequelize.STRING,
      allowNull: true
    },
    responsavel_email: {
      type: Sequelize.STRING,
      allowNull: true
    },
    usuario_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'Usuarios', key: 'id' },
      onDelete: 'SET NULL'
    },
    turma_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'Turmas', key: 'id' },
      onDelete: 'SET NULL'
    },
    createdAt: { type: Sequelize.DATE, allowNull: false },
    updatedAt: { type: Sequelize.DATE, allowNull: false }
  });
}

export async function down(queryInterface) {
  await queryInterface.dropTable('Alunos');
}