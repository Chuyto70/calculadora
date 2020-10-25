var espacio = document.getElementById('espacio')
var one = document.getElementById('one')
var two = document.getElementById('two')
var three = document.getElementById('three')
var four = document.getElementById('four')
var five = document.getElementById('five')
var six = document.getElementById('six')
var seven = document.getElementById('seven')
var eight = document.getElementById('eight')
var nine = document.getElementById('nine')
var zero = document.getElementById('zero')
var numbers = document.getElementById('numbers')
var prueba = document.getElementById('prueba')
var c = document.getElementById('c')
var signoSum = document.getElementById('signo+')
var signoMen = document.getElementById('signo-')
var signoIgual = document.getElementById('=')
var signoDiv = document.getElementById('signo/')
var signoX = document.getElementById('signoX')
    //var numeros = [zero, one, two, three, four, five, six, seven, eight, nine]

var valor1;
var valor2;
one.addEventListener('click', function() {

    espacio.value += Number(one.value)

})
two.addEventListener('click', function() {
    espacio.value += Number(two.value)
})
three.addEventListener('click', function() {
    espacio.value += Number(three.value)
})
four.addEventListener('click', function() {
    espacio.value += Number(four.value)
})
five.addEventListener('click', function() {
    espacio.value += Number(five.value)
})
six.addEventListener('click', function() {
    espacio.value += Number(six.value)
})
seven.addEventListener('click', function() {
    espacio.value += Number(seven.value)
})
eight.addEventListener('click', function() {
    espacio.value += Number(eight.value)
})
nine.addEventListener('click', function() {
    espacio.value += Number(nine.value)
})
zero.addEventListener('click', function() {
    espacio.value += Number(zero.value)



})
c.addEventListener('click', function() {
    window.location.reload()
    espacio.value = ''
    valor1 = 0
    valor2 = 0
        //console.log(valor1, valor2);

})

signoSum.addEventListener('click', function() {
    valor1 = Number(espacio.value)
    espacio.value = ''
    console.log(valor1);
    signoIgual.addEventListener('click', function() {
        valor2 = Number(espacio.value)
        espacio.value = (valor1 + valor2);

    })
})
signoMen.addEventListener('click', function() {
    valor1 = Number(espacio.value)
    espacio.value = ''
        //console.log(valor1);

    signoIgual.addEventListener('click', function() {
        valor2 = Number(espacio.value)
        console.log(valor1 - valor2);
        espacio.value = (valor1 - valor2);


    })
})
signoDiv.addEventListener('click', function() {
    valor1 = Number(espacio.value)
    espacio.value = ''
        //console.log(valor1);

    signoIgual.addEventListener('click', function() {
        valor2 = Number(espacio.value)
        console.log(valor1 / valor2);
        espacio.value = (valor1 / valor2);


    })
})
signoX.addEventListener('click', function() {
    valor1 = Number(espacio.value)
    espacio.value = ''
        //console.log(valor1);

    signoIgual.addEventListener('click', function() {
        valor2 = Number(espacio.value)
        console.log(valor1 * valor2);
        espacio.value = (valor1 * valor2);


    })
})