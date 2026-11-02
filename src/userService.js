const axios = require('axios');

async function getUser(id) {
  const res = await axios.get(`/users/${id}`);
  return res.data;
}

module.exports = { getUser };