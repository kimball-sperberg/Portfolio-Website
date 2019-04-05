//remove dialogue box when you tap or click on it
$(function(){
  var $img       = $("#dialogueBubble")
    , $container = $("#dialogueContainer");
  $img.on("click", function() {
    $img.remove();
    $container.removeClass().removeAttr("id");
  });
});
