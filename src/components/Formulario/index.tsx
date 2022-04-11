import React, { useState } from "react";
import { Itarefa } from "../../types/tarefa";
import Botao from "../botao";
import style from './Formulario.module.scss';
import { v4 as uuidv4 } from 'uuid'

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
} //Para definir um class component, a classe precisa estender React.Component


function Formulario({ setTarefas }: Props) {
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00")
    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        setTarefas(tarefasAntigas =>
            [
                ...tarefasAntigas,
                {
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        );
        setTarefa("");
        setTempo("00:00")
    }
    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    value={tarefa}
                    onChange={evento => setTarefa ( evento.target.value)}
                    placeholder="O que você quer estudar" required />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input
                    type="time"
                    step="1"
                    name="tempo"
                    value={tempo}//value indica o valor inicial do input. Como valor colocou-se o valor da state tempo
                    onChange={evento => setTempo(evento.target.value)} //onchange controla qualquer mudança. Evento é a função do onChange que dirá o que irá ocorrer. setState é uma class component que permite alteração no state. ...this.state retorna todos os atributos da state. Destes atributos uso o atributo tempo e o evento dele terá como alvo (target) o seu valor(value)
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required></input>
            </div>
            <Botao type="submit" >
                Adicionar
            </Botao>
        </form>
    )
}

export default Formulario;