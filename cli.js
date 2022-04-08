const pegaArquivo = require('./index')
const print = require('./colorLog')


async function cliRum() {
    const caminho = process.argv
    const resultado = await pegaArquivo(caminho[2])

    print(resultado, "cyan")
}


cliRum()