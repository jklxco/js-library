let myLibrary = [];

function Book(author, title, numberOfPages, readStatus) {
  // the constructor...
  this.author = author;
  this.title = title;
  this.numberOfPages = numberOfPages;
  this.readStatus = readStatus;
}

function addBookToLibrary() {
    // author, title, number of pages, whether it’s been read
    /*let author = prompt('Author: ');
    let title = prompt('Book Title: ');
    let numberOfPages = prompt('Number of pages: ');
    let readStatus = prompt('Read? ');
    */
    author = "Jesus Christ";
    title = "The Bible";
    numberOfPages = "123";
    readStatus = "No";

    const book = new Book(author, title, numberOfPages, readStatus);
    myLibrary.push(book);
}

function addBookToDOM() {
    console.log(myLibrary);
    for (const book in myLibrary) {
        let div = document.createElement("div");
        div.classList.add("card");
        
        let para = document.createElement("p");
        para.innerHTML = "Title: " + this.title;
        div.appendChild(para)

        para = document.createElement("p");
        para.innerHTML = "Author: " + this.author;
        div.appendChild(para)

        para = document.createElement("p");
        para.innerHTML = "Page Length: " + this.numberOfPages;
        div.appendChild(para)

        para = document.createElement("p");
        para.innerHTML = "Read: " + this.readStatus;
        div.appendChild(para)

        document.getElementById("books").appendChild(div);
    }
}

addBookToLibrary();
addBookToLibrary();
addBookToDOM();

/*  
    * Add a “NEW BOOK” button that brings up a form allowing users to input the
        details for the new book: author, title, number of pages, whether it’s
        been read and anything else you might want.
    
    * Add a button on each book’s display to remove the book from the library.
        You will need to associate your DOM elements with the actual book
        objects in some way. One easy solution is giving them a data-attribute
        that corresponds to the index of the library array.

    * Add a button on each book’s display to change its read status.
        To facilitate this you will want to create the function that
        toggles a book’s read status on your Book prototype instance.
*/

