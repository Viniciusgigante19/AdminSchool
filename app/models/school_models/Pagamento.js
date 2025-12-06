export default (sequelize, DataTypes) => {
  const Pagamento = sequelize.define('Pagamento', {
    aluno_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    turma_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    valor: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    data_vencimento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    data_pagamento: {
      type: DataTypes.DATEONLY
    },
    status: {
      type: DataTypes.STRING
    },
    tipo_mensalidade: {
      type: DataTypes.STRING
    }
  });

  return Pagamento;
};
