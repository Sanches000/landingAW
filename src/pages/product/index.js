import styled from 'styled-components'
import Header from '../../componentes/Header';

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
            <h1>Produto</h1>
            <h1>Produto</h1>
            <h1>Produto</h1>
            <h1>Produto</h1>
            <h1>Produto</h1>
            <h1>Produto</h1>
            <h1>Produto</h1>
        </AppContainer>
    );
  }
  
  export default Product;