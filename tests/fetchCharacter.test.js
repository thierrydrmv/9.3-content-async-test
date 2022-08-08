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
});