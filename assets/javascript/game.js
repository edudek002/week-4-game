//create a large random number 19-120

    var Min =19;
    var Max =120;
    var randomLg =0;
    var min =1;
    var max =12;
    var randomSm = [];
    var counter=0;
    var gemValue=0;


    

    //Create a gem
    
    var imageGem=[$("<img>"),$("<img>"),$("<img>"),$("<img>")];
    
    for (var i = 0; i <4; i++) {      

        imageGem[i].addClass("gem-image");
        var color = ["assets/images/gemstoneBlue.jpg", "assets/images/gemstoneGreen.jpg", "assets/images/gemstoneRed.jpg", "assets/images/gemstoneYellow.jpg"];
        imageGem[i].attr("src", color[i]);

      };


    
    
    function startGame() {

      // create a large random number 19-120 for different crystals
      randomLg =0;
      counter =0;

      randomLg =Math.floor(Math.random() * (Max - Min + 1)) + Min;
      console.log("Random Large = " + randomLg);
      $("#random-numberLg").text(randomLg);
      $("#total-number").text(this.counter);
    } 

    function roundComplete() {  

      // create a small random number 1-12 for different crystals
      randomSm = [0,0,0,0];
      gemValue=0;

      console.log("random small reset " + randomSm[3]);
      console.log("gemvalue = " + gemValue);
      
      for (var i = 0; i <4; i++) {


        randomSm[i] =Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(randomSm[i]);
      
        imageGem[i].attr("data-gemvalue", randomSm[i]);

        $("#gems").append(imageGem[i]);
      };


      //$.each(randomSm, function (index, value))


      $(".gem-image").on("click", function() {

        gemValue = ($(this).attr("data-gemvalue"));
        console.log("After click gemvalue = " + gemValue);
        alert("you guessed: " + gemValue);
        gemValue = parseInt(gemValue);
        counter += gemValue;

        $("#total-number").text(counter);

        if (counter === randomLg) {
          alert("You win!");
          var win =0;
          win++;
          console.log("win " + win);
          $("#wins").text(win);
          //start new game
          startGame();
          roundComplete();
        }
        else if (counter >= randomLg) {
          alert("You lose!!");
          var loss =0;
          loss++;
          console.log("loss " + loss); 
          $("#losses").text(loss);
          //start new game
          startGame();
          roundComplete();
        }

      });

    }


    // MAIN PROCESS
    // -----------------------------------------

    //Starts the Game by running the startGame() function

    startGame();

    roundComplete();

