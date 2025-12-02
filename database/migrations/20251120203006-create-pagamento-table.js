export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Pagamentos', {
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
    administrador_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'Administradores', key: 'id' },
      onDelete: 'SET NULL'
    },
    valor: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    },
    data_vencimento: {
      type: Sequelize.DATE,
      allowNull: true
    },
    data_pagamento: {
      type: Sequelize.DATE,
      allowNull: true
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false
    },
    tipo_mensalidade: {
      type: Sequelize.STRING,
      allowNull: true
    },
    createdAt: { type: Sequelize.DATE, allowNull: false },
    updatedAt: { type: Sequelize.DATE, allowNull: false }
  });
}

export async function down(queryInterface) {
  await queryInterface.dropTable('Pagamentos');
}