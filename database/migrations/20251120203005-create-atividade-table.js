export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Atividades', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    titulo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    descricao: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    data_entrega: {
      type: Sequelize.DATE,
      allowNull: true
    },
    arquivo_anexo: {
      type: Sequelize.STRING,
      allowNull: true
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
  await queryInterface.dropTable('Atividades');
}