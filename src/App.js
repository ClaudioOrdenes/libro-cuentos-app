import { useState, useEffect } from "react";
import "./App.css";
import data from "./data/data.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: false,
  dots: true,
  slidesToShow: 1,
  arrows: true,
  slidesToScroll: 1,
  lazyLoad: true,
  mobileFirst: true,
  centerMode: false,

  responsive: [
    {
      breakpoint: 700,
      settings: {
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 400,
      settings: {
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function App() {
  const [titulo, setTitulo] = useState("null");
  const [libroFiltrado, setLibroFiltrado] = useState([]);
  //const [slider, setSlider] = useState([]);

  useEffect(() => {
    titulo === "todos"
      ? setLibroFiltrado(data.BookContent)
      : setLibroFiltrado(
          data.BookContent.filter((libro) => libro.title === titulo)
        );
  }, [titulo]);

  return (
    <div className="App">
      <div>
        <BotonTitulo
          name="Rana de tres ojos"
          TituloActivo={titulo === "Rana de tres ojos" ? true : false}
          handleSetTitulo={setTitulo}
        />
        <BotonTitulo
          name="Pajaro Amarillo"
          TituloActivo={titulo === "Pajaro Amarillo" ? true : false}
          handleSetTitulo={setTitulo}
        />
        <BotonTitulo
          name="En Familia"
          TituloActivo={titulo === "En Familia" ? true : false}
          handleSetTitulo={setTitulo}
        />
        <BotonTitulo
          name="Leotolda"
          TituloActivo={titulo === "Leotolda" ? true : false}
          handleSetTitulo={setTitulo}
        />
      </div>

      <div>
        <Slider {...settings}>
          {libroFiltrado.map((item) => (
            <div key={item.id}>
              {/*imagenes filtradas del slider */}
              <img className="image" src={`${item.image}`} alt="" />{" "}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const BotonTitulo = ({ name, handleSetTitulo, TituloActivo }) => {
  return (
    <button
      className={`titulo ${TituloActivo ? "active" : null}`}
      onClick={() => handleSetTitulo(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};

export default App;
