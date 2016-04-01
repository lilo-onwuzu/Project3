$(document).ready(function(){
  $("form#game").submit(function(event){
    event.preventDefault();

// Business Logic
    var intNumber = parseInt($("input#number").val());
    var blanks = [];

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

// User Interface Logic
    $("#result li").remove();

    blanks.forEach(function(blank){
      $("#result").append("<li>"+blank+"</li>");
    });

    $(".out").show();

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

}); // End of document ready event
