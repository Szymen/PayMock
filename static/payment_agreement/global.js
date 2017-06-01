$(document).ready(function() {
    $('.statusDropDown').selectBox();
});

function closeAlertBox(sender) {
    $("#" + sender).fadeOut('fast');
}

function copyToVat(){

	var formSelect = document.getElementById("selectAddress");
	if(formSelect)
	{
		if(formSelect.value!='other')
		{
			var formAddresVat = document.getElementById("invoiceStreet");
			var formCodeVat = document.getElementById("invoicePostCode");
			var formStreetAnVat = document.getElementById("invoiceStreetAn");
			var formStreetHnVat = document.getElementById("invoiceStreetHn");
			var formCityVat = document.getElementById("invoiceCity");
			var formCountryVat = document.getElementById("invoiceCountry");
			formAddresVat.value = address[formSelect.selectedIndex][2];
			formStreetAnVat.value = address[formSelect.selectedIndex][8];
			formStreetHnVat.value = address[formSelect.selectedIndex][7];
			formCodeVat.value = address[formSelect.selectedIndex][4];
			formCityVat.value = address[formSelect.selectedIndex][5];
			formCountryVat.value = address[formSelect.selectedIndex][6];
			$('#invoiceCountry').val(address[formSelect.selectedIndex][10]);
			
			$("#invoiceCountry").val($("#invoiceCountry option:contains("+$('#formCountry').text()+")").val());
			$(".selectBox.formInput.selectBox-dropdown").find(".selectBox-label").
			text($("#invoiceCountry option[value="+$('#invoiceCountry').val()+"]").text());
			
			$('#invoiceName').val($('#formRecipientName').text());
		}
		else{
			var formAddres = document.getElementById("otherStreet");
			var formCode = document.getElementById("otherPostCode");
			var formStreetAn = document.getElementById("otherStreetAn");
			var formStreetHn = document.getElementById("otherStreetHn");
			var formCity = document.getElementById("otherCity");
			var formCountry = document.getElementById("otherCountry");
			
			var formAddresVat = document.getElementById("invoiceStreet");
			var formCodeVat = document.getElementById("invoicePostCode");
			var formStreetAnVat = document.getElementById("invoiceStreetAn");
			var formStreetHnVat = document.getElementById("invoiceStreetHn");
			var formCityVat = document.getElementById("invoiceCity");
			var formCountryVat = document.getElementById("invoiceCountry");
			
			formAddresVat.value = formAddres.value;
			formStreetAnVat.value = formStreetAn.value;
			formStreetHnVat.value = formStreetHn.value;
			formCodeVat.value = formCode.value;
			formCityVat.value = formCity.value;
			$('#invoiceCountry').val(formCountry.value);
			$('#invoiceCountry_input').remove();
			$('#invoiceCountry_container').remove();
			
			$(".selectBox.formInput.selectBox-dropdown").find(".selectBox-label").
			text($("#invoiceCountry option[value="+$('#invoiceCountry').val()+"]").text());
			
			$('#invoiceName').val($('#otherRecipientName').val());
		}
	}
	else
	{
		var formAddres = document.getElementById("otherStreet");
		var formCode = document.getElementById("otherPostCode");
		var formStreetAn = document.getElementById("otherStreetAn");
		var formStreetHn = document.getElementById("otherStreetHn");
		var formCity = document.getElementById("otherCity");
		var formCountry = document.getElementById("otherCountry");
		
		var formAddresVat = document.getElementById("invoiceStreet");
		var formCodeVat = document.getElementById("invoicePostCode");
		var formStreetAnVat = document.getElementById("invoiceStreetAn");
		var formStreetHnVat = document.getElementById("invoiceStreetHn");
		var formCityVat = document.getElementById("invoiceCity");
		var formCountryVat = document.getElementById("invoiceCountry");
		
		formAddresVat.value = formAddres.value;
		formStreetAnVat.value = formStreetAn.value;
		formStreetHnVat.value = formStreetHn.value;
		formCodeVat.value = formCode.value;
		formCityVat.value = formCity.value;
		$('#invoiceCountry').val(formCountry.value);
		$('#invoiceCountry_input').remove();
		$('#invoiceCountry_container').remove();
	}
	
	revalidatePaymentForm();
}

$(document).ready(function(){
	$('span.info-icon[title]').qtip({
		content: {text: false },
		position: {corner: { target: 'topRight', tooltip: 'bottomRight' }},
		style: {
			name: 'dark',
			padding: '7px 13px',
			background: '#ffffff',
			color: '#8c9399',
			border: {color: '#bccf02', radius: 3, width: 1},
			width:  {max: 320, min: 0},
			tip: true
		}
	}); 
}); 
