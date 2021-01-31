const pool = require("../db");

let User = function(data) {
    this.data = data;
    this.errors = [];
};

User.prototype.create = function() {
    console.log(this.data);

    const query = 'INSERT INTO usuarios(nome, username, nascimento, senha) values($1, $2, $3, $4)';
    const values = [this.data.nome, this.data.username, this.data.nascimento, this.data.senha];
    return new Promise((resolve, reject) => {
        pool.query(query, values, (error, results) => {
            if (error) {
                reject("Usuário não inserido");
            } else {
                resolve("Usuário inserido com sucesso!");
            }
        });
    });
};

module.exports = User;