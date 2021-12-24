import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import coverPage from './App';
const books = [
  {
    Author: 'Amelia Hepworth',
    title: 'I Love You to the Moon and Back ',
    img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
  },
  {
    Author: 'Amelia Hepworth',
    title: 'I Love You to the Moon and Back ',
    img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
  },
];
const names = ['john', 'peter', 'susan'];
const newNames = names.map((name) => {
  return <h1>{name}</h1>;
});
console.log(newNames);

function BookList() {
  return (
    <section className="bookList">
      <BookContainer />
    </section>
  );
}

const BookContainer = (props) => {
  const { title, Author } = props;
  return (
    <article className="bookContainer">
      <img className="bookImg" src={books.img} alt="Book" />
      <h1>{title}</h1>
      <h4>{Author}</h4>
    </article>
  );
};

// const Book = () => {
//   return (
//     <article>
//       <img className="bookImg" src={img} alt="book" />
//     </article>
//   );
// };

// const BookDetails = () => {
//   return (
//     <article>
//       <p className="publisher">Board Book</p>
//       <h3 className="price">$5.00</h3>
//     </article>
//   );
// };

// const AuthorDetails = () => {
//   return (
//     <article>
//       <h2 className="bookName">{title}</h2>
//       <h3 className="authorName">{Author}</h3>
//     </article>
//   );
// };

ReactDOM.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>,
  document.getElementById('root')
);
