import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';

const BookList = () => {

    const [books, setBook] = useState(null);

    useEffect(() => {
        axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json')
            .then(res => {
                setBook(res.data);
                console.log(books)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            {books && books.map(book => {
                return(
                    <div>
                        <Book key = {book.bookID} title = {book.title} authors = {book.authors} average_rating = {book.average_rating} isbn = {book.isbn} language_code = {book.language_code} ratings_count = {book.ratings_count} price = {book.price}/>
                    </div>
                );
            })}
        </div>
    );
};

export default BookList;