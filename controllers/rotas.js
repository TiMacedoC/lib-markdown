const pegaArquivo = require('../index')

module.exports = (app) => {

    app.get('/markdown/:caminho', async (req, res) => {

        let { caminho } = req.params
        caminho = caminho.replace(/[$]/gm, '/')
        console.log('caminho:', caminho)

        const resultado = await pegaArquivo(caminho);


        res.send(resultado)

    })

}