jest.mock('axios');
const axios = require('axios');
const { getUser } = require('../src/userService');

test('deve retornar dados do usuário', async () => {
  axios.get.mockResolvedValue({ data: { id: 1, nome: 'Ana' } });

  const usuario = await getUser(1);

  expect(usuario).toEqual({ id: 1, nome: 'Ana' });
  expect(axios.get).toHaveBeenCalledWith('/users/1');
});