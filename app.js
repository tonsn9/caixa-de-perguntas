const nome = prompt("Qual o seu nome?");
const age = prompt("Quantos anos você tem?");
const language = prompt("Qual linguagem de programação você está estudando?");
const msg = `"Olá ${nome}, ${age} anos é a melhor idade para aprender ${language}!"!`;

alert(msg);

const like = prompt(
  `Você gosta de estudar ${language}? Responda com o número 1 - SIM ou 2 - NÃO`
);
if (like == 1) {
  alert("Muito bom! Continue estudando e você terá muito sucesso.");
}
if (like == 2) {
  alert("Ahh que pena... Já tentou aprender outras linguagens?");
}
