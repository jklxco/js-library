let myLibrary = [];

function Book(author, title, numberOfPages, readStatus) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.readStatus = readStatus;
}

Book.prototype.toggleRead = function() {
    if (this.readStatus === 'Yes') {
        this.readStatus = 'No';
    } else {
        this.readStatus = 'Yes';
    }
};

function addBookToLibrary() {

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;
    const book = new Book(author, title, pages, read);
    myLibrary.push(book);
    
}

function addBookToDOM() {
    document.getElementById("books").innerHTML = '';
    for (i = 0 ; i < myLibrary.length ; i ++) {
        let div = document.createElement("div");
        div.classList.add("card");
        div.setAttribute('id', 'card_'+i);
        let para = document.createElement("p");
        para.innerHTML = "Title: " + myLibrary[i].title;
        div.appendChild(para)
        para = document.createElement("p");
        para.innerHTML = "Author: " + myLibrary[i].author;
        div.appendChild(para)
        para = document.createElement("p");
        para.innerHTML = "Page Length: " + myLibrary[i].numberOfPages;
        div.appendChild(para)
        para = document.createElement("p");
        para.innerHTML = "Read: " + myLibrary[i].readStatus;
        div.appendChild(para)

        let btnRead = document.createElement("button");
        btnRead.classList.add("btn-toggle-read");
        btnRead.innerHTML = "Toggle read";
        div.appendChild(btnRead);

        btnRead.addEventListener('click', (e) => {
            const index = parseInt(e.path[1].id.slice(-1));
            console.log(e);
            console.log(myLibrary[index]);
            myLibrary[index].toggleRead();
        });

        let btnRemoveBook = document.createElement("button");
        btnRemoveBook.classList.add("btn-remove-book");
        btnRemoveBook.innerHTML = "x";
        div.appendChild(btnRemoveBook);

        btnRemoveBook.addEventListener('click', (e) => {
            e.path[1].remove();
            const arrayIndex = parseInt(e.path[1].id.slice(-1));
            myLibrary.splice(arrayIndex, 1);
        });

        document.getElementById("books").appendChild(div);

    }
}



const btnSubmit = document.getElementById('btn-submit');
btnSubmit.addEventListener('click', () => {
    //Add validation
    addBookToLibrary() 
    addBookToDOM();
    document.getElementById("new-book-form").style.display="none";
});

const btnCancel = document.getElementById('btn-cancel');
btnCancel.addEventListener('click', () => {
    document.getElementById("new-book-form").style.display="none";
});

const btnNewBook = document.getElementById('new-book');
btnNewBook.addEventListener('click', () => {
    document.getElementById("new-book-form").style.display="flex";
});


/*  
    * Add a button on each book’s display to change its read status.
        To facilitate this you will want to create the function that
        toggles a book’s read status on your Book prototype instance.
*/

