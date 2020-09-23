'use strict';

function numberFormatting(variable, decimals) {
    if (variable < 1000) {
        var string = variable.toFixed(decimals);
    }
    else {
        var exponent = (Math.floor(Math.log10(Math.abs(variable))));
        var mantissa = (variable / Math.pow(10, exponent));
        var string = mantissa.toFixed(2) + "e" + exponent;
    }
    return string;
};

function makeVisible(id) {
    document.getElementById(id).style.display = "block";
};