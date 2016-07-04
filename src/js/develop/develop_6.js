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

function tabsForTable(){
	$(".open-tiket, .clothe-tiket").on('click',function(){
		console.log('hi');
		$('.open-tiket, .clothe-tiket').removeClass('active');
		$(this).addClass('active');
	})
}

$(document).ready(function(){
	sorter();
	pager();
	tabsForTable();

});

$(window).load(function(){

});

$(window).resize(function(){

});