var gTerra = 9.8;
var gMarte = 3.7;
var gJupter = 24.8;

var peso = prompt("Digite peso do objeto na terra: ");

var pesoFinal = (peso / gTerra) * gMarte;

document.write("O peso deste objeto em Marte é: " + pesoFinal);

var pesoFinal = (peso / gTerra) * gJupter;
document.write("O peso deste objeto em Jupter é: " + pesoFinal);
