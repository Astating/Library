"use strict"

let myLibrary = [];

function Book(author, title, numPages, isRead) {
  // the constructor...
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.isRead = isRead;
}

function addBookToLibrary(author, title, numPages, isRead) {
  // do stuff here
    const newBook = new Book(author, title, numPages, isRead);
    myLibrary.push(newBook);
}

function displayLibrary() {
    const table = document.querySelector('tbody');
    table.textContent = '';

    for (const book of myLibrary) {
        const newRow = document.createElement('tr');
        newRow.dataset.index = myLibrary.indexOf(book);

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
        readBtn.addEventListener('click', updateReadStatus);
        read.appendChild(readBtn);
        newRow.appendChild(read);

        const rmBook = document.createElement('td');
        rmBook.className = "rm-td";
        const rmBookBtn = document.createElement('button');
        rmBookBtn.textContent = "x";
        rmBookBtn.addEventListener('click', removeBook);
        rmBook.appendChild(rmBookBtn);
        newRow.appendChild(rmBook);

        table.appendChild(newRow);
    }
}

function handleForm(e) {
  const form = e.target;

  const author = form.author.value;

  const title = form.title.value;

  const nbPages = Number(form["nb-pages"].value);

  const read = form.read.checked;

  form.reset();
  addBookToLibrary(author, title, nbPages, read);
  displayLibrary();
  event.preventDefault();
}

function removeBook(e) {
  const row = e.srcElement.parentNode.parentNode;
  const index = row.dataset.index;
  myLibrary.splice(index, 1);
  displayLibrary();
}

function updateReadStatus(e) {
  const row = e.srcElement.parentNode.parentNode;
  const index = row.dataset.index;
  myLibrary[index].isRead = e.srcElement.checked;
  displayLibrary();
}


const bookForm = document.querySelector('form');
bookForm.addEventListener('submit', handleForm);


addBookToLibrary("Bernard Placeholder von Longname", "My Life and Works and Long Titles", 128, true);
addBookToLibrary("Mark Twain", "Huckleberry Finn", 622, false);

displayLibrary();
