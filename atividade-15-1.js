const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./aula.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Conectado ao Banco de Dados com Sucesso;');
  });
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Conexão com o Banco de Dados finalizada.');
  });
