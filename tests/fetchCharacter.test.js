require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  it('Api recebe o código 720 e retorna a personagem mulher maravilha', async () => {
    const characterName = await fetchCharacter('720');
    const { name } = characterName;
    console.log(name);
    expect(name).toBe('Wonder Woman');
  });
  it('função não recebe nenhum parâmetro e reporta erro', async () => {
    const failRequest = await fetchCharacter();
    console.log(failRequest);
    expect(failRequest).toEqual(new Error('You must provide an url'));
  })
  it('Verifica se retorna \'Invalid id\' ao executar a função com parâmetro que não existe', async () => {
    const response = await fetchCharacter('parâmetro qualquer');
    expect(response).toBe('Invalid id');
  });
  it('Verifica se fetch é chamada com o endpoint correto', async () => {
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
    await fetchCharacter('720');
    expect(fetch).toHaveBeenCalledTimes(4);
    expect(fetch).toHaveBeenCalledWith(url);
  });
});