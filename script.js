const newBook = document.querySelector(".new-book");
const cancel = document.querySelector("#cancel");
const enter = document.querySelector("#enter");
const form = document.querySelector("#myForm");
let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.displayInfo = function() {
  const bookList = document.querySelector("#book-list");
  bookList.textContent = " ";
  let bottom = 140;
  for(let i = 0; i < myLibrary.length; i++) {
    const bookRow = document.createElement("tr");
    bookRow.classList.add("book-info");
    bookList.appendChild(bookRow);
    const bookTitle = document.createElement("td");
    bookTitle.textContent = myLibrary[i].title;
    bookRow.appendChild(bookTitle);
    const bookAuthor = document.createElement("td");
    bookAuthor.textContent = myLibrary[i].author;
    bookRow.appendChild(bookAuthor);
    const bookPages = document.createElement("td");
    bookPages.textContent = myLibrary[i].pages;
    bookRow.appendChild(bookPages);
    const bookRead = document.createElement("td");
    bookRead.textContent = myLibrary[i].read;
    bookRow.appendChild(bookRead);
    bottom += 35;
    form.style.bottom = `${bottom}px`;
  }
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  book.displayInfo();
}


newBook.addEventListener("click", () => form.style.display = "block");
cancel.addEventListener("click", () => form.style.display = "none");
enter.addEventListener("click", () => {
  const titleInput = document.querySelector("#title");
  const authorInput = document.querySelector("#author");
  const pagesInput = document.querySelector("#pages");
  const readInputYes = document.querySelector("#yes");
  const readInputNo = document.querySelector("#no");
  const formContainer = document.querySelector("form");
  if (readInputYes.checked){
    addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, readInputYes.value);
  }
  else {
    addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, readInputNo.value);
  }
  formContainer.reset();
  form.style.display = "none";
});