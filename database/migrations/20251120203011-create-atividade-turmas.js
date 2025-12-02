export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Atividade_Turmas', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    atividade_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'Atividades', key: 'id' },
      onDelete: 'CASCADE'
    },
    turma_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'Turmas', key: 'id' },
      onDelete: 'CASCADE'
    },
    createdAt: { type: Sequelize.DATE, allowNull: false },
    updatedAt: { type: Sequelize.DATE, allowNull: false }
  });
}

export async function down(queryInterface) {
  await queryInterface.dropTable('Atividade_Turmas');
}