$(document).ready(function() {
  $("button#cats").click(function() {
    $("ul#user").prepend("<li>Ah, you said cats!</li>");
     $("ul#webpage").prepend("<li>Meow!</li>");
  });
  $("button#dogs").click(function() {
    $("ul#user").prepend("<li>Ah, you said dogs!</li>");
     $("ul#webpage").prepend("<li>Woof!</li>");
  });
  $("button#both").click(function() {
    $("ul#user").prepend("<li>Ah, you like cats and dogs!</li>");
     $("ul#webpage").prepend("<li>Meow!, Ruff!</li>");
  });
});
