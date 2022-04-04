let _keyPresses = [];
const _konamiCode = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a'
];

document.addEventListener('keyup', function(e) {
    _keyPresses.push(e.key);
    if (_keyPresses.join('').includes(_konamiCode.join(''))) {
        console.log('B-)')
        document.getElementById('easteregg-window').style.display = "block";
        document.getElementById('modal-id').style.visibility = "visible";
        _keyPresses = [];
    }
});
document.getElementById('easteregg-emoji').addEventListener('click', function(e) {
    document.getElementById('easteregg-window').style.display = "none";
    document.getElementById('modal-id').style.visibility = "hidden";
});
document.getElementById('hej').addEventListener('click', function(e) {
    document.getElementById('hej').innerHTML = "Hej! 👋";
    console.log('Hej!');
});