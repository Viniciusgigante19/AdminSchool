export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Alunos', [
    {
      nome: 'João Silva',
      data_nascimento: new Date('2008-05-15'),
      cpf: '55555555555',
      responsavel_nome: 'Maria Silva',
      responsavel_telefone: '11999999999',
      responsavel_email: 'maria@email.com',
      usuario_id: 3,
      turma_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Ana Santos',
      data_nascimento: new Date('2009-03-22'),
      cpf: '44444444444',
      responsavel_nome: 'Carlos Santos',
      responsavel_telefone: '11888888888',
      responsavel_email: 'carlos@email.com',
      usuario_id: 4,
      turma_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]), {
    ignoreDuplicates: true
  }
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete('Alunos', null, {});
}