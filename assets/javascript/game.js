const randomWordArr1 = ["harmonica", "flute", "cello", "violin", "guitar", "bass", "piano", "organ", "ukulele", "trumpet", "viola", "clarinet", "harp", "banjo", "mandolin", "marimba"];
const randomWordArr2 = ["kale", "carrot", "celery", "lettuce", "cabbage", "pea", "spinach", "broccoli", "radish", "cucumber", "tomato", "eggplant", "turnip", "squash", "pumpkin"]
const randomWordArr3 = ["apple", "orange", "kiwi", "mango", "pineapple", "pear", "lemon", "banana", "peach", "cherry", "apricot", "watermelon", "strawberry", "blueberry", "grape"]
const randomWordArr4 = ["sparrow", "woodpecker", "finch", "crow", "owl", "robin", "cardinal", "goldfinch", "pigeon", "hawk", "eagle", "hummingbird", "starling", "chickadee", "seagull"]
const randomWordArr5 = ["rose", "dandelion", "daffodl", "crocus", "peony" "violet", "tulip", "orchid", "buttercup", "lavender", "poppy", "pansy", "marigold", "lilac"]
const randomWordArr6 = ["jazz", "crypt", "blizzard", "equip", "galaxy", "zipper", "vortex", "subway", "whiskey", "wellspring", "kazoo", "luxury", "knapsack", "kiosk", "oxygen", "microwave", "quiz", "pixel" "fluff"]

function showGame() {
    document.getElementById('gameElement').style.display = "block";
    // $('html,body').animate({scrollTop: document.body.scrollHeight},"fast");
}

function gameLoop(arr) {
    let randomWord = arr[Math.floor(Math.random() * arr.length)];
    let lettersLeft = randomWord.length;
    let answerArray = [];
    for (let i = 0; i < randomWord.length; i++) {
        answerArray[i] = " _ ";
    }
    let usedArray = [];

    document.getElementById("word").innerHTML = answerArray.join(" ");
    console.log(randomWord)
    if (lettersLeft > 0) {
        document.onkeyup = function(event) {
            var guess = event.key;
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

            if (lettersLeft === 0) {
                let restart = confirm("nice! the word was: " + randomWord + ".\n play again?")
                if (restart === true) {
                    location.reload(true)
                } else {
                    alert("thanks for playing!")
                }

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
// document.getElementById("instruments").onclick = gameLoop(randomWordArr1);
// document.getElementById("vegetables").onclick = gameLoop(randomWordArr2);
// document.getElementById("fruits").onclick = gameLoop(randomWordArr3);
