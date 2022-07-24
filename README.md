# Back-end para o desafio técnico de Front-end da XP Inc.
Esse projeto foi desenvolvido com o objetivo de alimentar uma aplicação front-end criada para o desafio técnico para o cargo de Software Engineer I na [XP Inc.](https://xpinc.com) em um processo seletivo feito em parceria com a [Trybe](https://betrybe.com).

Tendo isso em mente, seu desenvolvimento foi feito de forma super simples e rápida e sua estrutura não foi muito elaborada. Trata-se apenas de uma simples API criada com Sequelize para ter dados disponíveis para requisição no Front-end, sem tratamentos, modelagem e normalização.

## Como a aplicação funciona?
Com a execução do código deste projeto, é possível criar um Banco de Dados PostgreSQL para retornar informações sobre investimentos. Dessa forma, a aplicação tem um único endpoint que é `/acoes` e que retorna os seguintes dados:
```JSON
{
	"id": 1,
	"codAtivo": "PETR4",
	"subtitulo": "Petrobras Pn N2",
	"imagem": "https://linkDaImagem.com",
	"valor": 27.96,
}
```

O campo `id` foi pensado para quando quisesse criar outras tabelas e relacioná-las a esta, como uma tabela para dizer quais ações determinado usuário comprou. O `codAtivo` é um identificador único da ação.

O `subtitulo` é uma pequena frase que detalha o `codAtivo` para o usuário obter mais informações sobre o ativo em questão.

A chave `imagem`  guarda o link de uma imagem relacionada a ação, como o logotipo da empresa. Por fim, o valor é referente ao preço de uma unidade do ativo em questão.

## Tecnologias utilizadas
A aplicação foi criada com o uso de **Sequelize**, **JavaScript ES6**, **NodeJS** e **ExpressJS**. A escolha de utilizar essas ferramentas foi  motivada principalmente por agilidade.

Nessa lógica, eu precisava criar um banco de dados de forma rápida e essas são as tecnologias que tenho maior fluência no momento. Além disso, optei por utilizar o Sequelize pela facilidade de gerenciar o banco de dados e alterá-lo de MySQL para PostgreSQL.

Precisei converter o banco para PostgreSQL para conectá-lo ao Supabase, um serviço gratuito que utilizei para armazenar o meu banco de dados. Tal ação também foi motivada pela agilidade.

Por fim, o deploy da aplicação foi realizado no Heroku para que eu tivesse o endpoint acessível para realizar requisições no front-end.

## Como executar o projeto
A execução desse projeto pode ser feita de forma local, mas recomendo que a utilize pelo link em que ela foi publicada.

Caso deseje utilizá-la localmente, precisará ter o Node Package Manager (NPM) em sua versão 16 instalado em sua máquina, além do Git para poder clonar o repositório.

Após isso, basta seguir os seguintes passos:

- Clone o repositório e entre em sua pasta;
```
git clone git@github.com:wes-santos/desafio-xp-backend.git && cd desafio-xp-backend
```
- Instale as dependências do projeto
```
npm install
```

Após isso, renomeie o arquivo `.env.example` para `.env`  e preencha-o com as suas informações. Em `DIALECT`, você pode utilizar qualquer dialeto aceito pelo Sequelize, mas recomendo mysql ou postgre que foram os testados para esta aplicação.

Feito isso, continue os seguintes passos para criação do banco de dados e população em sua máquina local:
- Criação do banco de dados:
```
npx sequelize db:create --env development
```
- Criação das tabelas do banco de dados:
```
npx sequelize db:migrate --env development
```
- População do banco de dados com as informações:
```
npx sequelize db:seed:all --env development
```

Após isso, basta executar o comando  `npm run debug`  em seu terminal para iniciar o nodemon e, consequentemente, a sua aplicação.

Feito isso, a aplicação será inicializada na porta que você definiu em seu `.env`. Logo, basta acessar o link do seu hostname e porta com o endereço de requisição, como `localhost:3001/acoes`, por exemplo.

## Próximos passos para o desenvolvimento do projeto
Como dito no início do README, este é um projeto feito apenas para alimentar um front-end e foi o objetivo dele ser simples e enxuto como está.

Dessa forma, caso fosse evoluí-lo, seria necessário criar um Diagrama Entidade Relacionamento para ter clara uma modelagem adequada a todas as necessidades da aplicação.

Como não trabalhei nisto, não consigo afirmar como seria desenvolvido, mas sei de antemão que precisaria de ao menos mais duas tabelas para as seguintes ações: armazenamento de usuários e criação de relação entre usuários e investimentos.

Além disso, seria necessário trabalhar em um CRUD para permitir que todas as ações necessárias fossem realizadas, como atualização do saldo do usuário ao comprar uma ação, acréscimo de novas informações etc.

Por fim, um ponto muito importante para esta aplicação seria a utilização de JWT para autenticação. Como a aplicação foi criada com Sequelize e baseada na arquitetura MSC, tais ações não estão difíceis de serem executadas, não foram realizadas ainda por tempo.