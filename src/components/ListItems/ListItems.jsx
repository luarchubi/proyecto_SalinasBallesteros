import "./ListItems.css";

function ListItems({ book }) {
  return (
    <div className="card">
      <h2>{book.titulo} </h2>
      <h3>{book.autor}</h3>
      <p>{book.descripcion}</p>
    
      

      <button className="btn-add-book"> agregar al carrito </button>
    </div>
  );
}

export default ListItems;
