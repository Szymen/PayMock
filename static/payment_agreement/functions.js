$(function() {

    if($('input.postCode').length){ $("input.postCode").mask("99-999"); }

    $("#acceptRules").click(function() {
        if ($(this).is(':checked')) {
            $("#submitBtn").removeAttr('disabled').removeClass('disabledObject');
        } else {
            $("#submitBtn").attr('disabled', 'disabled').addClass('disabledObject');
        }
    });
});

function closeAlertBox(sender) {  $("#" + sender).fadeOut('fast'); }
jQuery(document).ready(function($) { $('#langForm #lang').selectBox(); });

preventMultiClick = function(event) {
    $(this).unbind(event.type);
    $(this).bind(event.type, function() {
        return false;
    });
};


function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

function setCustomerNameEditable() {
    $("#firstNameRowFixed").hide();
    $("#firstNameRowEditable").css('display', 'table-row');
    $("#firstNameRowEditable input").removeAttr('disabled');
    if(isBlank($("#firstNameRowEditable input").val())){
        $("#firstNameRowEditable input").val("");
    }
    $("#lastNameRowFixed").hide();
    $("#lastNameRowEditable").css('display', 'table-row');
    $("#lastNameRowEditable input").removeAttr('disabled');
    if(isBlank($("#lastNameRowEditable input").val())){
        $("#lastNameRowEditable input").val("");
    }
    $("#additionalPersonalInformation").show();
}

function setCustomerNameFixed() {
    $("#firstNameRowFixed").css('display', 'table-row');
    $("#firstNameRowEditable").hide();
    $("#firstNameRowEditable input").attr('disabled', 'disabled');
    $("#lastNameRowFixed").css('display', 'table-row');
    $("#lastNameRowEditable").hide();
    $("#lastNameRowEditable input").attr('disabled', 'disabled');
    $("#installmentsRequiredData").hide();
    if ($("#cardPaymentRequiredData").is(":hidden")) {
        $("#additionalPersonalInformation").hide();
    }
}

function requirePhoneNumber() {
    $("#formPhoneNumberEditable input").addClass("required");

    var phoneNumberInput;
    if ($("#formPhoneNumberFixed").length > 0) {
        $("#formPhoneNumberFixed").hide()
        $("#formPhoneNumberEditable").css('display', 'table-row');
        phoneNumberInput = $("#formPhoneNumberEditable input");
    } else {
        phoneNumberInput = $("#cardPaymentRequiredData #formPhoneNumberEditable input");
    }
    phoneNumberInput.removeAttr('disabled');
    if (isBlank(phoneNumberInput.val())){
        phoneNumberInput.val("");
    }
    $("#cardPaymentRequiredData").show();
    $("#additionalPersonalInformation").show();
}

function doNotRequirePhoneNumber() {
    $("#formPhoneNumberEditable input").removeClass("required");

    var phoneNumberInput;
    if ($("#formPhoneNumberFixed").length > 0) {
        $("#formPhoneNumberFixed").css('display', 'table-row');
        $("#formPhoneNumberEditable").hide();
        phoneNumberInput = $("#formPhoneNumberEditable input");
    } else {
        phoneNumberInput = $("#cardPaymentRequiredData #formPhoneNumberEditable input");
    }
    phoneNumberInput.attr('disabled', 'disabled');
    $("#cardPaymentRequiredData").hide();
    if ($("#installmentsRequiredData").is(":hidden")) {
        $("#additionalPersonalInformation").hide();
    }
}

