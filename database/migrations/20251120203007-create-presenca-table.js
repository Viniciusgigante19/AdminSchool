export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Presencas', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    aluno_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'Alunos', key: 'id' },
      onDelete: 'CASCADE'
    },
    turma_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'Turmas', key: 'id' },
      onDelete: 'CASCADE'
    },
    professor_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'Professors', key: 'id' },
      onDelete: 'SET NULL'
    },
    data: {
      type: Sequelize.DATE,
      allowNull: false
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false
    },
    justificativa: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    createdAt: { type: Sequelize.DATE, allowNull: false },
    updatedAt: { type: Sequelize.DATE, allowNull: false }
  });
}

export async function down(queryInterface) {
  await queryInterface.dropTable('Presencas');
}