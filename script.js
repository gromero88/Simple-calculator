let answer;
let number1;
let number2;
$(".add").click(function() {
    number1 = parseInt($(".Num1").val());
    number2 = parseInt($(".Num2").val());
    answer = number1 + number2;
    $("span").text(answer);
    $(".history").append(`<p>${number1} + ${number2} = ${answer}</p>`);
});

$(".sub").click(function() {
    number1 = parseInt($(".Num1").val());
    number2 = parseInt($(".Num2").val());
    answer = number1 - number2;
    $("span").text(answer);
    $(".history").append(`<p>${number1} - ${number2} = ${answer}</p>`);
});

$(".mult").click(function() {
    number1 = parseInt($(".Num1").val());
    number2 = parseInt($(".Num2").val());
    answer = number1 * number2;
    $("span").text(answer);
    $(".history").append(`<p>${number1} x ${number2} = ${answer}</p>`);
});

$(".div").click(function() {
    number1 = parseInt($(".Num1").val());
    number2 = parseInt($(".Num2").val());
    answer = number1 / number2;
    $("span").text(answer);
    $(".history").append(`<p>${number1} ÷ ${number2} = ${answer}</p>`);
});
