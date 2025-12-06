import { sequelize } from '../../config/sequelize.js';
import { DataTypes } from 'sequelize';

import AlunoModel from './school_models/Alunos.js';
import ProfessorModel from './school_models/Professor.js';
import AdministradorModel from './school_models/Administrador.js';
import TurmaModel from './school_models/Turma.js';
import AtividadeModel from './school_models/Atividade.js';
import PresencaModel from './school_models/Presenca.js';
import PagamentoModel from './school_models/Pagamento.js';
import UsuarioModel from './school_models/Usuario.js';
import ChatBotModel from './school_models/ChatBot.js';
// Import table n-n
import AlteracaoAdminModel from './school_models/join_table/AlteracaoAdmin.js';
import AlunoAtividadeModel from './school_models/join_table/AlunoAtividade.js';
import AtividadeTurmaModel from './school_models/join_table/AtividadeTurma.js';
import AlunoTurmaHistoricoModel from './school_models/join_table/AlunoTurmaHistorico.js';

const db = {};
db.sequelize = sequelize;

// Registra os modelos em models no DB
db.Aluno = AlunoModel(sequelize, DataTypes);
db.Professor = ProfessorModel(sequelize, DataTypes);
db.Administrador = AdministradorModel(sequelize, DataTypes);
db.Turma = TurmaModel(sequelize, DataTypes);
db.Atividade = AtividadeModel(sequelize, DataTypes);
db.Presenca = PresencaModel(sequelize, DataTypes);
db.Pagamento = PagamentoModel(sequelize, DataTypes);
db.Usuario = UsuarioModel(sequelize, DataTypes);
db.ChatBot = ChatBotModel(sequelize, DataTypes);
db.AlteracaoAdmin = AlteracaoAdminModel(sequelize, DataTypes);
db.AlunoAtividade = AlunoAtividadeModel(sequelize, DataTypes);
db.AtividadeTurma = AtividadeTurmaModel(sequelize, DataTypes);
db.AlunoTurmaHistorico = AlunoTurmaHistoricoModel(sequelize, DataTypes);

// Associações (se existirem)
Object.values(db).forEach(model => {
  if (model.associate) {
    model.associate(db);
  }
});

export default db;

