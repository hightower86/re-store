
const booksRequested = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_REQUEST',
    payload: newBooks
  };
};

const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  };
};

const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error
  };
};

const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId
  };
};

const bookIncreasedInCart = (bookId) => {
  return {
    type: 'BOOK_INCREASED_IN_CART',
    payload: bookId
  };
};

const bookDecreasedInCart = (bookId) => {
  return {
    type: 'BOOK_DECREASED_IN_CART',
    payload: bookId
  };
};

const bookDeletedInCart = (bookId) => {
  return {
    type: 'BOOK_DELETED_IN_CART',
    payload: bookId
  };
};

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
};

export {
 fetchBooks,
 bookAddedToCart,
 bookIncreasedInCart,
 bookDecreasedInCart,
 bookDeletedInCart
};