const instruments = ["harmonica", "flute", "cello", "violin", "guitar", "bass", "piano", "organ", "ukulele", "trumpet", "viola", "clarinet", "harp", "banjo", "mandolin", "marimba"];
const vegetables = ["kale", "carrot", "celery", "lettuce", "cabbage", "pea", "spinach", "broccoli", "radish", "cucumber", "tomato", "eggplant", "turnip", "squash", "pumpkin"];
const fruits = ["apple", "orange", "kiwi", "mango", "pineapple", "pear", "lemon", "banana", "peach", "cherry", "apricot", "watermelon", "strawberry", "blueberry", "grape"];
const birds = ["sparrow", "woodpecker", "finch", "crow", "owl", "robin", "cardinal", "goldfinch", "pigeon", "hawk", "eagle", "hummingbird", "starling", "chickadee", "seagull"];
const flowers = ["rose", "dandelion", "daffodil", "crocus", "peony", "violet", "tulip", "orchid", "buttercup", "lavender", "poppy", "pansy", "marigold", "lilac"];
const hard = ["jazz", "crypt", "blizzard", "equip", "galaxy", "zipper", "vortex", "subway", "whiskey", "wellspring", "kazoo", "luxury", "knapsack", "kiosk", "oxygen", "microwave", "quiz", "pixel", "fluff"];
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let loss = 0;
let win = 0;
let topic;

function showGame() {
    document.getElementById("gameElement").style.display = "block";
    document.getElementById("buttons").style.display = "none";
    $("html,body").animate({
        scrollTop: document.body.scrollHeight
    }, "fast");
};

function newGame() {
    document.getElementById("gameElement").style.display = "none";
};

function gameLoop(arr) {
    let topics = topic;
    document.getElementById("topicChoice").innerHTML = "<h4>" + topics + "</h4>";
    document.getElementById("mobileInput").focus();
    let guessesLeft = 10;
    let usedArray = [];
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("lettersUsed").innerHTML = usedArray;
    let randomWord = arr[Math.floor(Math.random() * arr.length)];
    let lettersLeft = randomWord.length;
    let answerArray = [];
    for (let i = 0; i < randomWord.length; i++) {
        answerArray[i] = " _ ";
    };
    document.getElementById("word").innerHTML = answerArray.join(" ");
    console.log(randomWord)
    if (lettersLeft > 0) {
        // document.onkeyup = function() {

            var str = '';
            document.onkeyup = function(event) {
                const currentCode = event.which || event.code;
                let guess = event.key;
                if (!guess) {
                    guess = String.fromCharCode(currentCode);
                }
                str += guess;
                event.preventDefault();
            var used = usedArray.includes(guess);
            if (!used) {
                usedArray.push(guess)
                document.getElementById("lettersUsed").innerHTML = usedArray;
                if (guess.length !== 1 || !alphabet.includes(guess)) {
                    alert("nope, not a letter. try again.")
                } else {
                    var match;
                    for (let j = 0; j < randomWord.length; j++) {
                        if (randomWord[j] === guess) {
                            answerArray[j] = guess;
                            document.getElementById("word").innerHTML = answerArray.join(" ");
                            lettersLeft--;
                            match = true;
                        };
                    };
                    if (!match) {
                        guessesLeft--;
                    };
                };
                document.getElementById("guessesLeft").innerHTML = guessesLeft;
                if (guessesLeft === 0) {
                    let restart = confirm("so close, and yet so far away...");
                    document.getElementById("buttons").style.display = "block";
                    document.getElementById("topicChoice").innerHTML = "";
                    loss++;
                    newGame();
                };
                if (lettersLeft === 0) {
                    alert("sweet! the word was " + randomWord);
                    document.getElementById("buttons").style.display = "block";
                    document.getElementById("topicChoice").innerHTML = "";
                    win++;
                    newGame();
                };
                document.getElementById("win").innerHTML = "wins: " + win;
                document.getElementById("loss").innerHTML = "losses: " + loss;
            } else {
                alert("you already tried that letter");
            };
        };
    };
};
document.getElementById("instruments").onclick = function() {
    topic = "instruments";
    showGame();
    gameLoop(instruments);
};
document.getElementById("vegetables").onclick = function() {
    topic = "vegetables";
    showGame();
    gameLoop(vegetables);
};
document.getElementById("fruits").onclick = function() {
    topic = "fruits";
    showGame();
    gameLoop(fruits);
};
document.getElementById("birds").onclick = function() {
    topic = "birds";
    showGame();
    gameLoop(birds);
};
document.getElementById("flowers").onclick = function() {
    topic = "flowers";
    showGame();
    gameLoop(flowers);
};
document.getElementById("hard").onclick = function() {
    topic = "hard";
    showGame();
    gameLoop(hard);
};