import React from 'react';
import ReactDOM from 'react-dom/client';
import { books } from './data';
import  Book from './Book';
import './index.css';

const Booklist = () => {
  return (
    <>
      <h1>Best selling books</h1>
      <section className="booklist">
        {
          books.map((book, index) => {
            return <Book {...book} key={book.id} number={index}/>
          })
        }
      </section>
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
  <Booklist />
);
