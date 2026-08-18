import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

type famosos = {
    nome: string;
    idade: number;
    ramo: string;
    vivo: boolean;
};

const famoso: famosos[] = [
    {
        nome: "Cristiano Ronaldo",
        idade: 41,
        ramo: "Futebol",
        vivo: true
    }
];
const pasta = `./dados`;
if (!existsSync(pasta)) {
    mkdirSync(pasta);
}

const caminho = `${pasta}/famoso.json`
writeFileSync(caminho, JSON.stringify(famoso, null, 2));
console.log("Famoso registado com sucesso");

const textolido = readFileSync(caminho, "utf-8")
const famosoconhecido = famoso[] = JSON.parse(textolido);

console.log("\n === 🐐Cristiano Ronaldo🐐 === ")
famosoconhecido.forEach((famosos, index) => {
    const status = famosos.vivo ? "conhecido " : "não conhecido";
    console.log(`${index + 1}. ${famosos.nome} - ${famosos.idade} (${famosos.ramo}) - ${status}`)
});
