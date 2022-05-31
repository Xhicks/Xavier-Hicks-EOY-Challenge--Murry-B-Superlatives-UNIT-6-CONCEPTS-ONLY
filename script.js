$(".submit").click(function(){
    $(".goodbye-note").show();
});

$(".submit").click(function(){
    $("h1").text("Thanks for leaving a superlative");
});

$("submit").click(function(){
    let goodbyenote= $(".name-input",".most-likely-to-input",".summer-plans-input").val();
    $(".name-input",".most-likely-to-input",".summer-plans-input").val();
});
 































//DO NOT TOUCH CODE BELOW! 
let notesCreated=0;
$("button").click(function(){
notesCreated = notesCreated + 1;
    let name = $(".name-input").val();
   let superlative = $(".most-likely-to-input").val();
    let learned = $(".learned-input").val();
    let summer = $(".summer-plans-input").val();
    $(".goodbye-note").append("<p>Shoutout to " + name + ", who is most likely to " + superlative + "! One thing I've learned from you is " + learned + ", and I hope you get to " + summer + " over the summer break. See you next year?!</p>");
    $(".count").text(notesCreated);
});
 