import Carousel from '../../componentes/Body/Carousel'
import Cards from '../../componentes/Body/Cards'
import About from '../../componentes/Body/About'
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
      <Carousel />
      <Cards />
      <About />
    </AppContainer>
  );
}

export default Home;