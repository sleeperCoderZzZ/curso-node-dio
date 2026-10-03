async function validarCaractereSenha(caracteres = []) {
    if( process.env.LOWERCASE_LETTERS === "true") {
        caracteres.push(..."abcdefghijklmnopqrstuvwxyz");
    }

    if( process.env.NUMBERS === "true") {
        caracteres.push(..."0123456789");
    }

    if( process.env.SPECIAL_CHARACTERS === "true") {
        caracteres.push(..."!@#$%^&*()-+");
    }

    return caracteres;
}

export default validarCaractereSenha;