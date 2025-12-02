export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Administradores', [
    {
      nome: 'Administrador Principal',
      email: 'admin@school.com',
      senha: '123456',
      nivel_acesso: 'total',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Admin Assistente',
      email: 'admin2@school.com',
      senha: '123456',
      nivel_acesso: 'moderado',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], { ignoreDuplicates: true });
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete('Administradores', null, {});
}
