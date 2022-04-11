import style from './Relogio.module.scss'

interface Props {
    tempo: number | undefined
}

export default function Relogio({ tempo = 0 }: Props) {
const minutos = Math.floor(tempo/60) //Math.floor é utilizado para pegar somente os números inteiros e igonorar os decimais
const segundos = tempo % 60; //% utiliza os decimais e ignora os inteiros
const [minutoDezena, minutoUnidade] = String(minutos) .padStart(2, '0'); //Coloquei [] na const para permitir desestruturar a string, ou seja, deste modo ele vai trabalhar cada elemento de maneira individual. Como o meu cronometro tem dois elementos para segundo e dois para minutos, ele vai separar em dezena e unidade. O .padStart configura um padrão, no caso quando for um segundo, por ex, ele vai preencher com 00:01-ele aceita dois parametros: o primeiro é o tamanho e o segundo o caracter que desejo
const [segundoDezena, segundoUnidade] = String(segundos) .padStart(2, '0');
    return (
        <> {/*<>Maneira utilizada para fazer com que o HTML não precise de um elemento pai, que é obrigatório*/}
            <span className={style.relogioNumero}>{minutoDezena}</span>
            <span className={style.relogioNumero}>{minutoUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundoDezena}</span>
            <span className={style.relogioNumero}>{segundoUnidade}</span>
        </>
    )
}