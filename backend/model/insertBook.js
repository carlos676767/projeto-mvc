import DatabaseConnect from "./db/connectDbService.js";

class ValideItens {
  static itesValide(NOME_LIVRO, AUTOR, GENERO, ANO_PUB) {
    if (NOME_LIVRO.length < 5) {
      throw new Error("the book must have at least 5 characters");
    }

    if (/[^a-zA-Z0-9]/.test(NOME_LIVRO)) {
      throw new Error("The book name cannot have special characters");
    }

    if (AUTOR.length < 5) {
      throw new Error("the autot must have at least 5 characters");
    }

    if (/[^a-zA-Z0-9]/.test(AUTOR)) {
      throw new Error("The AUTOR name cannot have special characters");
    }

    if (
      typeof AUTOR !== `string` ||
      typeof NOME_LIVRO !== `string` ||
      typeof GENERO !== `string`
    ) {
      throw new Error("the name and gender cannot be numbers");
    }

    if (!NOME_LIVRO || !AUTOR || !GENERO || !ANO_PUB) {
      throw new Error("all fields need to be filled in");
    }
  }
}

export default class InsertBook extends ValideItens {
  static async main(NOME_LIVRO, autor, ANO_PUB, GENERO) {
    const database = await DatabaseConnect.connect();
    try {
      InsertBook.itesValide(NOME_LIVRO, autor, GENERO, ANO_PUB);
      await database.exec(`BEGIN TRANSACTION`);
      const getBook = await database.get(`SELECT livros FROM WHERE ID_LIVRO = ?`,[NOME_LIVRO] );

      if (getBook) {
        throw new Error("The book provided already exists in our database");
      }

      const query = `INSERT INTO LIVROS(NOME_LIVRO, autor, GENERO, ANO_PUB) VALUES(?, ?,?,?)`;

      await database.run(query, [
        NOME_LIVRO,
        autor,
        GENERO,
        ANO_PUB,
      ]);
      await database.exec(`COMMIT`)
    } catch (error) {
      await database.exec(`ROLLBACK`)
      throw new Error(error.message);
    
    } finally {
      await database.close();
    }
  }
}
