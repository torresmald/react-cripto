import styled from "@emotion/styled";

const Cotizacion = styled.div`
     color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`
const Texto = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`
const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`
const Image = styled.img`
    display: block;
    width: 120px;

`
function Resultado({ cotizacion }) {
    const { PRICE, HIGHDAY, LOWDAY, IMAGEURL, LASTUPDATE } = cotizacion;
    return (
        <Cotizacion>
            <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen Cripto" />
            <div>
                <Precio>El precio es de <span>{PRICE}</span></Precio>
                <Texto>El precio más alto del dia <span>{HIGHDAY}</span></Texto>
                <Texto>El precio más bajo del dia <span>{LOWDAY}</span></Texto>
                <Texto>Última actualización <span>{LASTUPDATE}</span></Texto>
            </div>

        </Cotizacion>
    );
}

export default Resultado;