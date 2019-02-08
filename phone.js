$(document).ready(function(){ // do when doc loads
	//$("#x") is JQuery and means do something to the HTML tag with ID x 
	$("#content_dialer").show(); //show element with ID content dialer
	$("#content_list").hide(); //hide element with ID content list 
	$("#content_new").hide(); //hide elemnt with the ID content new 
	$("#content_help").hide();
	$("#dialer").css({"background-color": "#DCDCDC", "color": "black"});
	$("#list").css({"background-color": "#5E35B1", "color" : "white"});
	$("#new").css({"background-color": "#5E35B1", "color" : "white"});
});

$("#dialer").click(function(){
	$("#content_dialer").show();
	$("#content_list").hide();
	$("#content_new").hide();
	$("#content_help").hide();
	$("#dialer").css({"background-color": "#DCDCDC", "color": "black"});
	$("#list").css({"background-color": "#5E35B1", "color" : "white"});
	$("#new").css({"background-color": "#5E35B1", "color" : "white"});
});

$("#list").click(function(){
	$("#content_dialer").hide();
	$("#content_list").show();
	$("#content_new").hide();
	$("#dialer").css({"background-color": "#5E35B1", "color" : "white"});
	$("#list").css({"background-color": "#DCDCDC", "color": "black"});
	$("#new").css({"background-color": "#5E35B1", "color" : "white"});
});

$("#new").click(function(){
	$("#content_dialer").hide();
	$("#content_list").hide();
	$("#content_new").show();
	$("#content_help").hide();
	$("#dialer").css({"background-color": "#5E35B1", "color" : "white"});
	$("#list").css({"background-color": "#5E35B1", "color" : "white"});
	$("#new").css({"background-color": "#DCDCDC", "color": "black"});
});

$("#help").click(function(){
	$("#content_dialer").hide();
	$("#content_list").hide();
	$("#content_new").hide();
	$("#content_help").show();
	$("#dialer").css({"background-color": "#5E35B1", "color" : "white"});
	$("#list").css({"background-color": "#5E35B1", "color" : "white"});
	$("#new").css({"background-color": "#5E35B1", "color": "white"});
	$("#help").css({"background-color": "#DCDCDC", "color": "black"});
});

/* fancy dialing functions */
$("#dialer_pad button").click(function() {
	$("#input_dialer").val($("#input_dialer").val() + this.innerText);
})

$("#button_dialer_clear").click(function() {
	$("#input_dialer").val("");
})