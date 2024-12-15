import DeleteBook from "../model/deleteBook.js";
import GetBooks from "../model/getBooks.js";
import InsertBook from "../model/insertBook.js";
import UpdateBook from "../model/updateBook.js";
import Validacoes from "../utils/validacoesJs.js";

export default class Books {
  static async productInsert(req, res) {
    try {
      const { NOME_LIVRO, autor, GENERO, ANO_PUB } = req.body;
      await InsertBook.main(NOME_LIVRO, autor, GENERO, ANO_PUB);
      res.status(200).send({ msg: `book insert sucess` });
    } catch (error) {
      res.status(400).send({ msg: error });
    }
  }


  static async deleteBook(req, res) {
    try {
      const { id } = req.params;
      Validacoes.valideForDelete(id);
      await DeleteBook.deleteBook(id);
      res.status(200).send({ msg: `book delete sucess`, delete: true });
    } catch (error) {
      res.status(400).send({ msg: error });
    }
  }
  

  static async UpdateBook(req, res) {
    try {
      const { IDLIVRO, newalue, opcoes } = req.body;
      Validacoes.Validacoes(IDLIVRO, newalue, opcoes);
      await UpdateBook.updateBook(IDLIVRO, newalue, opcoes);
      res.status(200).send({ msg: `Update book` });
    } catch (error) {
      res.status(400).send({ err: error });
    }
  }


  static async getBooks(req, res) {
    try {
      const getBooks =  await GetBooks.getBooks();
     
      
      res.status(200).send({ books: getBooks });
    } catch (error) {
      console.log(error.message);
      
      res.status(400).send({ err: error.message });
    }
  }
}
