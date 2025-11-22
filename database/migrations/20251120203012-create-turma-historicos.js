export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Aluno_Turma_Historicos', {
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
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    turma_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'Turmas', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    ano_letivo: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    createdAt: { type: Sequelize.DATE, allowNull: false },
    updatedAt: { type: Sequelize.DATE, allowNull: false }
  });
}

export async function down(queryInterface) {
  await queryInterface.dropTable('Aluno_Turma_Historicos');
}
