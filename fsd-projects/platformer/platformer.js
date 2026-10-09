$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(100, 620, 100, 20, "lightblue");
    createPlatform(555, 490, 40, 20, "lightblue");
    createPlatform(1200, 410, 50, 20, "lightblue");
    createPlatform(1080, 310, 50, 20, "lightblue");
    createPlatform(100, 200, 150, 40, "black");
    createPlatform(90, 40, 10, 200, "black");
    createPlatform(720, 670, 700, 30, "black");
    createPlatform(720, 500, 20, 200, "black");
    createPlatform(720, 500, 600, 20, "black");
    createPlatform(1200, 210, 50, 20, "lightblue");
    createPlatform(260, 500, 40, 20, "lightblue", 250, 400, 2, 0);
    createBadPlatform(1300, 670, 30, 20, "red")
    createBadPlatform(1200, 670, 30, 20, "red")
    createBadPlatform(1100, 670, 30, 20, "red")
    createBadPlatform(1000, 670, 30, 20, "red")
    createBadPlatform(900, 670, 30, 20, "red")
    createPlatform(500, 110 , 100, 20, "lightblue", 250, 1080, 2);
    createBadPlatform(970, 110, 20, 20, "red")
    createBadPlatform(800, 110, 20, 20, "red")
    createBadPlatform(645, 110, 20, 20, "red")
  

    // TODO 3 - Create Collectables
    createCollectable("database", 150, 100, 2, 0.9);
    createCollectable("kennedi", 680, 350, 0, 0.7, 680, 800, 2);
    createCollectable("diamond", 750, 630, 0, 0.7, 750, 850, 2);
    createCollectable("steve", 1200, 110, 0, 0.7, 1100, 1300, 2);
    createCollectable("steve", 400, 50, 0, 0.7, 200, 1000, 2);

    // TODO 4 - Create Cannons
    createCannon("right", 400, 2500, 20, 20, 200, 500, 3);
    createCannon("top", 400, 1000, 20, 20, 200, 400, 3);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }
  registerSetup(setup);
});
