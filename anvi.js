$(document).ready(function(){
	$( function() {
		  var parent_container = '';
	    $( ".connectedSortable" ).sortable({
	      connectWith: ".connectedSortable"
	    }).disableSelection();
	  } );

		$( ".card" ).sortable({ containment: "#demo", scroll: true , out: function( event, ui ) {
					parent_container = $(this);}
			});

		$( ".connectedSortable" ).droppable({

      classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },
			out: function( event, ui ) {
				console.log(parent_container);
			//$(this).removeClass('ui-droppable-active').removeClass('ui-state-active').removeClass('ui-droppable-hover').removeClass('ui-state-hover');
		}


    });

		$(".card").click(function(e) {
		$('#title').text($(this).find('.myTitle').attr("data-title-type"))
		$('#myId').text($(this).find('.myId').attr("data-id-type"))
		$(".menu").css("display", "block");
		$(".menu").css("right", "0");
		$("body").css("margin-right", $(".menu").outerWidth());
		});

		$("button").click(function(){
    $(".menu").hide();
	$("body").css("margin-right", "0");

	$(".card").draggable ({
        containment : "table"
    });
});
})

function showDetails(id) {
		var idType = id.getAttribute("data-id-type");
		console.log(idType);
		var titleType = id.getAttribute("data-title-type");
		console.log(titleType);
	}
