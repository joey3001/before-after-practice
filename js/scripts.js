$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");
     $("ul#user").children("li").first().click(function() {
  alert('hi');
        });
});

$("h2").click(function() {
	$("button#hello").addClass("green");
});

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
     $("ul#user").children("li").first().click(function() {
  			alert('hi');
   });
});

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
     $("ul#user").children("li").first().click(function() {
  			alert('hi');
  });
 });
 });