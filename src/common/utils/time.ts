export function tempoParaSegundos(tempo:string){
const [horas ='0', minutos ='0', segundos ='0']=tempo.split(":")//split divide uma string em uma array, baseado em um parametro dado. No caso ele vai pegar o tempo e dividir em três, pois a cada momento em que tiver ":" ele vai criar um item da array. Nos parametros (ex: horas='0') foi dado um valor padrão, caso nenhum valor seja fornecido

const horasEmSegundos = Number(horas)*3600; //Number pois estou transformando de string para número
const minutosEmSegundos = Number(minutos)*60;
return horasEmSegundos+minutosEmSegundos+Number(segundos)
}