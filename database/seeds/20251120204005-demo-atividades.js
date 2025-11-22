export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Atividades', [
    {
      titulo: 'Trabalho de Matemática',
      descricao: 'Resolver exercícios de frações',
      data_entrega: new Date('2025-11-30'),
      arquivo_anexo: 'math_exercises.pdf',
      professor_id: 1,
      administrador_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      titulo: 'Redação sobre Sustentabilidade',
      descricao: 'Escrever redação com mínimo 500 palavras',
      data_entrega: new Date('2025-12-05'),
      arquivo_anexo: null,
      professor_id: 2,
      administrador_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]), {
    ignoreDuplicates: true
  }
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete('Atividades', null, {});
}