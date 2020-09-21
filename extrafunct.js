function numberFormatting(variable, decimals) {
    if (variable < 1000) {
        string = variable.toFixed(decimals)
    }
    else {
        var exponent = (Math.floor(Math.log10(Math.abs(variable))))
        var mantissa = (variable / Math.pow(10, exponent))
        string = mantissa.toFixed(2) + "e" + exponent
    }
    return string
}

function makeVisible(var1, var2, id) {
    if(var1 < var2) {
        document.getElementById(id).style.display = "none"
    }
    else {
        document.getElementById(id).style.display = "block"
    }
}