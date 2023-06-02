
// defindo variaveis , peguei os spans com os "00" e coloquei em variaveis
const horas = window.document.getElementById('hours')
const minutos = window.document.getElementById('minutes')
const segundos = window.document.getElementById('seconds')

// função para atulizar o relogio em tempo real  
const relogio = setInterval(function time(){
    let DateToday = new Date();
    let HR = DateToday.getHours();
    let minutes = DateToday.getMinutes();
    let sec = DateToday.getSeconds();

// adiciona un '0' caso o numero for menor que 10 ficando = 0 + numero 
    if(HR < 10 ) HR = '0' + HR;
    if(minutes < 10 ) minutes = '0' + minutes;
    if(sec < 10 ) sec = '0' + sec;
    
//editando o conteudo do html
    horas.textContent = HR;
    minutos.textContent = minutes;
    segundos.textContent = sec;
})