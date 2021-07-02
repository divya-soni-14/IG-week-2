import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

import { books } from "./books";

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  //attribute, eventHandler
  //onClick, onMouseOver
  const clickHandler = () => {
    alert("hello world");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <article>
        <img src={img}></img>
      </article>
      <h1 onClick={() => console.log({ title })}>{title}</h1>
      <h4 style={{ color: "#617d98" }}>{author}</h4>
      <button type="button" onClick={clickHandler}>
        {" "}
        Example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More Complex Example
      </button>
    </article>
  );
};

const Image = () => {
  return;
};

const Title = () => {
  return;
};

const Author = () => {
  return;
};

ReactDom.render(<BookList />, document.getElementById("root"));
