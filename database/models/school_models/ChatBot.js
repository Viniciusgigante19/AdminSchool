export default (sequelize, DataTypes) => {
  const ChatBot = sequelize.define('ChatBot', {
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mensagem: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    resposta: {
      type: DataTypes.TEXT
    },
    data_hora: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });

  return ChatBot;
};
