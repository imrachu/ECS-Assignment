import React from 'react';
import ReactStars from "react-rating-stars-component";
import Card from 'react-bootstrap/Card';

const Book = (props) => {
    return (
        <div>
            <Card bg='primary'>
                <ReactStars count={props.average_rating} size={24} activeColor="#ffd700" /> 
                <p>Ratings Count : {props.ratings_count}</p>
                <Card.Header>{props.title}</Card.Header>
                <Card.Title>{props.authors}</Card.Title>
                <Card.Body>Language : {props.language_code}</Card.Body>
                <Card.Text>{props.price}</Card.Text>

            </Card>
        </div>
    );
};

export default Book;