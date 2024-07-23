const prompt = require('prompt-sync')({ sigint: true });

let sessoes = [];

function adicionarSessao(nomeFilme, data, hora, sala) {
    sessoes.push({ nomeFilme, data, hora, sala });
    console.log(`\n🎬🎥🎬🎥🎬🎥🎬🎥🎬🎥🎬🎥🎬🎥🎬🎥🎬🎥🎬🎥🎬🎥🎬`);
    console.log(`Sessão adicionada: ${nomeFilme} - ${data} : ${hora} - Sala ${sala}`);
    console.log(`🎬🎥🎬🎥🎬🎥🎬🎥🎬🎥🎬🎥🎬🎥🎬🎥🎬🎥🎬🎥🎬🎥🎬\n`);
}

function listarSessoes() {
    console.log(`\n📽️  📽️  📽️  📽️  📽️  📽️ 📽️  📽️`);
    if (sessoes.length === 0) {
        console.log(`Nenhuma sessão disponível.`);
    } else {
        sessoes.forEach((sessao, codigoSessao) => {
            console.log(`🎟️ Sessão ${codigoSessao + 1}. Nome: ${sessao.nomeFilme} - Data: ${sessao.data} - Horário: ${sessao.hora} - Sala: ${sessao.sala} 🎟️`);
        });
    }
    console.log(`📽️  📽️  📽️  📽️  📽️  📽️ 📽️  📽️\n`);
}

function atualizarSessao(codigoSessao, nomeFilme, data, hora, sala) {
    if (codigoSessao >= 1 && codigoSessao <= sessoes.length) {
        sessoes[codigoSessao - 1] = { nomeFilme, data, hora, sala };
        console.log(`\n✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨`);
        console.log(`Sessão ${codigoSessao} atualizada para: ${nomeFilme} - ${data} - ${hora} - Sala ${sala}`);
        console.log(`✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨\n`);
    } else {
        console.log(`⚠️ Código de sessão inválido! ⚠️\n`);
    }
}

function cancelarSessao(codigoSessao) {
    if (codigoSessao >= 1 && codigoSessao <= sessoes.length) {
        sessoes.splice(codigoSessao - 1, 1);
        console.log(`\n❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌`);
        console.log(`Sessão ${codigoSessao} cancelada.`);
        console.log(`❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌\n`);
    } else {
        console.log(`⚠️ Código de sessão inválido! ⚠️\n`);
    }
}

function mostrarMenu() {
    console.log(`\n🪐🪐🪐🪐🪐🪐🪐🪐🪐🪐🪐🪐🪐🪐🪐🪐🪐🪐🪐🪐🪐🪐`);
    console.log(`👾【MENU DECEPTICONS】👾`);
    console.log(`1. Adicionar uma nova sessão`);
    console.log(`2. Listar todas as sessões`);
    console.log(`3. Atualizar uma sessão existente`);
    console.log(`4. Cancelar uma sessão`);
    console.log(`5. Sair`);
    console.log(`🪐🪐🪐🪐🪐🪐🪐🪐🪐🪐🪐🪐🪐🪐🪐🪐🪐🪐🪐🪐🪐🪐\n`);
}

function main() {
    for (;;) {
        mostrarMenu();
        let opcao = parseInt(prompt("Escolha uma opção: "));
        switch (opcao) {
            case 1:
                let nomeFilme = prompt("Nome do Filme: ");
                let data = prompt("Data (AAAA-MM-DD): ");
                let hora = prompt("Hora (HH:MM): ");
                let sala = parseInt(prompt("Número da Sala: "));
                adicionarSessao(nomeFilme, data, hora, sala);
                break;
            case 2:
                listarSessoes();
                break;
            case 3:
                listarSessoes();
                let codigoAtualizar = parseInt(prompt("Digite o código da sessão a ser atualizada: "));
                let novoNomeFilme = prompt("Novo Nome do Filme: ");
                let novaData = prompt("Nova Data (AAAA-MM-DD): ");
                let novaHora = prompt("Nova Hora (HH:MM): ");
                let novaSala = parseInt(prompt("Novo Número da Sala: "));
                atualizarSessao(codigoAtualizar, novoNomeFilme, novaData, novaHora, novaSala);
                break;
            case 4:
                listarSessoes();
                let codigoCancelar = parseInt(prompt("Digite o código da sessão a ser cancelada: "));
                cancelarSessao(codigoCancelar);
                break;
            case 5:
                console.log(`Saindo... 🌌 Megatron ordena a retirada! 🌌`);
                return;
            default:
                console.log(`⚠️ Opção inválida! ⚠️\n`);
        }
    }
}

main();
