
import styled from '@emotion/styled';

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
     text-align: center;
     &:hover{
        background-color: #7a7dfe;
        cursor: pointer;
     }


`
function Form() {
    return (
        <form>
            <InputForm 
                value='Enviar'

            />
        </form>
    );
}

export default Form;