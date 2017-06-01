function recalculateCommision(element) {
    element = $(element).closest('div').find('input');
    var json= element.data('commision');
    var totalSum = parseInt(Math.round(totalAmount*100));
    if(isOrderMaterial){
        if(chosenAvailableShippingCostIndex == -1){
            totalSum = parseInt(availableShippingCost[0][6]*100);
        } else {
            totalSum = parseInt(availableShippingCost[chosenAvailableShippingCostIndex][6]*100);
        }
    }
    var fee = 0;
    fee = json[totalSum];
    commisionFee = fee;
    var prevCommisionFee = $("#commisionFee").html();
    var feeString = String(parseFloat(fee/100).toFixed(2)).replace('.',',') + ' ' + currency;
    $("#commisionFee").html(feeString);
    var totalAmountStringValue = String(parseFloat((fee + totalSum)/100).toFixed(2)).replace('.',',') + ' ' + currency;
    $("#totalSummaryAmount").html(totalAmountStringValue);
    changePayButtonValue(totalAmountStringValue);
    if(prevCommisionFee != $("#commisionFee").html()){
        $('#commisionFee').css({opacity: 0});
        $('#totalSummaryAmount').css({opacity: 0});
        $('#commisionFee').animate({opacity: 1}, 700 );
        $('#totalSummaryAmount').animate({opacity: 1}, 700 );
    }
    updateCommissionPSDUrl(feeString, element.data('paytype'));
}