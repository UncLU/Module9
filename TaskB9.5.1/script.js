// let basket = [
//     "apple",
//     "kivi",
//     "banana",
//     "sugar"
// ];

// console.log(basket)
// console.log(basket[2])
// let text = basket.toString();
// document.getElementById("demo").innerHTML = text;
$("#reg-button").click(function() {
    $("#dark").css({"display":"block"});
    $("#Register").slideDown(400).css({"display":"block"});
    
  });
  
  $("#button-x1").click(function() {
    $("#Register").slideUp(200);
    $("#dark").css({"display":"none"});
  });
  
  $("#log-button").click(function() {
    $("#dark").css({"display":"block"});
    $("#Login").slideDown(400).css({"display":"block"});
    
  });
  
  $("#button-x2").click(function() {
    $("#Login").slideUp(200);
    $("#dark").css({"display":"none"});
  });
  
  