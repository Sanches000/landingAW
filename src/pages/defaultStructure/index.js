import { Outlet } from "react-router-dom";
import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";

function DefaultStructure (){
    return(
        <main>
            <Header />
            <Outlet />
            <Footer />
        </main>
    );
}

export default DefaultStructure;