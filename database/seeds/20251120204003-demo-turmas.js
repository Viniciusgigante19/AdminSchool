export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Turmas', [
    {
      nome: '6º A',
      serie: '6',
      ano_letivo: 2025,
      capacidade: 30,
      professor_id: 1,
      administrador_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: '7º B',
      serie: '7',
      ano_letivo: 2025,
      capacidade: 28,
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
  await queryInterface.bulkDelete('Turmas', null, {});
}