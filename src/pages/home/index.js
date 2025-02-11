import Carousel from '../../componentes/Body/Carousel'
import Cards from '../../componentes/Body/Cards'
import styled from 'styled-components'
import Footer from '../../componentes/Footer';
import Header from '../../componentes/Header';
import Advantages from '../../componentes/Body/advantages';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color:rgb(236, 236, 236);
    overflow-x: hidden;
`

function Home() {
  return (
    <AppContainer>
      <Header />
      <Carousel />
      <Cards />
      <Advantages />
      <Footer />
    </AppContainer>
  );
}

export default Home;