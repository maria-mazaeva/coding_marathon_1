import React, { useState } from "react";
import "./BookCollectionManager.css";
import Book from "./Book";


function BookCollectionManager() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState(""); 
  const [language, setLanguage] = useState("");
  const [edition, setEdition] = useState("");
  const [pages, setPages] = useState("");
  const [rating, setRating] = useState("");
  const [year, setYear] = useState("");


  // Handle input change for title
  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  // Handle input change for author
  function handleAuthorChange(event) {
    setAuthor(event.target.value);
  }
  // Handle input change for genre
  function handleGenreChange(event) {
    setGenre(event.target.value);
  }
  
  // Handle input change for language
  function handleLanguageChange(event) {
    setLanguage(event.target.value);
  }

  // Handle input change for edition
  function handleEditionChange(event) {
    setEdition(event.target.value);
  }

  // Handle input change for pages
  function handlePagesChange(event) {
    setPages(event.target.value);
  }

  // Handle input change for rating
  function handleRatingChange(event) {
    setRating(event.target.value);
  }

  // Handle input change for year
  function handleYearChange(event) {
    setYear(event.target.value);
  }


  // Add a new book to the list
  function addBook() {
    const trimmedTitle = title.trim();
    const trimmedAuthor = author.trim();
    const trimmedGenre = genre.trim();
    const trimmedLanguage = language.trim();
    const trimmedEdition = edition.trim();

    // Validate that all fields are filled
    if (trimmedTitle === "" || trimmedAuthor === "" || trimmedGenre === "" || trimmedLanguage === "" || trimmedEdition === "" || pages === "" || rating === "" || year === "") {
      alert("All fields are required.");
      return;
    }
  
    //Set the new book to the books array
    setBooks((b) => [...b,
      {
        title: trimmedTitle,
        author: trimmedAuthor,
        genre: trimmedGenre,
        language: trimmedLanguage,
        edition: trimmedEdition,
        pages,
        rating,
        year,
      },
    ]);

    // Clear input fields after adding a book
    setTitle("");
    setAuthor("");
    setGenre("");
    setLanguage("");
    setEdition("");
    setPages("");
    setRating("");
    setYear("");
  }


  // Delete a book from the list
  function deleteBook(index) {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  }

  return (
    <div className="app-container">
      <h1>Book Collection Manager</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter book title..."
          value={title}
          onChange={handleTitleChange}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Enter author name..."
          value={author}
          onChange={handleAuthorChange}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Enter genre..."
          value={genre}
          onChange={handleGenreChange}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Enter language..."
          value={language}
          onChange={handleLanguageChange}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Enter edition..."
          value={edition}
          onChange={handleEditionChange}
          className="input-field"
        />
        <input
          type="number"
          placeholder="Enter number of pages..."
          value={pages}
          onChange={handlePagesChange}
          className="input-field"
        />
        <input
          type="number"
          placeholder="Enter rating..."
          value={rating}
          onChange={handleRatingChange}
          className="input-field"
        />
        <input
          type="number"
          placeholder="Enter year..."
          value={year}
          onChange={handleYearChange}
          className="input-field"
        />
        <button onClick={addBook} className="add-button">
          Add Book
        </button>
      </div>

      <div className="books-section">
        <h2>Your Books ({books.length})</h2>
        {books.length === 0 ? (
          <p className="empty-message">No books yet. Add one to get started!</p>
        ) : (
          <ol className="books-list">
            {books.map((book, index) => (
              <Book className="book-item"
                key={index}
                title={book.title}
                author={book.author}
                genre={book.genre}
                language={book.language}
                edition={book.edition}
                pages={book.pages}
                rating={book.rating}
                year={book.year}
                onDelete={() => deleteBook(index)}
              />  
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

export default BookCollectionManager;