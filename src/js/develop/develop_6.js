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
	$("#tableToSort").tablesorter();
}

function tabsForTable(){
	// $(".open-tiket, .clothe-tiket").on('click',function(){
	// 	$('.open-tiket, .clothe-tiket').removeClass('active');
	// 	$(this).addClass('active');
	// });
	$('.tab-bottom-row .tab-item').not(':first').hide();
	$('.tab-button .open-tiket').click(function(){
	    $('.tab-button .open-tiket').removeClass('active').eq($(this).index()).addClass('active');
	    $('.tab-bottom-row .tab-item').hide().eq($(this).index()).show();
	}).eq(0).addClass('active');
}


function copyToBufer(){
	var copyEmailBtn = document.querySelector('.copy-link');
	if (copyEmailBtn){
		copyEmailBtn.addEventListener('click', function(event) {
		  var emailLink = document.querySelector('.referal-link-text');
		  var range = document.createRange();
		  range.selectNode(emailLink);
		  window.getSelection().addRange(range);
		  try {
		    var successful = document.execCommand('copy');
		    var msg = successful ? 'successful' : 'unsuccessful';
		  } catch(err) {}
		  window.getSelection().removeAllRanges();
		});
	}
}

$(document).ready(function(){

	sorter();
	pager();
	tabsForTable();
	copyToBufer();
});

$(window).load(function(){

});

$(window).resize(function(){

});