import Header from '../../componentes/Header'
import Carousel from '../../componentes/Body/Carousel'
import Cards from '../../componentes/Body/Cards'
import About from '../../componentes/Body/About'
import Footer from '../../componentes/Footer'
import styled from 'styled-components'

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
      <About />
      <Footer />
    </AppContainer>
  );
}

export default Home;