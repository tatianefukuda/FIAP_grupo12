# Nova funcionalidade de preferências para a 99

## Introdução

O objetivo da API é capturar as preferências dos usuários para oferecer uma corrida que melhor atenda as suas necessidades.

## Tecnologias

Foi usado NodeJS 13 + Express 4 + Mysql 5.7 + Docker e Docker Compose

## Subindo a app

Execute na raiz
````
docker-compose up
````

Endereço local http://localhost:3000


## Funcionamento da API

### Get /preferences
Lista as preferências que o usuário pode escolher

#### Response
````
[
    {
        "id": 1,
        "name": "apenas_sexo_feminino",
        "description": "Motoristas do sexo feminino"
    },
    {
        "id": 2,
        "name": "revisar_preferencias",
        "description": "Revisar opções a cada corrida"
    },
    {
        "id": 3,
        "name": "compartilhar_contatos",
        "description": "Compartilhar automaticamente minha corrida com os contatos de segurança"
    },
    {
        "id": 4,
        "name": "area_risco",
        "description": "Evitar áreas de risco"
    },
    {
        "id": 5,
        "name": "carro_acessivel",
        "description": "Carro acessivel"
    },
    {
        "id": 6,
        "name": "cadeirinha_bb_conforto",
        "description": "Cadeirinha/Bebê conforto"
    }
]
````

### Post /user/preferences

Adiciona preferências para um usuário. Aqui temos uma regra de domínio, onde a preferencia **Motoristas do sexo feminino** só pode ser exibida para
usuárias do sexo feminino;

Para efeito de teste, temos na app dois IDs de usuário: Id 1 é masculino o 2 feminino.

#### Request:
`````
{	
	"user_id": 2,
	"preferences": [
		{"id": 1, "enable": 1},
		{"id": 2, "enable": 1},
		{"id": 3, "enable": 1},
		{"id": 4, "enable": 0},
		{"id": 5, "enable": 0},
		{"id": 5, "enable": 0}
	]
}
`````
#### Detalhes da Request
**id:** Idenficador da preferência listada no **/preferences**

**enable:** Estado atual da preferência, ativo:1 inativo:2


#### Response:

`````
[
    {
        "user_id": 2,
        "preference_id": 2,
        "enable": 1
    },
    {
        "user_id": 2,
        "preference_id": 3,
        "enable": 1
    },
    {
        "user_id": 2,
        "preference_id": 4,
        "enable": 0
    },
    {
        "user_id": 2,
        "preference_id": 5,
        "enable": 0
    },
    {
        "user_id": 2,
        "preference_id": 6,
        "enable": 0
    }
]
`````

### Get /user/preferences/:user_id

Retorna as preferências do usuário já salvas

#### Response

`````
[
    {
        "id": 1,
        "user_id": 2,
        "preference_id": 2,
        "enable": 1
    },
    {
        "id": 2,
        "user_id": 2,
        "preference_id": 3,
        "enable": 1
    },
    {
        "id": 3,
        "user_id": 2,
        "preference_id": 4,
        "enable": 0
    },
    {
        "id": 4,
        "user_id": 2,
        "preference_id": 5,
        "enable": 0
    },
    {
        "id": 10,
        "user_id": 2,
        "preference_id": 6,
        "enable": 0
    }
]
`````


