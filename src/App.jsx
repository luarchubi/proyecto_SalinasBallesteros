import "./App.css";
import Navbar from "./components/Navbar";
import ListItems  from "./components/Container";  


function App() {
  return (
    <>
    <Navbar/>  
    <ListItems welcome = "Bienvenidos a mi tienda online" />
    </>
  );
}

export default App;
