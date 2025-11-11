import "./App.css";
import AboutUs from "./pages/AboutuS";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router";
import ListContainer from "./components/ListContainer/ListContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListContainer />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
