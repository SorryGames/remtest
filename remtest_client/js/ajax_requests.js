"use strict";


function startup() {
	$(".ajax-content").load("./html_data/startup.html", function(response_text, status_text, xhr) {
		if(status_text === "success") {
			toggle_navbar();
			toggle_active();
		}	
	});
}

function popular() {
	make_search("#popular");
	toggle_navbar();
	toggle_active("#popular");
}

function add_pack() {
	$(".ajax-content").load("./html_data/add_pack.html", function(response_text, status_text, xhr) {
		if(status_text === "success") {
			toggle_navbar();
			toggle_active("#add_pack");
		}	
 	});
}

function about() {
	$(".ajax-content").load("./html_data/about.html", function(response_text, status_text, xhr) {
		if(status_text === "success") {
			toggle_navbar();
			toggle_active("#about");
		}	
	});
}


function load_test(element_id) {
	var test_id = element_id.dataset.id;

	$(".ajax-content").load("./html_data/test.html", function(response_text, status_text, xhr) {
		if(status_text === "success") {
			toggle_navbar();
			toggle_active("#about");
			$.ajax({
				url: "server/loadtest",
				type: "GET",
				data: {
					id: test_id.toString()
				},
				success: function(response) {
					footer_move();
					toggle_navbar();
					toggle_active();
					init_test(response);
				}
			});
		}		
	});


}


function make_search(search_value) {
	if (typeof search_value === "undefined") {
		var search_value = $("input.form-control").val();
	}
	$("input.form-control").val("");

	if (search_value.length > 0) {
		$.ajax({
			url: "server/search",
			type: "GET",
			data: {
				key: search_value.toString()
			},
			success: function(response) {
				$("div.ajax-content").html(response);
				footer_move();
			}
		});
	}
	toggle_navbar();
	toggle_active();
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