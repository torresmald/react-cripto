import Form from './components/Form';
import Resultado from './components/Resultado';
import Loading from './components/Loading';
import styled from '@emotion/styled';
import ImagenCripto from './img/imagen-criptos.png';
import { useState, useEffect } from 'react';
const Contenedor = styled.div`
   max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Imagen = styled.img`
 max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`
function App() {
  const [monedas, setMonedas] = useState({});
  const [cotizacion, setCotizacion] = useState({});
  const [cargando, setCargando] = useState(false);


  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      setCargando(true);
      setCotizacion({});
      const { moneda, criptoMoneda } = monedas;
      const resultadoCripto = async () => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setCotizacion(resultado.DISPLAY[criptoMoneda][moneda]);
        setCargando(false);
      }
      resultadoCripto()
    }
  }, [monedas])
  return (
    <Contenedor>
      <Imagen
        src={ImagenCripto}
        alt='Imagenes de Cripto'
      />
      <div>
        <Heading>Cotiza Criptomonedas</Heading>
        <Form setMonedas={setMonedas} />
      
      {cargando && <Loading />}
      {cotizacion.PRICE && <Resultado cotizacion={cotizacion} />}
      </div>
    </Contenedor>
  )
}

export default App
