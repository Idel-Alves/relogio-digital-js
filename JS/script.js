const horas = document.querySelector("#horas");
const minutos = document.querySelector("#minutos");
const segundos = document.querySelector("#segundos");

const relogio = setInterval( function time(){

    let todayDate = new Date();
    let hrs = todayDate.getHours();
    let min = todayDate.getMinutes();
    let sec = todayDate.getSeconds();

    horas.textContent = formaTime(hrs);
    minutos.textContent = formaTime(min);
    segundos.textContent = formaTime(sec);

});

function formaTime(time) {
    return time < 10 ? `0${time}` : time; 
}
