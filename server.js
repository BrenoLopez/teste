const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.get('/', (request, response) => {
  return response.send('Funcionando');
});

app.listen(21506, () => console.log('Server is running!'));
