
const booksRequested = (newBooks) => {
  return {
    type: 'BOOKS_REQUESTED',
    payload: newBooks
  };
};
const booksLoaded = (newBooks) => {
  return {
    type: 'BOOKS_LOADED',
    payload: newBooks
  };
};

export {
  booksLoaded,
  booksRequested
};