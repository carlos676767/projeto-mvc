import express from "express";
import Books from "../controller/booksController.js";
const router = express.Router()
/**
 * @swagger
 * /books/insert:
 *   post:
 *     summary: Adicionar um novo livro
 *     description: Insere um novo livro na base de dados, após validações dos dados fornecidos.
 *     tags:
 *       - Livros
 *     parameters:
 *       - in: body
 *         name: book
 *         description: Dados do livro a ser inserido.
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - NOME_LIVRO
 *             - AUTOR
 *             - GENERO
 *             - ANO_PUB
 *           properties:
 *             NOME_LIVRO:
 *               type: string
 *               description: O nome do livro.
 *               example: "Dom Casmurro"
 *             AUTOR:
 *               type: string
 *               description: O nome do autor do livro.
 *               example: "Machado de Assis"
 *             GENERO:
 *               type: string
 *               description: O gênero do livro.
 *               example: "Romance"
 *             ANO_PUB:
 *               type: string
 *               description: O ano de publicação do livro.
 *               example: "1900"
 *     responses:
 *       201:
 *         description: Livro inserido com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Livro inserido com sucesso"
 *       400:
 *         description: Erro de validação dos dados fornecidos (campos inválidos ou ausentes).
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "O livro já existe na base de dados"
 *       500:
 *         description: Erro interno ao tentar salvar o livro no banco de dados.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Erro ao salvar no banco de dados."
 */
router.post(`/book/insert`, Books.productInsert)
router.delete(`/deleteBook/:id`, Books.deleteBook)


export default router