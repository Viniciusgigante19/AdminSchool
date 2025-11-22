export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Usuarios', [
    {
      username: 'admin',
      senha: '123456',
      tipo_usuario: 'administrador',
      nivel_acesso: 'total',
      status: 'ativo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'professor1',
      senha: '123456',
      tipo_usuario: 'professor',
      nivel_acesso: 'moderado',
      status: 'ativo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'aluno1',
      senha: '123456',
      tipo_usuario: 'aluno',
      nivel_acesso: 'limitado',
      status: 'ativo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'aluno2',
      senha: '123456',
      tipo_usuario: 'aluno',
      nivel_acesso: 'limitado',
      status: 'ativo',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]), {
    ignoreDuplicates: true
  }
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete('Usuarios', null, {});
}