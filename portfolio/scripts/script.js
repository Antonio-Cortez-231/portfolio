const MEUNOME = "Antonio Cortez";
let tituloProfissional = "Garoto de Programa / Faço de tudo";
let minhaBio = "Sou um cara esforçado. Quero dinheiro rsrs.";
let anoFormatura = 2028;
let anoIngresso = 2026;
let indefinido;
let nulo = null;
let curso = {
    nome: "Análise e Desenvolvimento de Sistemas",
    semestre: "sei lá",
    disciplinaAtual: "Linguagem de Programação"
}

console.log(typeof nulo);
console.log(typeof indefinido);
console.log(typeof anoFormatura);
console.log(typeof minhaBio);
console.log(typeof tituloProfissional);
console.log(typeof MEUNOME);
console.log(typeof curso);

document.getElementById("meuNome").innerText = MEUNOME;
document.getElementById("tituloProfissional").innerText = tituloProfissional;
document.getElementById("minhaBio").innerText = minhaBio;
document.getElementById("anoFormatura").innerText = anoFormatura