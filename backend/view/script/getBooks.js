class GetBoks {
  static async getBoks() {
    try {
      const book = await fetch(`http://localhost:8080/getBook`);
      const response = await book.json();

      if (book.status == 200 || book.ok) {
        return response.books;
      }

      alert(response);
    } catch (error) {
      alert(error);
    }
  }
}

class ViewBooks extends GetBoks {
  static tbody = document.getElementById(`book-list`);
  static async view() {
    const itens = await this.getBoks();

    itens.forEach((char) => {
      const { livro, autor, ano_publicacao, genero_livro } = char;
      this.tbody.innerHTML += ` <tr>
        <td>${livro}</td>
        <td>${autor}</td>
        <td>${ano_publicacao}</td>
        <td>${genero_livro}</td>
        </tr>`;
    });
  }
}

ViewBooks.view();
