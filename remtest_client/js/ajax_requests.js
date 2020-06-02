function startup() {
	$(".contentDiv").load("./html_data/startup.html", function(response_text, status_text, xhr){
	if(status_text == "success")		
		toggle_navbar();
	});
}

function popular() {
	$(".contentDiv").load("./html_data/popular.html", function(response_text, status_text, xhr){
	if(status_text == "success")		
		toggle_navbar();
	});
}

function add_pack() {
	$(".contentDiv").load("./html_data/add_pack.html", function(response_text, status_text, xhr){
	if(status_text == "success")		
		toggle_navbar();
 	});
}

function about() {
	$(".contentDiv").load("./html_data/about.html", function(response_text, status_text, xhr){
	if(status_text == "success")		
		toggle_navbar();
	});
}

function toggle_navbar() {
	$('#navbarMenu').collapse('hide');
}