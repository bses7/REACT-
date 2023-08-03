import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/navbar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Shop from "./pages/Shop/Shop";
import Blog from "./pages/Blog/Blog";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/product" element={<Products />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}
export default App;
