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
    for (book of myLibrary) {
        const newRow = document.createElement('tr');

        const author = document.createElement('td');
        author.textContent = book.author;
        newRow.appendChild(author);

        const title = document.createElement('td');
        title.textContent = book.title;
        newRow.appendChild(title);

        const pages = document.createElement('td');
        pages.textContent = book.numPages;
        newRow.appendChild(pages);

        const read = document.createElement('td');
        read.textContent = book.isRead ? "Yes" : "No";
        newRow.appendChild(read);

        table.appendChild(newRow);
    }
}

addBookToLibrary("Bernard Placeholder von Longname", "Weshwesh", 128, true);
addBookToLibrary("Cesare Pavese", "Nuit de fête", 622, false);

displayLibrary();
