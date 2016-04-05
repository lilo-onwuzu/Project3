// Business Logic
var pingpong = function(intNumber){ // pingpong function to be called back in UI code
  var blanks = []; // the pingpong function builds an arbitrary array called blanks and returns the blanks array when the pingpong function is called back later on in the UI code.

  for (var index = 1; index <= intNumber; index +=1){
    if (index%3 === 0 && index%5 === 0){
      blanks.push("pingpong");
    } else if (index%3 === 0){
      blanks.push("ping");
    } else if (index%5 === 0){
      blanks.push("pong");
    } else {
      blanks.push(index);
      };
  };

  return(blanks); // blanks will be returned any new array whenever pingpong is called back

};

// User Interface Logic
$(document).ready(function(){
  $("form#game").submit(function(event){
    event.preventDefault(); // prevent submit event default operation which is to refresh (submit) every cycle

    var intNumber = parseInt($("input#number").val()); // imports input number

    $("#result li").remove(); // clears list everytime submit event occurs

    var localBlanks = pingpong(intNumber); // callback of the pingpong function with the input number as an argument. localBlanks is a new local array variable

    localBlanks.forEach(function(localBlank){
      $("#result").append("<li>"+localBlank+"</li>");
    });

    $(".out").show(); // show the output div

  }); // End of submit event

  $(".showGame").click(function(){
    $(".view").show();
    $(".hideGame").show();
    $(".showGame").hide();
  });

  $("p.hideGame").click(function(){
    $(".view").hide();
    $(".hideGame").hide();
    $(".showGame").show();
  });
// Hitting submit event does not have to refresh the show/hide function so it stays outside but within the ready function
}); // End of document ready event
