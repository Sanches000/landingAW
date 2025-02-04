import Header from './componentes/Header'
import styled from 'styled-components'
import Carousel from './componentes/Body/Carousel';
import Cards from './componentes/Body/Cards';
import About from './componentes//Body/About';
import Footer from './componentes/Footer';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color:rgb(236, 236, 236);
    overflow-x: hidden;
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Carousel />
      <Cards />
      <About />
      <Footer />
    </AppContainer>
  );
}

export default App
