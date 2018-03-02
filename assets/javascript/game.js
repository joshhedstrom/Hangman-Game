const randomWordArr1 = ["harmonica", "flute", "cello", "violin", "guitar", "bass", "piano", "organ", "ukulele", "trumpet", "viola", "clarinet", "harp", "banjo", "mandolin", "marimba"];
const randomWordArr2 = ["kale", "carrot", "celery", "lettuce", "cabbage", "pea", "spinach", "broccoli", "radish", "cucumber", "tomato", "eggplant", "turnip", "squash", "pumpkin"]
const randomWordArr3 = ["apple", "orange", "kiwi", "mango", "pineapple", "pear", "lemon", "banana", "peach", "cherry", "apricot", "watermelon", "strawberry", "blueberry", "grape"]
const randomWordArr4 = ["sparrow", "woodpecker", "finch", "crow", "owl", "robin", "cardinal", "goldfinch", "pigeon", "hawk", "eagle", "hummingbird", "starling", "chickadee", "seagull"]
const randomWordArr5 = ["rose", "dandelion", "daffodil", "crocus", "peony", "violet", "tulip", "orchid", "buttercup", "lavender", "poppy", "pansy", "marigold", "lilac"]
const randomWordArr6 = ["jazz", "crypt", "blizzard", "equip", "galaxy", "zipper", "vortex", "subway", "whiskey", "wellspring", "kazoo", "luxury", "knapsack", "kiosk", "oxygen", "microwave", "quiz", "pixel", "fluff"]
let loss = 0;
let win = 0;

function showGame() {
    document.getElementById('gameElement').style.display = "block";
    $('html,body').animate({
        scrollTop: document.body.scrollHeight
    }, "fast");
}

function newGame() {
    document.getElementById('gameElement').style.display = "none";

}

function gameLoop(arr) {
    let guessesLeft = 10;
    let usedArray = [];
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("lettersUsed").innerHTML = usedArray;
    let randomWord = arr[Math.floor(Math.random() * arr.length)];
    let lettersLeft = randomWord.length;
    let answerArray = [];
    for (let i = 0; i < randomWord.length; i++) {
        answerArray[i] = " _ ";
    }
    document.getElementById("word").innerHTML = answerArray.join(" ");
    console.log(randomWord)
    if (lettersLeft > 0) {
        document.onkeyup = function() {
            var guess = event.key;
            var used = usedArray.includes(guess);
            if (!used) {
                usedArray.push(guess)
                document.getElementById("lettersUsed").innerHTML = usedArray;
                if (guess.length !== 1) {
                    alert("one letter at a time, please.")
                } else {
                    var match;
                    for (let j = 0; j < randomWord.length; j++) {
                        if (randomWord[j] === guess) {
                            answerArray[j] = guess;
                            document.getElementById("word").innerHTML = answerArray.join(" ");
                            lettersLeft--;
                            match = true;
                        }
                    }
                    if (!match) {
                        guessesLeft--;
                    }
                }
                document.getElementById("guessesLeft").innerHTML = guessesLeft;
                if (guessesLeft === 0) {
                    let restart = confirm("so close, and yet so far away...")
                    loss++;
                    newGame()
                }
                if (lettersLeft === 0) {
                    alert("sweet! the word was " + randomWord)
                    win++;
                    newGame()
                }
                document.getElementById("win").innerHTML = "wins: " + win;
                document.getElementById("loss").innerHTML = "losses: " + loss;
            } else {
                alert("you already tried that letter")
            }
        }
    }
}
document.getElementById("instruments").onclick = function() {
    showGame();
    gameLoop(randomWordArr1);
}
document.getElementById("vegetables").onclick = function() {
    showGame();
    gameLoop(randomWordArr2);
}
document.getElementById("fruits").onclick = function() {
    showGame();
    gameLoop(randomWordArr3);
}
document.getElementById("birds").onclick = function() {
    showGame();
    gameLoop(randomWordArr4);
}
document.getElementById("flowers").onclick = function() {
    showGame();
    gameLoop(randomWordArr5);
}
document.getElementById("hard").onclick = function() {
    showGame();
    gameLoop(randomWordArr6);
}