export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Aluno_Turma_Historicos', [
    {
      aluno_id: 1,
      turma_id: 1,
      ano_letivo: 2025,
    //status: 'ativo', para adicionar é necesario criar outra tabela
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      aluno_id: 2,
      turma_id: 1,
      ano_letivo: 2025,
     // status: 'ativo',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]), {
    ignoreDuplicates: true
  }
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete('Aluno_Turma_Historicos', null, {});
}