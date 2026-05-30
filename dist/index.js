"use strict";

var alunos = [{
  nome: "João",
  nota: 8
}, {
  nome: "Maria",
  nota: 5
}, {
  nome: "Kledson",
  nota: 10
}, {
  nome: "Andréia",
  nota: 9
}, {
  nome: "Jacó",
  nota: 4
}, {
  nome: "Martins",
  nota: 6
}];
function AlunosAprovados(ListaDeAlunos) {
  return ListaDeAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
console.log(AlunosAprovados(alunos));