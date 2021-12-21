import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import coverPage from './App';

function BookList() {
  return (
    <section className="bookList">
      <h1>{'Hola Amigos'}</h1>
      <BookContainer />
      <BookContainer />
      <BookContainer />
      <BookContainer />
      <BookContainer />
    </section>
  );
}

const BookContainer = () => {
  return (
    <article className="bookContainer">
      <Book />
      <AuthorDetails />
      <BookDetails />
    </article>
  );
};

const Book = () => {
  return (
    <article>
      <img
        className="bookImg"
        src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
        alt="book"
      />
    </article>
  );
};

const BookDetails = () => {
  return (
    <article>
      <p className="publisher">Board Book</p>
      <h3 className="price">$5.00</h3>
    </article>
  );
};

const AuthorDetails = () => {
  return (
    <article>
      <h2 className="bookName">First Little Readers</h2>
      <h3 className="authorName">amelia Hepworth</h3>
    </article>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>,
  document.getElementById('root')
);
