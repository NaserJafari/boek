document.addEventListener("DOMContentLoaded", function () {
  const wordContainer = document.getElementById("word-container");
  const incorrectGuessesElement = document.getElementById("incorrect-guesses");
  const animalsButton = document.getElementById("animals-button");
  const countriesButton = document.getElementById("countries-button");
  const fruitsButton = document.getElementById("fruits-button");
  const remainingGuessesElement = document.getElementById("remaining-guesses");
  const roundElement = document.getElementById("round");
  const scoreElement = document.getElementById("score");
  const resetButton = document.getElementById("reset-button");

  let selectedOption = null;
  let wordList = [];
  let guessedLetters = [];
  let incorrectGuesses = 0;
  let consecutiveWins = 0;
  let round = 1;
  let score = 0;

  const options = {
    animals: [
      "Fox",
      "Wolf",
      "Cat",
      "Dog",
      "Sheep",
      "Pig",
      "Chicken",
      "Tiger",
      "Cow",
      "Horse",
      "Elephant",
      "Birds",
      "Beaver",
      "Polar Bear",
      "Lion",
      "Rabbit",
      "Leopard",
      "Fish",
      "Crab",
      "Shark",
      "Goat",
      "Monkey",
      "Kiwi",
    ],
    countries: [
      "Albania",
      "Armenia",
      "Austria",
      "Azerbaijan",
      "Belarus",
      "Belgium",
      "Bulgaria",
      "Croatia",
      "Cyprus",
      "Czech Republic",
      "Denmark",
      "Estonia",
      "Finland",
      "France",
      "Georgia",
      "Germany",
      "Greece",
      "Hungary",
      "Iceland",
      "Ireland",
      "Italy",
      "Latvia",
      "Lithuania",
      "Luxembourg",
      "Malta",
      "Moldova",
      "Monaco",
      "Montenegro",
      "Netherlands",
      "Norway",
      "Poland",
      "Portugal",
      "Romania",
      "Russia",
      "Serbia",
      "Slovenia",
      "Spain",
      "Sweden",
      "Switzerland",
      "Turkey",
      "Ukraine",
      "United Kingdom",
      "Argentina",
      "Australia",
      "Brazil",
      "Canada",
      "China",
      "Egypt",
      "India",
      "Indonesia",
      "Japan",
      "Mexico",
      "Nigeria",
      "Pakistan",
      "Saudi Arabia",
      "South Africa",
      "South Korea",
      "United States",
      "Venezuela",
    ],
    fruits: [
      "Apple",
      "Banana",
      "Lemon",
      "Watermelon",
      "Blueberry",
      "Berry",
      "Carrot",
      "Pineapple",
      "Eggplant",
      "Dragon Fruit",
      "Coconut",
    ],
  };

  const initializeGame = () => {
    selectedOption = null;
    wordList = [];
    guessedLetters = [];
    incorrectGuesses = 0;
    incorrectGuessesElement.textContent = "";
    remainingGuessesElement.textContent = "";
    clearWordContainer();
    setCategoryButtonsActiveState(false, null);
    hideResetButton();
    roundElement.textContent = `Round: ${round}`;
    scoreElement.textContent = `Score: ${score}`;
  };

  const clearWordContainer = () => {
    wordContainer.innerHTML = "";
  };

  const displayWord = () => {
    clearWordContainer();
    const word = wordList
      .map((letter) => {
        if (letter === " ") {
          return "&nbsp;";
        } else if (guessedLetters.includes(letter)) {
          return letter;
        } else {
          return "_";
        }
      })
      .join(" ");
    wordContainer.innerHTML = word;
  };

  const getRandomWord = (category) => {
    const words = options[category];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex].toUpperCase();
  };

  const chooseCategory = (category) => {
    selectedOption = category;
    wordList = getRandomWord(selectedOption).split("");
    guessedLetters = [];
    displayWord();
    setCategoryButtonsActiveState(category);
  };

  const setCategoryButtonsActiveState = (category) => {
    const categoryButtons = document.querySelectorAll(".category");
    categoryButtons.forEach((button) => {
      if (button.id === `${category}-button`) {
        button.classList.add("active");
        button.disabled = false;
      } else {
        button.classList.remove("active");
        button.classList.add("disabled");
        button.disabled = true;
      }
    });
  };

  const handleLetterGuess = (letter) => {
    if (guessedLetters.includes(letter)) {
      return; // Letter has already been guessed
    }

    guessedLetters.push(letter);

    if (!wordList.includes(letter)) {
      incorrectGuesses++;
      incorrectGuessesElement.textContent += letter + " ";
      const remainingGuesses = 6 - incorrectGuesses;
      remainingGuessesElement.textContent = `Remaining Guesses: ${remainingGuesses}`;
    }

    displayWord();

    if (isGameOver()) {
      endGame();
    }
  };

  const isGameOver = () => {
    return (
      wordList.every((letter) => guessedLetters.includes(letter)) ||
      incorrectGuesses >= 6
    );
  };

  const endGame = () => {
    setCategoryButtonsActiveState(false, null);

    const revealedLetters = wordList.filter((letter) =>
      guessedLetters.includes(letter)
    );
    if (revealedLetters.length === wordList.length) {
      alert("Congratulations! You won.");
      consecutiveWins++;
      score++;
      scoreElement.textContent = `Score: ${score}`;
    } else {
      const revealedWord = wordList.join("");
      alert(`You lost. The word was: ${revealedWord}`);
      consecutiveWins = 0; // Reset consecutive wins counter
    }

    if (isGameOver()) {
      showResetButton();
    } else {
      hideResetButton();
    }
  };

  const showResetButton = () => {
    resetButton.classList.remove("hidden");
    resetButton.addEventListener("click", resetGame);
  };

  const hideResetButton = () => {
    resetButton.classList.add("hidden");
    resetButton.removeEventListener("click", resetGame);
  };

  const resetGame = () => {
    round++;
    roundElement.textContent = `Round: ${round}`;
    initializeGame();
  };

  resetButton.addEventListener("click", resetGame);

  animalsButton.addEventListener("click", () => {
    chooseCategory("animals");
  });

  countriesButton.addEventListener("click", () => {
    chooseCategory("countries");
  });

  fruitsButton.addEventListener("click", () => {
    chooseCategory("fruits");
  });

  document.addEventListener("keypress", (event) => {
    const keyPressed = String.fromCharCode(event.keyCode).toUpperCase();
    if (selectedOption && /^[A-Z]$/.test(keyPressed)) {
      handleLetterGuess(keyPressed);
    }
  });

  initializeGame();
});
