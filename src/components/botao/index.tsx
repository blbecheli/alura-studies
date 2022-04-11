import React from "react";
import style from './Botao.module.scss'

interface Props{
    type?: "button" | "submit" | "reset" | undefined, onClick?: () => void, children?: React.ReactNode // Indico qual é o tipo do botão. O ? indica que o type pode ser passado ou não
}


function Botao({onClick, type, children}:Props) {
    return (
        <button onClick={onClick} type={type} className={style.botao}>
            {/*quando eu uso CSS inline eu preciso usar chaves duplas. Não é possível utilizar formatações que usem hífen (ex: background-color), neste caso devo usar o camel case (backgroundColor). Posso também usar JavaScript e utilizar variáveis*/}
            {children} {/*Esta configuração permite que eu mude o texto do botão conforme a minha necessidade*/}
        </button>
    )
}

export default Botao;