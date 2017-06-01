
	jQuery.validator.addMethod("rulesRequired", $.validator.methods.required );
	jQuery.validator.addClassRules({
		rulesRequired : { rulesRequired : true}
	});

	jQuery.validator.addMethod("peselRequired", $.validator.methods.required );
	jQuery.validator.addMethod("pesel", function(value, element) {
		var pesel = value.replace(/[\ \-]/gi, '');
		if (pesel.length != 11)
		{
			return false;
		} else {
			var steps = new Array(1, 3, 7, 9, 1, 3, 7, 9, 1, 3);
			var sum_nb = 0;
			for (var x = 0; x < 10; x++) { sum_nb += steps[x] * pesel[x];}
			sum_m = 10 - sum_nb % 10;
			if (sum_m == 10) { sum_c = 0; } else { sum_c = sum_m;}
			if (sum_c != pesel[10]) {	return false;}
		}
		return true;
		} );

	jQuery.validator.addClassRules({
		pesel : { peselRequired : true,
				  pesel:true
				}
	});

	jQuery.validator.addClassRules({
		maxLength : { maxlength: '255' }
	});

	jQuery.validator.addClassRules({
		maxLengthHn : { maxlength: '16' }
	});

	jQuery.validator.addClassRules({
		maxLengthPostCodeLU : { maxlength: '20' }
	});

	jQuery.validator.addClassRules({
		maxLengthCityLU : { maxlength: '30' }
	});

	jQuery.validator.addMethod("nipLength", $.validator.methods.maxlength);
	jQuery.validator.addClassRules({
		nip : { nipLength: '15'}
	});


	jQuery.validator.addMethod("paymentMethodRequired", $.validator.methods.required);
	jQuery.validator.addClassRules({
		paymentMethodRequired : { paymentMethodRequired: true }
	});


	jQuery.validator.addMethod("emailAscii", function(value, element) {
			return  /^[\000-\177]*$/.test(value) ;
	});

	jQuery.validator.addClassRules({
		summaryEmail : { email : true, emailAscii : true }
	});

var validateOpions = {
		ignore:function(index){
			if($(this).attr("name") != "otherCountry" && $(this).attr("name") != "invoiceCountry" && $(this).attr("name") != "countryCode"){
				return $(this).is(':hidden');
			}
			return $(this).next().is(':hidden');
		},
		highlight: function( element, errorClass, validClass) {
			if ($(element).attr("name") == "otherCountry" || $(element).attr("name") == "invoiceCountry" || $(element).attr("name") == "countryCode")
		    {
				$(element).next().addClass('formInputError');
			} else if ($(element).attr("name") != "paymentMethodId" && $(element).attr("name") != "acceptRules")
		    {
				$(element).addClass('formInputError');
			}

		},
		unhighlight: function( element, errorClass, validClass) {
			if ($(element).attr("name") == "otherCountry" || $(element).attr("name") == "invoiceCountry"  || $(element).attr("name") == "countryCode")
		    {
				$(element).next().removeClass('formInputError');
			} else if ($(element).attr("name") != "paymentMethodId" && $(element).attr("name") != "acceptRules")
		    {
				$(element).removeClass('formInputError');
			}
		},
		errorPlacement: function(error, element) {

			switch(element.attr("name"))
			{
				case "otherStreetHn":
					error.insertAfter($("#otherStreetAn"));
					break;
				case "streetHn":
					error.insertAfter($("#streetAn"));
					break;
				case "invoiceStreetHn":
					$("#invoiceStreetAn").after(addLabel(element, error, null, "vat"));
					break;
				case "otherCountry":
				case "invoiceCountry":
				case "countryCode":
					error.insertAfter(element.next());
					break;
				case "acceptRules":
					$("#acceptClr").before(addLabel(element, error, "acceptRules.errors"));
					break;
				case "pesel":
					element.after(addLabel(element, error, null, "vat"));
					break;
				case "paymentMethodId":
					$("#paymentMethodIdDiv").append(error);
					break;
				default:
					if (element.hasClass("vat"))
					{
					   element.after(addLabel(element, error, null, "vat"));
					}
					else
					{
						error.insertAfter(element);
					}
			}
		}
	};

var formWasValidated = false;
var cardWasValidated = false;

function revalidateElement(element){
	if(formWasValidated){
		$("#paymentForm").validate(validateOpions).element(element);
	}
}

function revalidateCardOnSummary(){
	if(cardWasValidated && UnregisteredCardJsLib.checkProcess()){
	    UnregisteredCardJsLib.validateForm();
	}
}


function revalidatePaymentForm(){
	if(formWasValidated){
		validatePaymentForm();
	}
}

function validatePaymentForm(){
	return $("#paymentForm").validate(validateOpions).form();
}

$(document).ready(function(){
	$("#otherCountry").change( function() {revalidateElement(this); } );
	$("#invoiceCountry").change( function() { revalidateElement(this); } );
	$("#countryCode").selectBox().change( function() { revalidateElement(this); } );
	$(".singlePaymentMethod").click(function() { revalidateElement($("input[name='paymentMethodId']")); });
	if ($("#loginForm").size()) {
		$("#loginForm").validate().checkForm();
	}
});


function addLabel(element, error, spanId, className){

	var spanText = '';
	if(spanId != null){
		spanText = 'id="' + spanId + '"';
	}

	var classText= '';
	if(className != null){
		classText= className;
	}
	return '<label for="'+ element.attr("id") +'" class="error '+ classText +'"><span '+ spanText+'>'+ error.html()+'</span></label>';
}