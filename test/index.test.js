const pegaArquivo = require('../index')

describe('pegaArquivo::', () => {
    it('deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function');
    });

    it('pega arquivo e retorna array', () => {
        expect(pegaArquivo('.$arquivos$')).toBe(arrayResult);

    })
})

