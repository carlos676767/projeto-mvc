class BookValues {
  static #bookName = document.getElementById("book-name").value;
  static #bookAuthor = document.getElementById("book-author").value;
  static #bookYear = document.getElementById("book-year").value;
  static #bookGenre = document.getElementById("book-genre").value;

  static objectValues() {
    return JSON.stringify({
      NOME_LIVRO: this.#bookName.trim(),
      autor: this.#bookAuthor.trim(),
      GENERO: this.#bookGenre.trim(),
      ANO_PUB: this.#bookYear.trim(),
    });
  }
}

class InsertBook extends BookValues {
  static async insertItem() {
    try {
      const sendItem = await fetch(`http://localhost:8080/book/insert`, {
        method: `POST`,
        headers: {
          "Content-Type": "application/json",
        },
        body: this.objectValues(),
      });

      const response = await sendItem.json();

      if (sendItem.ok || sendItem.status == 200) {
        return alert(`item inserido com sucess`);
      }
      alert(`err ao cadastrar tente novamente.`);
    } catch (error) {
      alert(`Err ineseprado tente novamente.`);
    }
  }
}

class ButtonEvent extends InsertBook {
  static #button = document.querySelector(`button`);

  static buttonEvent() {
    this.#button.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.insertItem();
    });
  }
}

ButtonEvent.buttonEvent();
