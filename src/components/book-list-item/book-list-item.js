import React, {Fragment} from 'react';

import './book-list-item.css';

const BookListItem = ({ book }) => {
  console.log(book);
  const { title, author } = book;
  return (
    <Fragment>
      <span>author: {author} </span>
      <span>title: {title} </span>
    </Fragment>
    
  );
};

export default BookListItem; 