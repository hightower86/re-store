import React from 'react';

import BookList from '../book-list';

const HomePage = () => {

  const books = [
    {
      id: 1,
      title: "White rose",
      author: "Charles Dikkens"},
     {
       id: 2,
       title: "Black card",
       author: "NoName"} 
  ];
  return (
    <div>
      <h2 className='blue'>Home Page</h2>
      <BookList books={books}/>
    </div>
    
  );
};

export default HomePage;