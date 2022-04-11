import style from './Lista.module.scss'
import Item from "./Item";
import { Itarefa } from '../../types/tarefa';

interface Props {
    tarefas: Itarefa[],
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void //Void é quando o retorno de uma função é vazio
}

function Lista({ tarefas, selecionaTarefa }: Props) { //Props neste caso é a interface acimna    
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item} //Utiliza todas as propriedades (props) do item

                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;