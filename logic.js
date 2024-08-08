const myLibrary = [];
const btnNewBook = document.querySelector(".btnBook");
const dialog = document.querySelector("dialog"); 

// "Show the dialog" button opens the dialog modally
btnNewBook.addEventListener("click", () => {
    console.log("Ok");
  dialog.showModal();
});


function Book() {
    title: 'Book Name';
    author: 'Name';
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