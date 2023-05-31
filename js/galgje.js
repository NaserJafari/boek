document.addEventListener("DOMContentLoaded", function () {
  //variabelen
  const letterContainer = document.getElementById("letter-container");
  const optionsContainer = document.getElementById("options-container");
  const userInputSelection = document.getElementById("user-input-selection");
  const newGameContainer = document.getElementById("new-game-container");
  // code die op de button moet zodat dit alles in spawned  //
  const newGameButton = document.getElementById("new-game-button");
  const canvas = document.getElementById("canvas");
  const resultText = document.getElementById("result-text");
  // de code die op de button moet zodat dit inlaad STOPT HIER //

  //count
  let winCount = 0;
  let count = 0;
  let chosenWord = "";

  //options value for buttons
  let options = {
    fruits: [
      "Apple",
      "Banana",
      "Lemon",
      "Watermelon",
      "Blueberry",
      "berry",
      "Carrot",
      "Pineapple",
      "Eggplant",
      "Dragon Fruit",
      "coconut",
    ],
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
      "Bever",
      "Polar Bear",
      "Lion",
      "Rabit",
      "Leopart",
      "Fish",
      "Crab",
      "Shark",
      "Goat",
      "Monkey",
      "kiwi",
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
  };

  //display button
  const displayOptions = () => {
    optionsContainer.innerHTML = "<h3>Select your option</h3>";
    let buttonCon = document.createElement("div");
    for (let value in options) {
      buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
    }
    optionsContainer.appendChild(buttonCon);
  };

  // Call the function to display the options
  displayOptions();

  //word generator
  const generateWord = (optionValue) => {
    let optionsButtons = document.querySelectorAll(".options");
    //highlight the button you chose
    optionsButtons.forEach((button) => {
      if (button.innerText.toLowerCase() === optionValue) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
      button.disable = true;
    });
  };

  //initial function (called when page loads/usser pressen new game)
  const initializer = () => {
    winCount = 0;
    count = 0;
    displayOptions();
  };

  //New Game
  newGameButton.addEventListener("click", initializer);
  window.onload = initializer;
});
