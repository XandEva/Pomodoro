let seconds = "00";     //2 constantes que armazenam os segundos e os minutos
let minutes = 25;


const click_sound = new Audio("click.mp3") //armazenar os audios //cria uma instancia de tipo Audio
const bell = new Audio("bell.mp3")

function template(){
    document.getElementById('minutes').innerHTML = minutes; //vai adc os numeros na tela html
    document.getElementById('seconds').innerHTML = seconds;
}

function start_timer(){
    click_sound.play()

    //resetando os minutos e segundos
    minutes = 24;
    seconds = 59

    document.getElementById('minutes').innerHTML = minutes //adc na page
    document.getElementById('seconds').innerHTML = seconds

    //iniciando a countdown
    const minutes_interval = setInterval(minutesTimer, 60000)
    const seconds_interval = setInterval(secondsTimer, 1000)
    

    function minutesTimer(){
        minutes = minutes-1
        document.getElementById('minutes').innerHTML = minutes

    }

    function secondsTimer(){
        seconds = seconds - 1
        document.getElementById('seconds').innerHTML = seconds


        if(seconds <= 0){
            if(minutes <= 0){
                clearInterval(minutes_interval)
                clearInterval(seconds_interval)

                document.getElementById('done').innerHTML = "Session Complete !! Take a Break"
                document.getElementById('done').classList.add('show_message');

                bell.play
            }
            seconds = 60
        }
    }

}
