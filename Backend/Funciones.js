/**
 * Funcion que retorna numeros aleatorios entre 1 y 100
 * @returns numero entero
 */
function numeroAleatorio() {
  return Math.floor(Math.random() * 100) + 1;
}
function ValidarNumero(numero, numeroSecreto) {
  if (numero == numeroSecreto) {
    return "Numero correcto, felicidades!";
  } else if (intento < secreto) {
    return "El número es mayor";
  } else return "El número es menor";
}
module.exports = { numeroAleatorio, ValidarNumero };
