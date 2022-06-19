"use strict"


class Book {
  constructor(author, title, numPages, isRead) {
  // the constructor...
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.isRead = isRead;
  }
}

class Library {
  constructor(books = []){
    this.myLibrary = books;
  }

  addBookToLibrary(author, title, numPages, isRead) {
    // do stuff here
      const newBook = new Book(author, title, numPages, isRead);
      this.myLibrary.push(newBook);
  }

  displayForm() {
    const bookForm = document.querySelector('form');
    bookForm.addEventListener('submit', this.handleForm.bind(this));
  }

  displayLibrary() {
    const table = document.querySelector('tbody');
    table.textContent = '';

    for (const book of this.myLibrary) {
        const newRow = document.createElement('tr');
        newRow.dataset.index = this.myLibrary.indexOf(book);

        const author = document.createElement('td');
        author.textContent = book.author;
        author.className = "author-td";
        newRow.appendChild(author);

        const title = document.createElement('td');
        title.textContent = book.title;
        newRow.appendChild(title);

        const pages = document.createElement('td');
        pages.textContent = book.numPages;
        newRow.appendChild(pages);

        const read = document.createElement('td');
        read.className = "read-td";
        const readBtn = document.createElement('input');
        readBtn.setAttribute("type", "checkbox");
        readBtn.checked = book.isRead;
        readBtn.addEventListener('click', this.updateReadStatus.bind(this));
        read.appendChild(readBtn);
        newRow.appendChild(read);

        const rmBook = document.createElement('td');
        rmBook.className = "rm-td";
        const rmBookBtn = document.createElement('button');
        rmBookBtn.textContent = "x";
        rmBookBtn.addEventListener('click', this.removeBook.bind(this));
        rmBook.appendChild(rmBookBtn);
        newRow.appendChild(rmBook);

        table.appendChild(newRow);
    }
  }

  handleForm(e) {
    console.log("HELP", this)
    const form = e.target;
  
    const author = form.author.value;
  
    const title = form.title.value;
  
    const nbPages = Number(form["nb-pages"].value);
  
    const read = form.read.checked;
  
    form.reset();
    this.addBookToLibrary(author, title, nbPages, read);
    this.displayLibrary();
    event.preventDefault();
  }

  removeBook(e) {
    const row = e.srcElement.parentNode.parentNode;
    const index = row.dataset.index;
    this.myLibrary.splice(index, 1);
    this.displayLibrary();
  }

  updateReadStatus(e) {
    const row = e.srcElement.parentNode.parentNode;
    const index = row.dataset.index;
    this.myLibrary[index].isRead = e.srcElement.checked;
    this.displayLibrary();
  }

}

let theLibrary = new Library();


theLibrary.addBookToLibrary("Bernard Placeholder von Longname", "My Life and Works and Long Titles", 128, true);
theLibrary.addBookToLibrary("Mark Twain", "Huckleberry Finn", 622, false);
theLibrary.displayForm();
theLibrary.displayLibrary();
