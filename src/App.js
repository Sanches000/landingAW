import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Company from "./pages/company";
import Contact from "./pages/contact";
import Product from "./pages/product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Empresa" element={<Company />}/>
        <Route path="/Produto" element={<Product />}/>
        <Route path="/Contato" element={<Contact />}/>
        <Route path="*" element={<div>Página não encontrada :/</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
