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

  function handleGenreChange(event) {
    setGenre(event.target.value);
  }

  function handleLanguageChange(event) {
    setLanguage(event.target.value);
  }

  function handleEditionChange(event) {
    setEdition(event.target.value);
  }

  function handlePagesChange(event) {
    setPages(event.target.value);
  }

  function handleRatingChange(event) {
    setRating(event.target.value);
  }

  function handleYearChange(event) {
    setYear(event.target.value);
  }


  // Add a new book to the list
  function addBook() {
    if (title.trim() !== "" && author.trim() !== "") {
      setBooks((b) => [...b, { title, author, genre, language, edition, pages, rating, year }]);
      setTitle("");
      setAuthor("");
      setGenre("");
      setLanguage("");
      setEdition("");
      setPages("");
      setRating("");
      setYear("");
    }
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