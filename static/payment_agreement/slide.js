
$(document).ready(function (){

	$("#hide").click(function(){
		
			$("#more_card").slideUp('slow');
			$("#show").show();
			$("#hide").hide();

		
	});
   
});

$(document).ready(function () {
    $("#invoiceCheckbox").click(function () {
        invoiceDivToggle();
    });

    function invoiceDivToggle(){
        if($("#invoiceCheckbox").length == 0){
            return;
        }
        if ($("#invoiceCheckbox").attr('checked')) {
            $("#invoiceCountry").removeAttr('disabled');
            $("#change_vat").slideDown('slow');
        }
        else {
            $("#invoiceCountry").attr('disabled', 'disabled');
            $("#change_vat").slideUp('slow');
        }
    }

    invoiceDivToggle();
});

  