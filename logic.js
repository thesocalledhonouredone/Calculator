// logic of the calculator

var a = 0, b = 0, result = 0
document.getElementById("result").innerText = result
var mode

var TOTAL = 0

// all the numnber functions
function one() {
    result *= 10
    result += 1
    document.getElementById("result").innerText = result
}

function two() {
    result *= 10
    result += 2
    document.getElementById("result").innerText = result
}

function three() {
    result *= 10
    result += 3
    document.getElementById("result").innerText = result
}

function four() {
    result *= 10
    result += 4
    document.getElementById("result").innerText = result
}

function five() {
    result *= 10
    result += 5
    document.getElementById("result").innerText = result
}

function six() {
    result *= 10
    result += 6
    document.getElementById("result").innerText = result
}

function seven() {
    result *= 10
    result += 7
    document.getElementById("result").innerText = result
}

function eight() {
    result *= 10
    result += 8
    document.getElementById("result").innerText = result
}

function nine() {
    result *= 10
    result += 9
    document.getElementById("result").innerText = result
}

function zero() {
    result *= 10
    result += 0
    document.getElementById("result").innerText = result
}

function Allclear() {
    result = 0
    TOTAL = 0
    document.getElementById("result").innerText = result
}

// operation functions

function Add() {
    a = result
    result = 0
    document.getElementById("result").innerText = result
    mode = '+'
}

function Sub() {
    a = result
    result = 0
    document.getElementById("result").innerText = result
    mode = '-'
}

function Mul() {
    a = result
    result = 0
    document.getElementById("result").innerText = result
    mode = '*'
}

function Div() {
    a = result
    result = 0
    document.getElementById("result").innerText = result
    mode = '/'
}

function Mod() {
    a = result
    result = 0
    document.getElementById("result").innerText = result
    mode = ''
}

function Eval() {
    b = result

    switch (mode) {
        case '+':
            TOTAL = a+b
            document.getElementById("result").innerText = TOTAL
            break
        case '-':
            TOTAL = a-b
            document.getElementById("result").innerText = TOTAL
            break
        case '*':
            TOTAL = a*b
            document.getElementById("result").innerText = TOTAL
            break
        case '/':
            TOTAL = a/b
            document.getElementById("result").innerText = TOTAL
            break
        case '%':
            TOTAL = a%b
            document.getElementById("result").innerText = TOTAL
            break
    }
}