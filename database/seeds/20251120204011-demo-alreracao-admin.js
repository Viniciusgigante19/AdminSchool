export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Alteracao_Admins', [
    {
      administrador_id: 1,
      usuario_id: 3,
      aluno_id: 1,
      professor_id: null,
      descricao: 'Criado novo usuário para aluno João Silva',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      administrador_id: 1,
      usuario_id: null,
      aluno_id: null,
      professor_id: 1,
      descricao: 'Professor José adicionado à turma 6º A',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]), {
    ignoreDuplicates: true
  }
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete('Alteracao_Admins', null, {});
}