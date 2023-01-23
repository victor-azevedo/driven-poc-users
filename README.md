# DRIVEN POC USERS

Implementado POC de uma entidade User que possui os seguintes atributos:

- nome;
- nickname;
- birthday (YYYY-MM-DD);
- cpf;
- email;
- phone;

Rotas implementadas:

```
POST: /users
Body:
  {
    "name": "Jose Victor",
    "nickname": "Victor",
    "birthday": "1989-09-18",
    "cpf": "12345678912",
    "email": "victor@uol.com",
    "phone": "85987872525"
  }

Response:
  {
    "message": "Created user id = 62"
  }
```

```
GET: /users?bornAfter=YYYY-MM-DD
Query:
  bornAfter: 1987-01-01

Response:
  [
    {
      "id": 56,
      "name": "Jose Victor",
      "nickname": "Vctor",
      "birthday": "1986-09-18",
      "cpf": "12345678901",
      "email": "123@uol.com",
      "phone": "85987872525"
    },
    {
      "id": 54,
      "name": "Jose Victor",
      "nickname": "Vctor",
      "birthday": "1986-09-18",
      "cpf": "12345678971",
      "email": "456@uol.com",
      "phone": "85987872525"
    },
    {
      "id": 57,
      "name": "Jose Victor",
      "nickname": "Vctor",
      "birthday": "1987-09-18",
      "cpf": "12345678801",
      "email": "jose@uol.com",
      "phone": "85987872525"
    },
    {
      "id": 62,
      "name": "Jose Victor",
      "nickname": "Vctor",
      "birthday": "1989-09-18",
      "cpf": "12345621801",
      "email": "jossea@uol.com",
      "phone": "85987872525"
    }
  ]
```

```
GET: /users/:id
Response:
  {
    "id": 56,
    "name": "Jose Victor",
    "nickname": "Vctor",
    "birthday": "1986-09-18",
    "cpf": "12345678901",
    "email": "123@uol.com",
    "phone": "85987872525"
  }
```

```
PUT: /users/:id
Body:
  {
    "name": "Jose Victor",
    "nickname": "Victor",
    "birthday": "1989-09-18",
    "cpf": "12345678912",
    "email": "victor@uol.com",
    "phone": "85987872525"
  }

Response:
  {
    "message": "Updated user id = 61"
  }
```

```
DELETE: /users/:id
Response:
  {
    "message": "Deleted user id = 59"
  }
```
