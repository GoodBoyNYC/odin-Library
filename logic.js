const myLibrary = [];
//buttons
const btnNewBook = document.querySelector(".btnBook");
const btnDialog = document.querySelector("dialog"); 
const btnSubmit = document.querySelector(".submit");
//inputs
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const inputRead = document.querySelector("#ifRead");
//Query Selector
const divContainer = document.querySelector(".container");
//grid
// const divBook = document.createElement("div");
// divBook.classList.add("book");
// divContainer.appendChild(divBook);


function Book(title,author,pages,read) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
};

function clearInputs(){
    inputTitle.value='';
    inputAuthor.value='';
    inputPages.value='';
    inputRead.value='';
}

function addBookToLibrary(title,author,pages,read) {
    let aBook = new Book (title,author,pages,read);
    myLibrary.push(aBook);
    clearInputs();
}

// Function to display the books in the library on the page
function displayLibrary() {
    divContainer.innerHTML = ''; // Clear previous display before re-rendering
    myLibrary.forEach((book) => {
        const divBook = document.createElement("div");
        divBook.classList.add("book");

        // Create elements for book details
        const titleElement = document.createElement("p");
        titleElement.textContent = `Title: ${book.title}`;
        divBook.appendChild(titleElement);

        const authorElement = document.createElement("p");
        authorElement.textContent = `Author: ${book.author}`;
        divBook.appendChild(authorElement);

        const pagesElement = document.createElement("p");
        pagesElement.textContent = `Pages: ${book.pages}`;
        divBook.appendChild(pagesElement);

        const readElement = document.createElement("p");
        readElement.textContent = `Read: ${book.read ? "Yes" : "No"}`;
        divBook.appendChild(readElement);

        divContainer.appendChild(divBook);
    });
}

// "Show the dialog" button opens the dialog modally
btnNewBook.addEventListener("click", () => {
    btnDialog.showModal();
});

btnSubmit.addEventListener("click",event => {
    addBookToLibrary(inputTitle.value,inputAuthor.value, inputPages.value,inputRead.value);
    displayLibrary();
})