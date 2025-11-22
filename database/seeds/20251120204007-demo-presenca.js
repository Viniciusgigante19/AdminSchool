export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Presencas', [
    {
      aluno_id: 1,
      turma_id: 1,
      professor_id: 1,
      data: new Date('2025-11-20'),
      status: 'presente',
      justificativa: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      aluno_id: 2,
      turma_id: 1,
      professor_id: 1,
      data: new Date('2025-11-20'),
      status: 'ausente',
      justificativa: 'Doença',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      aluno_id: 1,
      turma_id: 1,
      professor_id: 1,
      data: new Date('2025-11-21'),
      status: 'presente',
      justificativa: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]), {
    ignoreDuplicates: true
  }
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete('Presencas', null, {});
}