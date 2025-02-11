import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Importa todas as imagens da pasta
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../../imagens/CarouselImages', false, /\.(png|jpe?g|svg)$/));

const CarouselContainer = styled.div`
  .carousel-inner {
    height: 400px; /* Altura fixa para telas maiores */
    overflow: hidden;

    @media (max-width: 768px) {
      height: 250px; /* Altura reduzida para telas menores (mobile) */
    }
  }

  .carousel-item img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Mantém a proporção da imagem */
  }
`;

function Carousel() {
  return (
    <CarouselContainer id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-indicators">
        {images.map((image, idx) => (
          <button
            key={idx}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={idx}
            className={idx === 0 ? "active" : ""}
            aria-current={idx === 0 ? "true" : "false"}
            aria-label={`Slide ${idx + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {images.map((image, idx) => (
          <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
            <img src={image} className="d-block w-100" alt={`foto ${idx + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </CarouselContainer>
  );
}

export default Carousel;