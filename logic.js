const myLibrary = [];

function Book() {
    author: 'Name';
    title: 'Book Name';
    pages: 0;
    read: false;
};

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary() {
    myLibrary.forEach(book =>
        console.log(`${book.author}, ${book.title}, ${book.pages}, ${book.read}`)
    )
};