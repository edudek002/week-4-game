


var counter=0; 

    //create a large random number 19-120

    var min =19;

    var max =120;

    var randomLg =0;

    randomLg =Math.floor(Math.random() * (max - min + 1)) + min;

    $("#random-numberLg").text(randomLg);

 

    // create a small random number 1-12 for different crystals



    var min =1;

    var max =12;

    var randomSm = [0,0,0,0];

    var imageGem=[];

    for (var i = 0; i <4; i++) {

      randomSm[i] =Math.floor(Math.random() * (max - min + 1)) + min;
      console.log(randomSm[i]);
      };
    
    
    for (var i = 0; i < randomSm.length; i++) {

      imageGem[i] = $("<img>");
      imageGem[i].addClass("gem-image");
      var color = ["assets/images/gemstoneBlue.jpg", "assets/images/gemstoneGreen.jpg", "assets/images/gemstoneRed.jpg", "assets/images/gemstoneYellow.jpg"];
      imageGem[i].attr("src", color[i]);
      imageGem[i].attr("data-gemvalue", randomSm[i]);
      $("#gems").append(imageGem[i]);
    }


    $(".gem-image").on("click", function() {
      
      var gemValue = ($(this).attr("data-gemvalue"));
      alert("you guessed: " + gemValue);
      gemValue = parseInt(gemValue);
      counter += gemValue;

      $("#total-number").text(counter);

      if (counter === randomLg) {
        alert("You win!");
      }
      else if (counter >= randomLg) {
        alert("You lose!!");
      }

    });
