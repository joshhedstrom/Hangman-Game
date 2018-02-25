    const randomWordArr = ["pizza", "dirt", "book", "picture", "guitar", "couch", "blanket", "flower", "table", "computer"];
    let randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];
    let lettersLeft = randomWord.length;
    let answerArray = [];
    for (let i = 0; i < randomWord.length; i++) {
        answerArray[i] = " _ ";
    }

    console.log(randomWord)

    document.getElementById("start").addEventListener("click", function() {


        console.log(lettersLeft);

        while (lettersLeft > 0) {
            document.getElementById("word").innerHTML = answerArray.join(" ");
            let guess = prompt("pick a letter, any letter. or cancel to end")
            if (guess === null) {
                break;
            } else if (guess.length !== 1) {
                alert("one letter at a time, please.")

            } else {
                for (let j = 0; j < randomWord.length; j++) {
                    if (randomWord[j] === guess) {
                        answerArray[j] = guess
                        lettersLeft--;
                    }
                }
            }

            break;

        }
    });