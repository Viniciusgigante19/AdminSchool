export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Professors', [
    {
      nome: 'Professor José Silva',
      cpf: '12345678901',
      email: 'jose@school.com',
      telefone: '11977777777',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Professora Maria Santos',
      cpf: '98765432101',
      email: 'maria@school.com',
      telefone: '11966666666',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]), {
    ignoreDuplicates: true
  }
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete('Professors', null, {});
}