/*$(document).ready(function() {
    $.ajax({
	url: "http://localhost:8000/prueba.txt"
    })
	.done(function( html ) {
	$("#texto").append( html );
    });
});*/
$(document).ready(function() {
    $("#bot").click(function(){
	$.ajax({
		url: "http://localhost:8000/prueba.txt"
   	 })
		.done(function( html ) {
		$("#texto").append( html );
    	});
    });
});
