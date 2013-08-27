// find some new good-looking colours

// if more -> add more the same format
var header = document.getElementById('header'),
    previousHeaderColour = "",
    headerColours = [
    'ff9', 'ffc', '9fc',
    'cf6', 'cf9', 'cfc', 'cff',
    '9cf', 'ccf'
    ];

function chooseColour(colours_array, previous) {
    chosen = choice(colours_array);
    while (chosen == previous) {
        chosen = choice(colours_array);
    }
    previous = chosen;
    return chosen;
}

function changeElementColour(element, colours_array, previous) {
    element.style.backgroundColor = '#' + chooseColour(colours_array, previous);
}

header.onmouseover = function() {
    changeElementColour(header, headerColours, previousHeaderColour)
}