export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Turmas', {
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
    serie: {
      type: Sequelize.STRING,
      allowNull: false
    },
    ano_letivo: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    capacidade: {
      type: Sequelize.INTEGER,
      defaultValue: 30
    },
    professor_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'Professors', key: 'id' },
      onDelete: 'SET NULL'
    },
    administrador_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'Administradores', key: 'id' },
      onDelete: 'SET NULL'
    },
    createdAt: { type: Sequelize.DATE, allowNull: false },
    updatedAt: { type: Sequelize.DATE, allowNull: false }
  });
}

export async function down(queryInterface) {
  await queryInterface.dropTable('Turmas');
}