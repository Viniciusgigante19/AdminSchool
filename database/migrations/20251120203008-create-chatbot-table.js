export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('ChatBots', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    usuario_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'Usuarios', key: 'id' },
      onDelete: 'CASCADE'
    },
    aluno_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'Alunos', key: 'id' },
      onDelete: 'CASCADE'
    },
    mensagem: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    resposta: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    data_hora: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    },
    createdAt: { type: Sequelize.DATE, allowNull: false },
    updatedAt: { type: Sequelize.DATE, allowNull: false }
  });
}

export async function down(queryInterface) {
  await queryInterface.dropTable('ChatBots');
}