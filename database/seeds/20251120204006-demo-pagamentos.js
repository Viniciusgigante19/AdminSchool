export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Pagamentos', [
    {
      aluno_id: 1,
      turma_id: 1,
      administrador_id: 1,
      valor: 500.00,
      data_vencimento: new Date('2025-12-10'),
      data_pagamento: new Date('2025-11-20'),
      status: 'pago',
      tipo_mensalidade: 'mensal',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      aluno_id: 2,
      turma_id: 1,
      administrador_id: 1,
      valor: 500.00,
      data_vencimento: new Date('2025-12-10'),
      data_pagamento: null,
      status: 'pendente',
      tipo_mensalidade: 'mensal',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]), {
    ignoreDuplicates: true
  }
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete('Pagamentos', null, {});
}