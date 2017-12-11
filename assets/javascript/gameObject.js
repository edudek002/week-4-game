/*

* Gems class

*/
  
var Gems = function(number) {
    //this.counter=0; 

    //create a large random number 19-120

    this.Min =19;
    this.Max =120;
    this.min =1;
    this.max =12;
    this.numberLg=numberLg;
    this.numberSm=numberSm;
    this.randomLg =[];
    this.randomSm =[0,0,0,0,];

 

  }

  Gems.prototype.setRandomLg = function() {
    var numberLg = [Math.floor(Math.random() * (this.Max - this.Min + 1)) + this.Min];
    this.randomLg = numberLg;
    console.log("first large =" + numberLg);
    //alert("large number is " + number);
    //document.getElementById("random-numberLg").innerHTML = this.randomLg;
    $("#random-numberLg").text(this.randomLg);

  }

  // create a small random number 1-12 for different crystals

  Gems.prototype.setRandomSm = function() {
    //for (var i = 0; i <4; i++) {

      var numberSm =[Math.floor(Math.random() * (this.max - this.min + 1)) + this.min];
      this.randomSm = numberSm;
      console.log("first small =" + numberSm);
      //alert("large number is " + number);
      //document.getElementById("random-numberSm").innerHTML = this.randomSm;
      $("#total-number").text(this.randomSm);
    //};
  }

    
    
  Gems.prototype.setGems = function() {
    var imageGem=[];
    for (var i = 0; i < randomSm.length; i++) {
      imageGem[i] = $("<img>");
      imageGem[i].addClass("gem-image");
      var color = ["gemstoneBlue.jpg", "gemstoneGreen.jpg", "gemstoneRed.jpg", "gemstoneYellow.jpg"];
      imageGem[i].attr("src", color[i]);
      imageGem[i].attr("data-gemvalue", randomSm[i]);
      $("#gems").append(imageGem[i]);
    }
  }
  


  

  /*
  Gems.prototype.setgems = function() {

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

    */

   
 



    //console.log("Random number = " + newGems.number);


    var Max=120;
    var Min=19;
    var numberLg =Math.floor(Math.random() * (Max - Min + 1)) + Min

    var max=12;
    var min=1;
    var numberSm =Math.floor(Math.random() * (max - min + 1)) + min;

    var newGemsLg = new Gems(numberLg);
    newGemsLg.setRandomLg();

    
    var newGemsSm = new Gems(numberSm);
    newGemsSm.setRandomSm();

    var newGemsImage = new Gems(imageGem);
    newGemsImage.setGems();



    
    //console.log("Random Large number = " + newGemsLg.numberLg);
    //console.log("Random Small number = " + newGemsSm.numberSm);

