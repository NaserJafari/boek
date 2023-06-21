<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Trd</title>
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="./css/som.css">
    <link rel="stylesheet" href="./css/snake.css">
    <script src="book.js" defer></script>
    <script
      src="https://kit.fontawesome.com/b0f29e9bfe.js"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <div id="book" class="book">
      <div id="p1" class="paper">
        <div class="front">
          <div id="f1" class="front-content">
            <h1>Front 1</h1>
          </div>
        </div>
        <div class="back">
          <div id="b1" class="back-content">
            <h1>Back 1</h1>
            <p>Rekensom spel</p>
            <p>Los zo veel rekensommen af als je kan!</p>
        </div>
        </div>
      </div>

      <div id="p2" class="paper">
        <div class="front">
          <div id="f2" class="front-content">
            <h1>Front 2</h1>
            <?php include_once("../boek/html/som.html"); ?>
            <script src="./js/som.js"></script>
        </div>
        </div>
        <div class="back">
          <div id="b2" class="back-content">
            <h1>Ping pong</h1>
            <p>Ping pong!</p>
        </div>
        </div>
      </div>

      <div id="p3" class="paper">
        <div class="front">
          <div id="f3" class="front-content">
            <?php include_once("./php/pong.php"); ?>
          </div>
        </div>
        <div class="back">
          <div id="b3" class="back-content">
            <h1>Back 3</h1>
          </div>
        </div>
      </div>

      <div id="p4" class="paper">
        <div class="front">
          <div id="f4" class="front-content">
          <?php include_once("./php/tictactoe.php"); ?>
          </div>
        </div>
        <div class="back">
          <div id="b4" class="back-content">
            <h1>test</h1>
          </div>
        </div>
      </div>

    </div>
    <div class="buttons">
      <button id="prev-btn" style="margin-right: 500px">
        <i class="fas fa-arrow-circle-left" style="color: #e1ff00"></i>
      </button>

      <button id="next-btn" style="margin-left: 500px">
        <i class="fas fa-arrow-circle-right" style="color: #e1ff00"></i>
      </button>
    </div>
  </body>
</html>
