function limpiar() {
	document.getElementByID('formulas').reset();
}

function Sumar() {
	var x = parseInt(document.getElementByID('valor1').value);
	var y = parseInt(document.getElementByID('valor2').value);
	document.getElementByID('resultado').innerHTML = x+y;
}