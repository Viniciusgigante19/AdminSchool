export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Atividade_Turmas', [
    {
      atividade_id: 1,
      turma_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      atividade_id: 2,
      turma_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]), {
    ignoreDuplicates: true
  }
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete('Atividade_Turmas', null, {});
}