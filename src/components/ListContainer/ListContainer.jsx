import "./ListContainer.css";
import { useEffect, useState } from "react";
import ListItems from "../ListItems/ListItems";
import Navbar from "../Navbar/Navbar";

function ListContainer() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("src/json/data-base.json");
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <Navbar />
      {books.map((book) => {
        return (
          <div className="ListContainer">
            <ListItems key={book.id} book={book} />
          </div>
        );
      })}
    </>
  );
}

export default ListContainer;
