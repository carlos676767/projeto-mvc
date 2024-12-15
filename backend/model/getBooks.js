
import DatabaseConnect from "./db/connectDbService.js";

export default class GetBooks {
  static async getBooks() {
    const db = await DatabaseConnect.connect();
    
    try {
      const getBooksS = await db.all(`SELECT * FROM LIVROS`);

      if (getBooksS.length == 0) {
        throw new Error("there are no books available");
      }

      const getBooksMap = getBooksS.map((char) => ({
        livro: char.NOME_LIVRO,
        autor: char.AUTOR,
        ano_publicacao: char.ANO_PUB,
        genero_livro: char.GENERO,
      }));

      return getBooksMap;
    } catch (error) {
      throw new Error(error);
      
    }finally{
        await db.close()
    }
  }
}
