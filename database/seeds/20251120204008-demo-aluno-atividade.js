export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Aluno_Atividades', [
    {
      aluno_id: 1,
      atividade_id: 1,
      nota: 8.5,
      status: 'entregue',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      aluno_id: 2,
      atividade_id: 1,
      nota: null,
      status: 'pendente',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      aluno_id: 1,
      atividade_id: 2,
      nota: null,
      status: 'pendente',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]), {
    ignoreDuplicates: true
  }
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete('Aluno_Atividades', null, {});
}