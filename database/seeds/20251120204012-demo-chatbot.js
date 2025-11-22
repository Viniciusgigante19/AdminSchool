export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('ChatBots', [
    {
      usuario_id: 1,
      aluno_id: null,
      mensagem: 'Como faço para criar uma turma?',
      resposta: 'Para criar uma turma, acesse o painel administrativo e clique em "Nova Turma".',
      data_hora: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      usuario_id: 3,
      aluno_id: 1,
      mensagem: 'Como consultar minhas notas?',
      resposta: 'Você pode consultar suas notas na seção "Notas" do seu perfil.',
      data_hora: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      usuario_id: 4,
      aluno_id: 2,
      mensagem: 'Qual é a data de entrega da próxima atividade?',
      resposta: 'A próxima atividade de Redação vence em 05/12/2025.',
      data_hora: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]), {
    ignoreDuplicates: true
  }
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete('ChatBots', null, {});
}