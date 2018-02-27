    const randomWordArr = ["pizza", "dirt", "book", "picture", "guitar", "couch", "blanket", "flower", "table", "computer"];
    let randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];
    let lettersLeft = randomWord.length;
    let answerArray = [];
    for (let i = 0; i < randomWord.length; i++) {
        answerArray[i] = " _ ";
    }
    let usedArray = [];

    console.log(randomWord)

    function showGame() {
        document.getElementById('gameElement').style.display = "block";
    }


    function gameLoop() {
        document.getElementById("word").innerHTML = answerArray.join(" ");
        if (lettersLeft > 0) {
            let guess = prompt("pick a letter, any letter")
            usedArray.push(guess)
            document.getElementById("lettersUsed").innerHTML = usedArray;
            if (guess.length !== 1) {
                alert("one letter at a time, please.")

            } else {
                for (let j = 0; j < randomWord.length; j++) {
                    if (randomWord[j] === guess) {
                        answerArray[j] = guess
                        lettersLeft--;
                        document.getElementById("word").innerHTML = answerArray.join(" ");
                        document.getElementById("lettersLeft").innerHTML = lettersLeft;
                    }
                }
            }

        }
        if (lettersLeft === 0) {
            let restart = confirm("nice! the word was: " + randomWord + ".\n play again?")
            if (restart === true) {
                location.reload(true)
            } else {
                alert("thanks for playing!")
            }

        }
    }
    document.getElementById("start").onclick = showGame;
    document.getElementById("guessAgain").onclick = gameLoop;