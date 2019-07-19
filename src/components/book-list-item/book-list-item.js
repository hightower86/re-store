import React, {Fragment} from 'react';

import './book-list-item.css';

const BookListItem = ({ book }) => {
  const { title, author } = book;
  return (
    <Fragment>
      <h3>Book</h3>
      <span>author: {author}</span>
      <span>title: {title}</span>
    </Fragment>
    
  );
};

export default BookListItem; 