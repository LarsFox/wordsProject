function loadScript(name, callback) {
    // see http://unixpapa.com/js/dyna.html
    // loads the script only when it is needed to load the script
    callback = callback || false;
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = name;

    script.onreadystatechange = function () {
        if (this.readyState == 'complete') callback;
    }
    script.onload = callback;

    head.appendChild(script);
}

function choice(array) {
	return array[Math.floor((Math.random()*array.length))];
}

// this is used in engine.js only (for now), so maybe(!) must be stored there
// and maybe there should be function that provides random index
function shuffle(array) {
    var shuffled = []
    while (array.length > 0) {
        rand = Math.floor((Math.random()*array.length));
        shuffled.push(array.splice(rand, 1))
    }
    return shuffled
}