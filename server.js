const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.get('/', (request, response) => {
  return response.send('Funcionando');
});

app.listen(3333, () => console.log('Server is running!'));
