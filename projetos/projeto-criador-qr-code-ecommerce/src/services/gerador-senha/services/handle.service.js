import validarCaracteres from "../../utils/validacaoCaractereSenha.service.js";

async function handleGerarSenha(senha) {
    let caracteres = [senha];

    let password = "";

    caracteres = await validarCaracteres(caracteres);

    for (let i = 0; i < process.env.PASSWORD_LENGTH; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        password += caracteres[randomIndex];
    }

    return password;
}


export default handleGerarSenha;