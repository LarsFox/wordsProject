/*
COMMENT THE CODE! MORE!
*/

// == html vars ==

var play = document.getElementById('bigWord'),
    sub = document.getElementById('meaning'),
    amount = document.getElementById('words_left'),
    completed = document.getElementById('completed'),
    checkers = document.getElementsByName('dictGroup'),
    backButton = document.getElementById('backButton'),
    replayButton = document.getElementById('replayButton');

var dictNum,
    dictName,
    dictValues = [],
    isRed = false,
    started = false;

// value of the radio is used to count how many times the dict was finished

for (var i = 0; i < checkers.length; i++) {
    dictValues.push(parseInt(checkers[i].value));
    // .values are used to count how many times the dict was finished
    checkers[i].onclick = function() {
        dictName = 'dict' + this.id + '.js';
        dictNum = parseInt(this.id);
        loadDict();
    }
}

// changes the colour of the text to show that dictionary isn't loaded.
function dictNotLaunchedError() {
    if (isRed) {
        sub.innerHTML =
        '<span style="color: #000">' + 'Choose dictionary to load' + '</span>';
        isRed = false;
    }
    else {        
        sub.innerHTML = 
        '<span style="color: #f00">' + 'Choose dictionary to load' + '</span>';
        isRed = true;
    }
}
// launches by pressing the Play button
play.onclick = dictNotLaunchedError;

function engineReset() {
    play.innerHTML = 'load';
    sub.innerHTML = 'meaning';
    sub.onmouseover = false;
}

function loadDict() {
    // these two are here so the switch looks slightly
    if (started) {engineReset() }
    if (dictName) {
        started = true;
        play.innerHTML = "<img src='img/play.png'>";
        sub.innerHTML = 'Click Play'

        if (dictValues[dictNum]) {
            completed.innerHTML = 'This dict was finished \
            <span style="color: #f00; font-size: \
            1.4em">' + dictValues[dictNum] + '</span> times';
        }
        else {
            completed.innerHTML = "Dictionary was loaded, but hasn't \
            been completed yet.";
        }

        loadScript('engine.js');

    }

    else {dictNotLaunchedError() }
}