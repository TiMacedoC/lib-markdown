const pegaArquivo = require('./index')
const print = require('./colorLog')


async function cliRum() {
    const caminho = process.argv
    print(await pegaArquivo(caminho[2]), "cyan")
}

cliRum()