var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        var bookList = JSON.parse(this.responseText);
        displayBooks(bookList.result);
    }
});

xhr.open("GET", "https://api.collectapi.com/book/newBook");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("authorization", "apikey 7x0kRaUFEYltA800xas1gw:7lOeDTGVqmWgMynvC9lXXP");

xhr.send(data);

function displayBooks(books) {
    var bookListContainer = document.getElementById("bookList");

    books.forEach(function (book) {
        var bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        var bookImage = document.createElement("img");
        bookImage.src = book.book_image;
        bookImage.alt = book.book_name;

        var bookTitle = document.createElement("h2");
        bookTitle.textContent = "Title: " + book.book_name;

        var bookAuthor = document.createElement("p");
        bookAuthor.textContent = "Author: " + book.author_name;

        var bookGenre = document.createElement("p");
        bookGenre.textContent = "Genre: " + book.genre;

        var bookPublished = document.createElement("p");
        bookPublished.textContent = "Published: " + book.published;

        var bookDescription = document.createElement("p");
        bookDescription.textContent = "Description: " + book.description;

        bookDiv.appendChild(bookImage);
        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookGenre);
        bookDiv.appendChild(bookPublished);
        bookDiv.appendChild(bookDescription);

        bookListContainer.appendChild(bookDiv);
    });
}
