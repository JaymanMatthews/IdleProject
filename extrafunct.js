function numberFormatting(variable, decimals) {
    if (variable < 1000) {
        string = variable.toFixed(decimals)
    }
    else if (variable >= 1000) {
        var exponent = (Math.floor(Math.log10(Math.abs(variable))))
        var mantissa = (variable / Math.pow(10, exponent))
        string = mantissa.toFixed(2) + "e" + exponent
    }
    return string
}