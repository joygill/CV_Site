// $( "h2" ).click(function() {
//   $( ".description" ).toggle( "slow", function() {
// 	});    
// });

// figure out how to malke each tag work individually use the "this" tag
// for now use the same j quiery funciton but specify each title as it's own disctinction
/*$("h2").click(function() {
	$(".section").toggle();
});*/

$("h2.recent").click(function() {
	$("div.recent").toggle();
});

$("h2.experience").click(function() {
	$("div.experience").toggle();
});

$("h2.education").click(function() {
	$("div.education").toggle();
});

