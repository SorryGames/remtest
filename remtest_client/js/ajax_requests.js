"use strict";


function startup() {
	$(".ajax-content").load("./html_data/startup.html", function(response_text, status_text, xhr){
	if(status_text === "success")		
		toggle_navbar();
		toggle_active();
	});
}

function popular() {
	$(".ajax-content").load("./html_data/popular.html", function(response_text, status_text, xhr){
	if(status_text === "success")		
		toggle_navbar();
		toggle_active("#popular");
	});
}

function add_pack() {
	$(".ajax-content").load("./html_data/add_pack.html", function(response_text, status_text, xhr){
	if(status_text === "success")		
		toggle_navbar();
		toggle_active("#add_pack");
 	});
}

function about() {
	$(".ajax-content").load("./html_data/about.html", function(response_text, status_text, xhr){
	if(status_text === "success")		
		toggle_navbar();
		toggle_active("#about");
	});
}



function make_search() {
	var search_value = $("input.form-control").val();

	if (search_value.length > 0) {
		$("input.form-control").val("");
		$.ajax({
			url: "server/search",
			type: "get",
			data: {
				key: search_value.toString()
			},
			success: function(response) {
				console.log(response);
			}
		});
	}

}



function toggle_navbar() {
	$('#navbarMenu').collapse('hide');
}
function toggle_active(active_id) {
	$("#add_pack").removeClass("active");
	$("#popular").removeClass("active");
	$("#about").removeClass("active");
	if (typeof active_id !== "undefined") {
		$(active_id).addClass("active");
	}

	footer_move();
}