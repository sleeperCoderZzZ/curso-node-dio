import prompt from "prompt";

prompt.start();

export async function escolhaFerramenta(escolha) {

    if (escolha === "1") {
        const { url } = await prompt.get([
            {
                name: "url",
                description: "Informe a URL que deseja gerar o QR Code",
                type: "string",
                required: true,
            },
        ]);
        return { tipo: "qr-code", url: url };
    } else if (escolha === "2") {
        const { password } = await prompt.get([
            {
                name: "password",
                description: "Informe a senha que deseja gerar",
                type: "string",
                required: false
            },
        ]);
        return { tipo: "gerador-senha", password: password };
    } else {
        console.error("Opção inválida. Por favor, escolha 1 ou 2.");
        return null;
    }
}