import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { Itarefa } from '../types/tarefa';
import style from './App.module.scss' /*Uso o mudule, pois assim será tratada como um módulo, não apenas como um arquivo de formatação*/

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[]>([]); //Utilizo o useState para indicar ao React que algo mudou e que ele precisa efetuar alguma ação. No caso eu tenho uma constante que possui dois elementos: tarefas, que é uma array com os elementos abaixo e setTarefas, que é uma função que demonstra que houve uma alteração no estado. Coloca-se <> em Itarefa para tipar o tipo que se deseja
  const [selecionado, setSelecionado] = useState<Itarefa>()

  function selecionaTarefa(tarefaSelecionada: Itarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.
      map(tarefa => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false
      })))
  }
  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined)
      setTarefas(tarefasAnteriores =>
        tarefasAnteriores.map(tarefa => {
          if(tarefa.id === selecionado.id){
            return{
              ...tarefa,
              selecionado: false,
              completado: true
            }
          }
          return tarefa;
        }))
    }
  }
  return (
    <div className={style.AppStyle} > {/*ClassName é o mesmo do class no HTML || Uso entre {} pois agora é um módulo. Com isso será gerado como nome da classe, dentro do módulo style, AppStyle (que está dentro do scss modular) e após isso será gerado uma extensão aleatória (ex: AppStyle__kkjj), assim permitindo que em projetos longos possa ser usada o mesmo nome de classe*/}
      < Formulario setTarefas={setTarefas} />
      <Lista
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro selecionado={selecionado} 
      finalizarTarefa = {finalizarTarefa}
      />
    </div >
  );
}

export default App;
