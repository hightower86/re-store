import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { bindActionCreators } from 'redux';

import withBookstoreService from '../hoc/with-bookstore-service';
import BookListItem from '../book-list-item';
import { booksLoaded } from '../../actions';
import compose from '../../utils';

import './book-list.css';

class BookList extends Component {

  componentDidMount() {
    //1. receive data
    const { bookstoreService, booksLoaded } = this.props;
    bookstoreService.getBooks()
      .then((data) => booksLoaded(data));
  }

  render() {

    const { books } = this.props;
    console.log(books);

    return (
      <ul className='book-list'>
        {
          books.map((book) => {
            return (
              <li key={book.id}><BookListItem  book={book} /></li>
            )
          })
        }
      </ul>
    );
  };
}

const mapStateToProps = ({ books }) => {
  return { books }
};

const mapDispatchToProps = {
    booksLoaded 
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);