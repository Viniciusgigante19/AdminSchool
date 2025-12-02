export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Alteracao_Admins', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    administrador_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'Administradores', key: 'id' },
      onDelete: 'CASCADE'
    },
    usuario_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'Usuarios', key: 'id' },
      onDelete: 'CASCADE'
    },
    aluno_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'Alunos', key: 'id' },
      onDelete: 'CASCADE'
    },
    professor_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'Professors', key: 'id' },
      onDelete: 'CASCADE'
    },
    descricao: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    createdAt: { type: Sequelize.DATE, allowNull: false },
    updatedAt: { type: Sequelize.DATE, allowNull: false }
  });
}

export async function down(queryInterface) {
  await queryInterface.dropTable('Alteracao_Admins');
}