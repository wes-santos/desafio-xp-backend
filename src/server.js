const app = require("./api");

require('dotenv').config();

const port = process.env.PORT || 3001;

app.get('/', (_request, response) => {
  response.send();
})

app.listen(port, () => console.log('Ouvindo a porta ', port));
