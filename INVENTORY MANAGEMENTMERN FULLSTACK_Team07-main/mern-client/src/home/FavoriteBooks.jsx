import React, { useState, useEffect } from 'react';
import BookCards from '../components/BookCards';

const FavoriteBooks = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data))
    } )
  return (
    <div>
        <BookCards books={books} headline="Few products"/>
    </div>
  )
}

export default FavoriteBooks