$(document).ready(function() {

	$("#btn-alumnas").click(function() {
		$.ajax({
			url: window.location.href + "demo.json",
			type: "GET",
			success: function(response) {
				datos(response);	
			},
			error: function(error) {
				console.log(error);
			}
		});
	});
});

var datos = function(response) {

	var alumnas = "<ul>"
	for (var i = 0, l = response.alumnas.length; i < l; i++) {
		alumnas += "<li>" + response.alumnas[i] + "</li>";
	}
	alumnas += "</ul>";
	$("#alumnas").html(alumnas);
};