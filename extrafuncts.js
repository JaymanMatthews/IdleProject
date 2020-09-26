'use strict';

function numberFormatting(variable) {
    if (variable < 1000) {
        var string = variable.toFixed(0);
    }
    else {
        var exponent = (Math.floor(Math.log10(Math.abs(variable))));
        var mantissa = (variable / Math.pow(10, exponent));
        var string = mantissa.toFixed(2) + "e" + exponent;
    }
    return string;
};

function makeVisible(switchVar, var1, var2, id) {
    switch (switchVar) {
        case 1:
            if (var1 < var2) {
                id.style.display = "none";
            }
            else {
                id.style.display = "inline-block";
            }
            break;
        case 2:
            if (var1 >= var2) {
                id.style.display = "inline-block";
            }
            else {
                id.style.display = "none";
            } 
            break;
        case 3:
            if (var1 == var2) {
                id.style.display = "inline-block";
            }
            else {
                id.style.display = "none";
            } 
            break;
    }
};