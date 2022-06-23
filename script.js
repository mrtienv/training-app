let training_time,
    rest_time,
    set,
    trainingTimeEl = document.getElementsByClassName('training-time'),
    restTimeEl = document.getElementsByClassName('rest-time'),
    setNumberEl = document.getElementsByClassName('set-number'),
    displayEl = document.getElementById('display'),
    sound_training = new Audio("./music/training-music/training-sound.wav"),
    sound_end = new Audio("./music/ending-music/sound.wav");

function start() {
    training_time = trainingTimeEl[0].value;
    rest_time = restTimeEl[0].value;
    set = setNumberEl[0].value;
    sound_training.play();
    setInterval(countToZero(training_time, rest_time, set));
}

function countToZero(training_number, rest_number, set_number) {                    
    set_number -= 0.5;
    if (set_number == 0) return;
    let count = training_number;
    
    let interval = setInterval(function() {
        displayEl.textContent = count;
        count--;
        displayEl.style.color = (set_number % 1 === 0) ? 'red' : 'black';
        if (count < 0) {
            sound_end.play();
            clearInterval(interval);
            countToZero(rest_number, training_number, set_number);
        }
    }, 1500);
}
