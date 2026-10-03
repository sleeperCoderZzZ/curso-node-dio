import handleGerarSenha from "../services/handle.service.js";

export async function gerarSenha(senha) {
    const novaSenha = await handleGerarSenha(senha);

    console.log("Senha gerada com sucesso:", novaSenha);

    return;
}