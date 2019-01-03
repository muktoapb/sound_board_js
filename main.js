window.addEventListener('keydown', function (e) {
    const plyde = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!plyde) return // stop play music
    plyde.currentTime = 0;
    plyde.play();
    //add class if press
    key.classList.add('current_key');


});

//animation 

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('current_key');
}
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


// touch