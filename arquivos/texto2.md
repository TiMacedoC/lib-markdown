[00:00] Vamos refatorar o nosso código para deixar tudo um pouco mais organizado especialmente aqui no arquivo “cli.js” que é o ponto de entrada da aplicação. O que que podemos fazer então aqui? Eu vou importar em “cli.js” const chalk, eu vou importa a biblioteca chalk que estávamos utilizando um pouco lá anteriormente no começo do curso, então const chalk = require(“chalk“);, para podermos também colorir a saída lá, continuar colorindo lá a saída para o nosso terminal.

[00:35] E agora onde estávamos só passando, chamando a função pegaArquivo dentro do controle.log(), vamos criar uma função já para organizar as possibilidades de saída, se colocamos o caminho certo, se vamos colocar alguma opção, etc., const caminho = process.argv; continua no lugar.

[00:58] Mas agora eu vou criar uma function, eu vou chamar essa function processaTexto(caminho) e ela vai receber um caminho de arquivo, vou deixar por extenso o parâmetro para lembrarmos bem o que é,

[01:12] Aí sim dentro dessa function eu vou criar uma const vou chamar de resultado, e essa const vai ser, ela vai retornar o resultado de pegaArquivo da nossa função pegaArquivo, recebendo caminho no índice 2, como parâmetro, como estávamos fazendo anteriormente, só que agora como vamos receber via parâmetro, o caminho tem que ser caminhoDeArquivo que vamos receber de fora a string, com o caminhoDeArquivo que vai ser utilizado.

[01:49] Executou o pegaArquivo, passou o caminho certo, vai retornar um array de resultados, vamos exibir esse resultado no console.log(), eu vou passar a primeira informação aqui dentro de console.log(chalk.yellow(“lista de links”), ) ai eu não vou usar o chalk vou só retornar resultado.

[02:23] Agora podemos executar ao invés do console.log(pegaArquivo()), executamos a função processaTexto() passando como parâmetro dela, o caminho, esse caminho aqui se refere aquele array que está vindo de process.argv.

[02:49] Então executam