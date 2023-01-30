# driven-poc2-prisma

* **PoC #2 - Prisma** do aluno Luiz Cláudio F. Fernandez, Turma 8 da Driven.

## Instruções para rodar localmente

* Certifique-se de ter o [Git](https://git-scm.com/), [Node](https://nodejs.org/en/) (ou [NVM](https://github.com/nvm-sh/nvm)) e [PostgreSQL](https://www.postgresql.org/download/) instalados e configurados.

* Baixe ou clone o projeto na sua máquina local.

* Certifique-se de que o servidor do PostgreSQL esteja rodando.

* Na raiz do projeto, instale as dependências necessárias com o comando:

    ```
    npm i
    ```

    ou

    ```
    npm install
    ```

- Com base no arquivo `.env.example`, crie um arquivo `.env` preenchendo as variáveis de acordo com a sua configuração local. A conexão com o banco exige uma configuração semelhante a:

    ```
    DATABASE_URL = postgres://<usuario>:<senha>@localhost:5432/<banco>?schema=public
    ```

    onde `<usuario>`, `<senha>` e `<banco>` são o usuário, senha e banco do seu ambiente local e assumindo que o Postgres esteja rodando na porta padrão (5432);

    ```
    PORT = <porta>
    ```

    onde `<porta>` é a porta desejada para que aplicação rode. Caso essa variável não seja especificada, por padrão, será feita a tentativa de conexão na porta 4000.

* Rode o projeto no ambiente de desenvolvimento com o comando:

    ```
    npm run dev
    ```

* Um servidor local estará rodando na porta 4000 (ou outra especificada no `.env`) ao ser retornada a mensagem:

    ```
    Server running on port 4000
    ```

---

## Sobre a aplicação

* O intuito é simular uma plataforma de receitas, na qual os usuários podem cadastrar, editar, deletar, listar e avaliar as receitas de entre as notas 0-10.

* Rotas:

```
POST: /users
Body: { "username": "Olafé Corcam" }
```

```
GET: /users
```

```
GET: /users/:id
```

```
GET: /users/:id/ratings
```

```
PUT: /users/:id
Body: { "username": "olafe_corcam" }
```

```
DELETE: /users/:id
```

```
POST: /recipes
Body: { "name": "Pavê de coco", "user_id": 1, "ingredients": "1 lata de leite condensado, a mesma medida de leite integral, 1 lata de creme de leite (sem soro), 3 ovos, 1 pacote de coco ralado, 1 colher de sopa de açúcar e 1 pacote de biscoito maisena", "directions": "Em uma panela coloque o leite condensado, a mesma medida de leite e as gemas dos ovos. Leve ao fogo e vá mexendo até levantar fervura. Retire do fogo e despeje o creme em uma travessa e cubra com biscoito. Misture num pote o creme de leite, as claras em neve, o açúcar e a metade do pacote de coco ralado. Despeje o creme na travessa com as outras camadas e cubra com biscoito socado misturado com o resto do coco ralado e leve à geladeira. O tempo de deixar o pavê na geladeira é de 24h." }
```

```
GET: /recipes
```

```
GET: /recipes/:id
```

```
GET: /recipes/:id/ratings
```

```
POST: /recipes/:id/ratings
Body: { "user_id": 1, "rating": 9, "comment": "Muito bom! Ao invés de 24h na geladeira, deixei cerca de 1h no freezer e depois mais 3h na geladeira, também deu certo!" }
```

```
PUT: /users/:id
Body: { "name": "Pavê de coco", "user_id": 1, "ingredients": "1 lata de leite condensado, a mesma medida de leite integral, 1 lata de creme de leite (sem soro), 3 ovos, 1 pacote de coco ralado, 1 colher de sopa de açúcar e 1 pacote de biscoito maisena", "directions": "Em uma panela coloque o leite condensado, o leite integral e as gemas dos ovos. Leve ao fogo e vá mexendo até levantar fervura. Retire do fogo e despeje o creme em uma travessa e cubra com biscoito. Misture num pote o creme de leite, as claras em neve, o açúcar e a metade do pacote de coco ralado. Despeje o creme na travessa com as outras camadas e cubra com biscoito socado misturado com o resto do coco ralado e leve à geladeira por 24h ou cerca de 1h no freezer e depois mais 3h na geladeira." }
```

```
DELETE: /users/:id
```
