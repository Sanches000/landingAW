import styled from 'styled-components'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color:rgb(236, 236, 236);
    overflow-x: hidden;
`


function Company() {
    return (
        <AppContainer>
            <h1>Empresa</h1>
        </AppContainer>
    );
  }
  
  export default Company;