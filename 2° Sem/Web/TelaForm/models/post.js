const db = require("./banco")

const Agendamentos = db.sequelize.define("agendamentos" , {
    nome:{
        type: db.Sequelize.STRING
    },
    telefone: {
        type: db.Sequelize.STRING
    },
    origem:{
        type: db.Sequelize.SMALLINT
    },
    data: {
        type: db.Sequelize.STRING
    },
    observacao: {
        type: db.Sequelize.STRING
    },
})
// Agendamentos.sync()

module.exports = Agendamentos