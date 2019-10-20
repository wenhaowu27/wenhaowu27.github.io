function forDelayDisplay() {
$('#cirHtml').css('display', 'none');
$('#cirHtml').delay(500).fadeIn(1000);
$('#cirCss').css('display', 'none');
$('#cirCss').delay(1000).fadeIn(1500);
$('#cirJava').css('display', 'none');
$('#cirJava').delay(1500).fadeIn(2000);
$('#cirNodeJs').css('display', 'none');
$('#cirNodeJs').delay(2500).fadeIn(3000);
$('#cirFullStack').css('display', 'none');
$('#cirFullStack').delay(3500).fadeIn(4000);
}

forDelayDisplay();