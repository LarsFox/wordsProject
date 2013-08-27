// === Everything related to words ===

function extractKeys(dictName) {
    keysArray = []
    for (var key in dictName) {
        keysArray.push(key)
    }
    return keysArray
}

// listing through the keys is much less complicated using indexes
function makeIndexes(num) {
    var indexesArray = [];
    for (var i = 0; i < num; i++) {
        indexesArray.push(i);
    }
    return indexesArray
}

// == "hard" part ==
/* 
Note: this part is really hard to understand.
Lots of comments are made only to remember and
to find better solutions as soon as my mind can't provide any.
*/

var launch = function () {
    
    var keys = extractKeys(dict),
        indexes = shuffle(makeIndexes(dictLength));

    var index = 0;
        play.onclick = nextWord;

    function nextWord() {
        /* == Keep in mind: ==
        This function shows the word and(!) increases index
        to show the next one.
        */

        if (index != dictLength) {
            play.innerHTML = keys[indexes[index]];
            sub.innerHTML = ' ';
            sub.onmouseover = showMeaning;
            showAmount();

            if (index && !backButton.onclick) {
                backButton.onclick = prevWord;
            }

            if (index && !replayButton.onclick) {
                replayButton.onclick = function() {
                    index = 0;
                    nextWord();
                }
            }
            else if (!index) {
                replayButton.onclick = false;
            }

            index++;
        }
        else {
            dictValues[dictNum]++;
            completed.innerHTML = 'This dict was finished \
            <span style="color: #f00; font-size: \
            1.4em">' + dictValues[dictNum] + '</span> times';
            resetDict();
        }
    }

    function prevWord() {
        /* == Keep in mind: ==
        This function == -nextWord;
        Decreasing index prepares to show the next (already shown) word
        However, previous word has lower index than the one ready to show up
        That is why 'keys[indexes[index-1(!)]]' and '(dictLength - index(!))'
        Function blocks itself if we return to the first word (index == 1(!))
        */

        index--;
        if (index > 0) {
            play.innerHTML = keys[indexes[index-1]];
            sub.innerHTML = ' ';
            sub.onmouseover = showMeaning;
            amount.innerHTML = (dictLength - index).toString() + " left";
        }
        if (index == 1) {
            showAmount();
            backButton.onclick = false;
        }
    }

    function resetDict() {
        play.innerHTML = "<img src='img/play.png'>";
        sub.innerHTML = 'Click Play';
        amount.innerHTML = 'the amount of words will be written here';
        backButton.onclick = false;
        indexes = shuffle(makeIndexes(dictLength));
        index = 0;
        sub.onmouseover = false;
    }

    // == These two are made to less code length ==

    function showMeaning() {
        /* == Keep in mind: ==
        This function launches after the next word is ready (index++)
        Reason: it launches onmouseover only
        That is why: 'dict[keys[indexes[index-1]]]' (-1!)
        */

        sub.innerHTML = dict[keys[indexes[index-1]]];
    }

    function showAmount() {
        /* == Keep in mind: ==
        This function shows the number of words left.
        When the last word is shown, there are no (0!) words left.
        That is why: '(dictLength - index - 1)' (-1!)
        */
        amount.innerHTML = (dictLength - index - 1).toString() + " left";
    }

}
loadScript(dictName, launch);