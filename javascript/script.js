$(document).ready(function(){
	$( function() {
	    $( ".connectedSortable" ).sortable({
	      connectWith: ".connectedSortable"
	    }).disableSelection();
	  } );

		$( ".card" ).sortable({ containment: "#containment-wrapper", scroll: false });

		$( ".connectedSortable" ).droppable({

      classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },

      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" );
        return false;
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
