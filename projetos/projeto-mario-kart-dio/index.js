const player1 = {
    nome: "Mario",
    velocidade: 4,
    manobridade: 3,
    poder: 3,
    pontos: 0
}

const player2 = {
    nome: "Luigi",
    velocidade: 3,
    manobridade: 4,
    poder: 4,
    pontos: 0
}


async function rollDice () {
    return Math.floor(Math.random() * 6) + 1
}


async function getRandomBlock() {
    let random = Math.random()
    let block = null


    switch(true) {
        case random < 0.33:
            block = 'RETA'
            break
        case random < 0.66:
            block = 'CURVA'
            break
        default:
            block = 'CONFRONTO'
            break;
    }
    return block
}

async function logRollResults(character, block, diceRoll, scoreSkill) {
    console.log(`${character.nome} rodu um dado de ${block} ${diceRoll} no dado e tem ${scoreSkill} pontos habilidades somando deu ${scoreSkill + diceRoll} totais.`);
}

async function playRaceEngine(character1, character2) {
    for(let round = 1; round <= 5; round++) {
        console.log(`Rodada ${round}:\n`);

        // sorteio de bloco
        let block = await getRandomBlock();
        console.log(`O bloco sorteado foi: ${block}\n`);    

        // rolagem de dados
        const dice1 = await rollDice();
        const dice2 = await rollDice();


        // teste de skill
        let totalTesteSkill1 = 0;
        let totalTesteSkill2 = 0;
        
        if(block === 'RETA') {
            totalTesteSkill1 = character1.velocidade;
            totalTesteSkill2 = character2.velocidade;

            await logRollResults(character1, "VELOCIDADE", dice1, totalTesteSkill1);
            await logRollResults(character2, "VELOCIDADE", dice2, totalTesteSkill2);
        } else if(block === 'CURVA') {
            totalTesteSkill1 = character1.manobridade;
            totalTesteSkill2 = character2.manobridade;

            await logRollResults(character1, "MANOBRIDADE", dice1, totalTesteSkill1);
            await logRollResults(character2, "MANOBRIDADE", dice2, totalTesteSkill2);
        } else {
            totalTesteSkill1 = character1.poder;
            totalTesteSkill2 = character2.poder;

            await logRollResults(character1, "PODER", dice1, totalTesteSkill1);
            await logRollResults(character2, "PODER", dice2, totalTesteSkill2);

            character2.poder -= totalTesteSkill1 > totalTesteSkill2 && totalTesteSkill1 > 0 ? 1 : 0;
            character1.poder -= totalTesteSkill2 > totalTesteSkill1 && totalTesteSkill2 > 0 ? 1 : 0;

        }

        if(totalTesteSkill1 + dice1 > totalTesteSkill2 + dice2) {
            console.log(`\n${character1.nome} venceu a rodada!\n`);
            character1.pontos++;
        } else if(totalTesteSkill1 + dice1 < totalTesteSkill2 + dice2) {
            console.log(`\n${character2.nome} venceu a rodada!\n`);
            character2.pontos++;
        } else {
            console.log(`\nEmpate na rodada!\n`);
        }

    }
}

(async function main () {
    console.log(`Corrida entre ${player1.nome} e ${player2.nome} iniciada!\n`);

    await playRaceEngine(player1, player2);

})();