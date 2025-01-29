import Header from './componentes/Header'
import styled from 'styled-components'
import BodyOne from './componentes/Body/BodyOne/index';
import BodyTwo from './componentes/Body/BodyTwo/Index';
import BodyThree from './componentes/Body/Bodythree/index';
import Footer from './componentes/Footer';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color:rgb(236, 236, 236);
`

function App() {
  return (
    <AppContainer>
      <Header />
      <BodyOne />
      <BodyTwo />
      <BodyThree />
      <Footer />
    </AppContainer>
  );
}

export default App
