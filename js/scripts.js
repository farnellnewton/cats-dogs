$(document).ready(function() {
  $("button.cats").click(function() {
    $("ul#user").append("<li>Ah, you said cats!</li>");
    $("ul#webpage").append("<li>Meow!</li>");
  });
  $("button.dogs").click(function() {
    $("ul#user").append("<li>Ah, you said dogs!</li>");
    $("ul#webpage").append("<li>Woof!</li>");
  });
  $("button.both").click(function() {
    $("ul#user").append("<li>Ah, you like cats and dogs!</li>");
    $("ul#webpage").append("<li>Meow!, Ruff!</li>");
  });
  $("button#cats").click(function() {
    $("#img-cats").toggle();
    $("#img-showing").toggle();
  });
  $("button#dogs").click(function() {
    $("#img-dogs").toggle();
    $("#img-showing").toggle();
  });
  $("button#both").click(function() {
    $("#img-both").toggle();
    $("#img-showing").toggle();
  });
});
