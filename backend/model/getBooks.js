
import DatabaseConnect from "./db/connectDbService";

export default class GetBooks {
  static async getBooks() {
    const db = await DatabaseConnect.connect();
    try {
      const getBooks = await db.all();

      if (getBooks.length == 0) {
        throw new Error("there are no books available");
      }

      const getBooksMap = getBooks.map((char) => ({
        livro: char.NOME_LIVRO,
        autor: char.AUTOR,
        ano_publicacao: char.ANO_PUB,
        genero_livro: char.GENERO,
      }));

      return getBooksMap;
    } catch (error) {
      throw new Error(error.message);
    }finally{
        await db.close()
    }
  }
}
