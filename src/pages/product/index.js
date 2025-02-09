import styled from 'styled-components'
import ProductList from '../../componentes/ProductsList';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color:rgb(236, 236, 236);
    overflow-x: hidden;
`


function Product() {
    return (
        <AppContainer>
            <ProductList />
        </AppContainer>
    );
  }
  
  export default Product;