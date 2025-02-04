import styled from 'styled-components'
import Header from '../../componentes/Header';
import ProductList from '../../componentes/ProductsList';
import Footer from '../../componentes/Footer'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color:rgb(236, 236, 236);
    overflow-x: hidden;
`


function Product() {
    return (
        <AppContainer>
            <Header />
            <ProductList />
            <Footer />
        </AppContainer>
    );
  }
  
  export default Product;