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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(300, 620, 150, 40, "pink"); 
  createPlatform(555, 490, 80, 40, "lightblue");
  createPlatform(550, 200, 150, 40, "lightgreen");
  createPlatform(750, 410, 20, 100, "lightgreen");
  createPlatform(880, 268, 20, 60, "pink");
  createPlatform(250, 200, 150, 40, "pink");
  createPlatform(920, 470, 150, 40, "pink");
  createPlatform(1000, 180, 100, 40, "lightblue");

    // TODO 3 - Create Collectables
createCollectable("database", 298, 80, 0.5, 0.7);
  createCollectable("kennedi", 555, 240, 0.5, 0.7);
  createCollectable("diamond", 960, 440, 0.5, 0.7);
  createCollectable("steve", 1000, 170, 0.5, 0.7);
 
    // TODO 4 - Create Cannons
createCannon("right", 300, 2000);
  createCannon("top", 440, 1700);
  createCannon("top", 440, 1800);
  
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
