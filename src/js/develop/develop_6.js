function pager(){
	  $('#pager').on('click', "label", function(){

	  $('#pager label').css('background','#eaeced');
		var thisLabel = $(this);
		thisLabel.css('background','transparent');	
	  var num = $(this).attr('value');	
	  var formSur = {
	  	"action": "addContent",
	  	"number": num
	  };
	    $.ajax({
	        url : 'table.html',
	        data: formSur,
	        method:'POST',
	        success : function(data){
	      		$('#tableToSort tbody').remove();
	      		$('#tableToSort').append(data);

	        }
	    });
	})
}

function sorter(){
	$("#tableToSort")
		.tablesorter(); 
}

$(document).ready(function(){
	sorter();
	pager();

});

$(window).load(function(){

});

$(window).resize(function(){

});