import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
type famosos = {
    nome: string;
    idade: number;
    ramo: string;
    vivo: boolean;
};
type melhoramigo = {
    nome: string
    ondeConheci: string
    hobbies: string[]
    famososFavoritos: famosos[]
}
const melhoramigos: melhoramigo[] = [
    {
        nome: "Giovanni",
        ondeConheci: "Sesi",
        hobbies: [],
        famososFavoritos: [
    {
        nome: "Cristiano Ronaldo",
        idade: 41,
        ramo: "Futebol",
        vivo: true
    }
]
    }
]
const pasta = `./dados`;
if (!existsSync(pasta)) {
    mkdirSync(pasta);
}
const caminho = `${pasta}/melhoramigo.json`
writeFileSync(caminho, JSON.stringify(melhoramigos, null, 2));
console.log("Amigos encontrados");

const textolido = readFileSync(caminho, "utf-8")
const amizade = melhoramigos[] = JSON.parse(textolido);

console.log("\n === Amizade=== ")
amizade.forEach((melhoramigo, index) => {
    const status = melhoramigo.famososFavoritos ? "são amigos" : "não são amigos";
    console.log(`${index + 1}. ${melhoramigo.nome} - ${melhoramigo.ondeConheci} (${melhoramigo.hobbies}) - ${status}`)
});
