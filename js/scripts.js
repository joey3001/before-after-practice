$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").before("<ul>Hello!</ul>");
    $("ul#webpage").before("<ul>Why hello there!</ul>");
    $("li").click(function() {
			$("li").addClass("green")})
    $("ul#user").children("li").first().click(function() {
    	$("button").remove();
        });
});



  $("button#goodbye").click(function() {
    $("ul#user").after("<ul>Goodbye!</ul>");
    $("ul#webpage").after("<ul>Goodbye, dear user!</ul>");
     $("ul#user").children("li").first().click(function() {
  		$("button").remove();
   });
});

  $("button#stop").click(function() {
    $("ul#user").after("<ul>Stop copying me!</ul>");
    $("ul#webpage").after("<ul>Pardon me. I meant no offense.</ul>");
     $("ul#user").children("li").first().click(function() {
  	 $("button").remove();
  });
 });
 });