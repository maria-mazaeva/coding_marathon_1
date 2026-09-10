import React from "react";

function Book({ title, author, genre, language, edition, pages, rating, year, onDelete }) {
  return (
    <li className="book-item">
      <div className="book-info">
        <span className="book-title">{title}</span>
        <span className="book-author">by {author}</span>
        <span className="book-genre">Genre: {genre}</span>
        <span className="book-language">Language: {language}</span>
        <span className="book-edition">Edition: {edition}</span>
        <span className="book-pages">Pages: {pages}</span>
        <span className="book-rating">Rating: {rating}</span>
        <span className="book-year">Year: {year}</span>
      </div>
      <button onClick={onDelete} className="delete-button">
        Delete
      </button>
    </li>
  );
}

export default Book;