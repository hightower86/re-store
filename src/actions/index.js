
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
const booksError = (error) => {
  return {
    type: 'BOOKS_ERROR',
    payload: error
  };
};

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
};

export {
 fetchBooks
};