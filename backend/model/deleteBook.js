import DatabaseConnect from "./db/connectDbService.js";

 export default class DeleteBook  {
  static async deleteBook(id) {
    const database = await DatabaseConnect.connect();
    try {
      DeleteBook.Validacoes(id);
      await database.exec(`BEGIN TRANSACTION`);
      const { changes } = await database.run(
        `DELETE FROM LIVROS WHERE ID_LIVRO = ?`,
        [id]
      );

      if (changes === 0) {
        throw new Error("Id invalid");
      }

      await database.exec(`COMMIT`);
    } catch (error) {
      await database.exec(`ROLLBACK`)
      return error
    } finally {
      await database.close();
    }
  }
}
