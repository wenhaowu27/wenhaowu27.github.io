function forDelayDisplay() {
$('#cirHtml').css('display', 'none');
$('#cirHtml').delay(250).fadeIn(500);
$('#cirCss').css('display', 'none');
$('#cirCss').delay(750).fadeIn(1000);
$('#cirJava').css('display', 'none');
$('#cirJava').delay(1250).fadeIn(1500);
$('#cirNodeJs').css('display', 'none');
$('#cirNodeJs').delay(1750).fadeIn(2000);
$('#cirFullStack').css('display', 'none');
$('#cirFullStack').delay(2250).fadeIn(2500);
$('#cirFullStack').delay(2750).fadeOut(3000);
$('#cirFullStack').css('display', 'none');
$('#cirNodeJs').delay(3250).fadeOut(3500);
$('#cirNodeJs').css('display', 'none');
$('#cirJava').delay(3750).fadeOut(4000);
$('#cirJava').css('display', 'none');
$('#cirCss').delay(4250).fadeOut(4500);
$('#cirCss').css('display', 'none');
$('#cirHtml').delay(4750).fadeOut(5000);
$('#cirHtml').css('display', 'none');
}

forDelayDisplay();
forDelayDisplay();
forDelayDisplay();
forDelayDisplay();
forDelayDisplay();
forDelayDisplay();