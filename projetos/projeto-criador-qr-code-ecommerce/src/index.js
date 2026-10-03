import mainPrompt from "./services/utils/prompt/prompt-escolha-ferramenta.service.js";
import { escolhaFerramenta } from "./services/utils/seletorFerramenta.service.js";
import { gerarQRCode } from "./services/qr-code/services/criarQrCode.service.js";


async function main() {
    const escolha = await mainPrompt();

    const ferramenta = await escolhaFerramenta(escolha);

    console.log("Ferramenta escolhida:", ferramenta);

    if (ferramenta.tipo === "qr-code") {
        await gerarQRCode(ferramenta.url);
    } else if (ferramenta.tipo === "gerador-senha") {
        console.log("Senha gerada:", ferramenta.password);
    } else {
        console.error("Tipo de ferramenta inválido.");
    }
}

main();