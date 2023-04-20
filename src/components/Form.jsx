import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useSelectMonedas from '../hooks/useSelectMonedas';
import { monedas } from '../data/monedas';
import Error from './Error';
const InputForm = styled.input`
     background-color: #9497ff;
     border: none;
     width: 100%;
     padding: 10px;
     color: #fff;
     font-weight: 700;
     text-transform: uppercase;
     font-size: 20px;
     border-radius: 5px;
     transition: background-color .3s ease;
     margin-top: 30px;
     &:hover{
        background-color: #7a7dfe;
        cursor: pointer;
     }
`
function Form({ setMonedas }) {
    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false);
    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas);
    const [criptoMoneda, SelectCriptoMoneda] = useSelectMonedas('Elige tu Criptomoneda', criptos);
    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD';
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            const arrayCripto = resultado.Data.map((cripto) => {
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objeto;
            })
            setCriptos(arrayCripto);
        }
        consultarAPI();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        if ([moneda, criptoMoneda].includes('')) {
            setError(true);
            return;
        }
        setError(false);
        setMonedas({
            moneda, criptoMoneda
        })
    }
    return (
        <>
            {error && <Error>Todos los campos Obligatorios</Error>}
            <form onSubmit={handleSubmit}>
                <SelectMonedas />
                <SelectCriptoMoneda />
                <InputForm
                    value='Enviar'
                    type='submit'
                />
            </form>
        </>

    );
}

export default Form;