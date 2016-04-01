$(document).ready(function(){

    $("form#game").submit(function(event){
    event.preventDefault();

    var intNumber = parseInt($("input#number").val());

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

    $(".out").show();

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
    console.log(blanks);

  });
});
