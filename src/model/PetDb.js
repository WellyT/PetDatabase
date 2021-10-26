const db = require('../database/database')

const PetDb = db.sequelize.define('PetDbs', {
  nome: {
    type: db.DataTypes.STRING,
    allowNull: false,

  },
  idade: {
    type: db.DataTypes.INTEGER,
    allowNull: false

  },
  pet: {
    type: db.DataTypes.STRING,
    allowNull: false
  },
  raca: {
    type: db.DataTypes.STRING,
    allowNull: false
  },
  nomeDono: {
    type: db.DataTypes.STRING,
    allowNull: false
  },
  contatoDono: {
    type: db.DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});
module.exports = PetDb

//Comentar linha 26 após a criação da tabela, pois ela recria a tabela
PetDb.sync({})