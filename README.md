# desafio-1

## Dependências
- NodeJs

## Instalar dependências
1 - Entre na pasta `api`:
```
cd api
```

2 - Instale as dependências:
```
npm install
```

## Rodar localmente
- Caso `não` esteja dentro da pasta `api`:
```
node api/app.js
```

- Caso esteja dentro da pasta `api`:
```
node app.js
```

OBS: necessário que a porta `3000` não esteja em utilização.


## Ideias
API em node com express com conteudo mockado
### v1
Tema PetShop, produtos e serviços oferecidos por um petshop.
Rotas:
- `GET` http://localhost:3000/v1/products [TODO] => 
retorna listagem de produtos que são vendidos no petShop.

- `GET` http://localhost:3000/v1/services => 
retorna lista de serviços que o petshop oferece.

- `POST` http://localhost:3000/v1/services => 
cria novo serviço.
`Body request`
``` 
    {
        "name": string,
        "type": string, // BIG, MEDIUM, SHORT
        "price": string
    }
```


## Endpoints

- `GET` localhost:3000/health 
    - Respostas: `200`
    ```
    OK
    ```
- `GET` localhost:3000/ping 
    - Respostas: `200`
    ```
    pong
    ```
- `GET` localhost:3000/v1/services
    - Respostas: `200`
    ```
    []{
            "id": int,
            "name": string,
            "type": string, // BIG || MEDIUM || SHORT
            "price": string,
        }
    ```
- `POST` localhost:3000/v1/services
    - Request Body
    ```
    {
        "name": string,
        "type": string, // BIG || MEDIUM || SHORT
        "price": string
    }
    ```
    - Respostas: `201`, `400`


### Referências
- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
