const print = require('./colorLog')
const fs = require('fs')
const axios = require('axios').default
const path = require('path')


//Recebe o caminho do arquivo .md e o trata
async function pegaArquivo(caminho) {
    const encoding = 'utf-8'

    //Recebe a pasta em que se encontram os arquivos
    const caminhoAbsoluto = path.join(__dirname, caminho)
    print(caminho, "red")
    print(caminhoAbsoluto, "blue")

    try {
        //Recebe um array com todos os arquivos que estão nessa past
        const arquivos = await fs.promises.readdir(caminhoAbsoluto, encoding)


        //Verifica se tem algum arquivo de texto ".md" ou ".txt"
        const onlyTextFiles = arquivos.filter((fileName) => {
            let fileType = fileName.split('.').pop();
            return (fileType === 'txt' || fileType === 'md')
        })

        if (onlyTextFiles.length > 0) {
            const response = []
            for (file of onlyTextFiles) {
                const caminhoFinal = path.join(caminho, file)
                const texto = await fs.promises.readFile(caminhoFinal, encoding)
                const links = await extraiLinks(texto)

                response.push({ File: file, Links: links })
            }

            return response
        } else {
            return "Nenhum arquivo de Texto compatível foi encontrado"
        }
    } catch (erro) {
        return "Diretório não encontrado"
    }

}
module.exports = pegaArquivo

//Recebe o texto e devolve um array com todos os links
async function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^\)]*)\)/gm

    const arrayResultados = []
    let temp
    while ((temp = regex.exec(texto)) !== null) {
        const linkStatus = await axiosGet(temp[2])
        arrayResultados.push({ title: temp[1], link: temp[2], status: linkStatus })
    }

    return arrayResultados.length === 0 ? "nenhum link encontrado" : arrayResultados;
}

//Função que faz a requisição HTTP para testar os links
async function axiosGet(url) {
    try {
        res = await axios.get(url)
        return res.status

    } catch (error) {
        return 404
    }
}





