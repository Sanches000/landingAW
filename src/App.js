import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Company from "./pages/company";
import Contact from "./pages/contact";
import Product from "./pages/product";
import LinhaMoveleira from "./pages/product/linhaMoveleira"
import LinhaAutomotiva from "./pages/product/linhaAutomotiva"
import LinhaHospitalar from "./pages/product/linhaHospitalar"
import LinhaCoxim from "./pages/product/linhaCoxim"
import LinhaVedacao from "./pages/product/linhaVedacao"
import ErrorPage from "./pages/pageUnfound";
import DefaultStructure from "./pages/defaultStructure";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<DefaultStructure />}>
          <Route path="/Empresa" element={<Company />} />
          <Route path="/Produto" element={<Product />} />
          <Route path="/Contato" element={<Contact />} />
          <Route path="/LinhaMoveleira" element={<LinhaMoveleira />} />
          <Route path="/LinhaAutomotiva" element={<LinhaAutomotiva />} />
          <Route path="/LinhaHospitalar" element={<LinhaHospitalar />} />
          <Route path="/LinhaCoxim" element={<LinhaCoxim />} />
          <Route path="/LinhaVedacao" element={<LinhaVedacao />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
