import DatabaseConnect from "./db/connectDbService.js";

class OptionsValue  {
  static option(option) {

    const objectValue = {
      1: `NOME_LIVRO`,
      2: `AUTOR`,
      3: `ANO_PUB`,
      4: `GENERO`
    };

    const valuesObject = objectValue[option];
    if (valuesObject) {
      return valuesObject;
    }

    throw new Error("Option valid , try 1 and 4 , please.");
  }
}

export default class UpdateBook extends OptionsValue {
  static async updateBook(IDLIVRO, newalue, opcoes) {
    const db = await DatabaseConnect.connect();
    try {
      OptionsValue.Validacoes(opcoes, newalue, IDLIVRO)
      const query = `UPDATE LIVROS SET ${opcoes} = ? WHERE IDLIVRO = ?`
      await db.exec(`BEGIN TRANSACTION`);

      await db.run(query, [
        newalue,
        IDLIVRO
      ])

      await db.exec(`COMMIT`);
    } catch (error) {
      await db.exec(`ROLLBACK`)
      throw new Error(error.message);
    } finally {
      await db.close();
    }
  }
}
