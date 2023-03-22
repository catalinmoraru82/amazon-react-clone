import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const books = [
  {
    author: 'Jess Lourey',
    title: 'The Quarry Girls: A Thriller',
    img: '../images/image-01.jpeg',
    id: 1,
  },
  {
    author: 'Freida McFadden',
    title: 'Never Lie',
    img: './images/image-02.jpeg',
    id: 2,
  }
]

const Booklist = () => {
  return (
    <section className="booklist">
      {
        books.map((book) => {
          return <Book {...book} key={book.id}/>
        })
      }
    </section>
  )
}

const Book = ({author, title, img}) => {
  return (
    <article className="book">
        <img src={img} alt={title} />
        <h2>{title}</h2> 
        <h4>{author.toUpperCase()}</h4>
    </article>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Booklist />
);
