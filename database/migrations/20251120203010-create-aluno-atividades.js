export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Aluno_Atividades', {
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
    atividade_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'Atividades', key: 'id' },
      onDelete: 'CASCADE'
    },
    nota: {
      type: Sequelize.DECIMAL(5, 2),
      allowNull: true
    },
    status: {
      type: Sequelize.STRING,
      defaultValue: 'pendente'
    },
    createdAt: { type: Sequelize.DATE, allowNull: false },
    updatedAt: { type: Sequelize.DATE, allowNull: false }
  });
}

export async function down(queryInterface) {
  await queryInterface.dropTable('Aluno_Atividades');
}