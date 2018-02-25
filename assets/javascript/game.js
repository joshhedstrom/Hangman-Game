    const randomWordArr = ["pizza", "dirt", "book", "picture", "guitar", "couch", "blanket", "flower", "table", "computer"];
    let randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];
    let lettersLeft = randomWord.length;
    let answerArray = [];
    for (let i = 0; i < randomWord.length; i++) {
        answerArray[i] = " _ ";
    }

    console.log(randomWord)

    document.getElementById("start").addEventListener("click", function() {

        document.getElementById("word").innerHTML = answerArray

        console.log(lettersLeft);

        while (lettersLeft > 0) {
            let guess = prompt("pick a letter, any letter")

            document.getElementById("usedLetters").innerHTML = guess;
            break;

        }
    });