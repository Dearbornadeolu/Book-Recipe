// Define a collection of books
const books = [
    {
        book_name: "Book 1",
        author_name: "Author 1",
        genre: "Fiction",
        published: "2022",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        book_image: "book1.jpg",
    },
    {
        book_name: "Book 2",
        author_name: "Author 2",
        genre: "Non-fiction",
        published: "2021",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        book_image: "book2.jpg",
    },
    {
        book_name: "Book 3",
        author_name: "Author 3",
        genre: "Mystery",
        published: "2023",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        book_image: "book3.jpg",
    },{
        book_name: "Book 4",
        author_name: "Author 4",
        genre: "Science Fiction",
        published: "2020",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        book_image: "book4.jpg",
    },
    {
        book_name: "Book 5",
        author_name: "Author 5",
        genre: "Fantasy",
        published: "2019",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        book_image: "book5.jpg",
    },
    {
        book_name: "Book 6",
        author_name: "Author 6",
        genre: "Fantasy",
        published: "2013",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        book_image: "book6.jpg",
    },
    {
            book_name: "Book 7",
            author_name: "Author 8",
            genre: "Gothic",
            published: "2063",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            book_image: "book7.jpg",
    },
    {
            book_name: "Book 8",
            author_name: "Author 8",
            genre: "Gothic",
            published: "063",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            book_image: "book8.jpg",
    }
];

// Function to display books
function displayBooks() {
    const bookListContainer = document.getElementById("bookList");

    books.forEach((book) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        const bookImage = document.createElement("img");
        bookImage.src = book.book_image;
        bookImage.alt = book.book_name;

        const bookTitle = document.createElement("h2");
        bookTitle.textContent = "Title: " + book.book_name;

        const bookAuthor = document.createElement("p");
        bookAuthor.textContent = "Author: " + book.author_name;

        const bookGenre = document.createElement("p");
        bookGenre.textContent = "Genre: " + book.genre;

        const bookPublished = document.createElement("p");
        bookPublished.textContent = "Published: " + book.published;

        const bookDescription = document.createElement("p");
        bookDescription.textContent = "Description: " + book.description;

        const bookReadmore = document.createElement("a");
        bookReadmore.textContent = "Read More";

        bookDiv.appendChild(bookImage);
        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookGenre);
        bookDiv.appendChild(bookPublished);
        bookDiv.appendChild(bookDescription);
        bookDiv.appendChild(bookReadmore);

        bookListContainer.appendChild(bookDiv);
    });
}

// Call the function to display books when the page loads
window.onload = displayBooks;
