import { existsSync, readFileSync, mkdirSync, writeFileSync } from "fs";

type sonhos = {
    descricao: string
    tipo: string
    valorEstimado: number
}

const sonho: sonhos[] = [
    {
        descricao: "Ter uma Familia",
        tipo: "Pessoal",
        valorEstimado: 7.612
    }
]
const pasta = `./dados`;
if (!existsSync(pasta)) {
    mkdirSync(pasta);
}
const caminho = `${pasta}/sonho.json`
writeFileSync(caminho, JSON.stringify(sonho, null, 2));
console.log("Sonho registado com sucesso");

const textolido = readFileSync(caminho, "utf-8")
const sonhorealizado = sonho[] = JSON.parse(textolido);

console.log("\n === Ter uma Familia === ")
sonhorealizado.forEach((sonho, index) => {
    const status = sonho.valorEstimado ? "realizou" : "não realizou";
    console.log(`${index + 1}. ${sonho.descricao} - ${sonho.tipo} (${sonho.valorEstimado}) - ${status}`)
});
