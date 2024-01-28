#APP

GymPass style app

## RFs (Requisitos funcionais)
- [] Deve ser possivel se cadastrar;
- [] Deve ser possivel se autenticar;
- [] Deve ser possivel obter o perfil de um usuario logado;
- [] Deve ser possivel obter o numero de check-ins realizados pelo usuario logado;
- [] Deve ser possivel o usuario obter seu historio de check-ins;
- [] Deve ser possivel o usuario buscar academias proximas;
- [] Deve ser possivel o usuario buscar academias pelo nome;
- [] Deve ser possivel o usuario realizar che-in em uma academia;
- [] Deve ser possivel validar o check-in de um usuario;
- [] Deve ser possivel cadastrar uma academia;

## RNs (Regras de negocio)
- [] O usuario não deve poder se cadastrar com um e-mail duplicado
- [] O usuario não pode fazer dois check-in no mesmo dia 
- [] O usuario não pode fazer check-in se não estiver perto(100m) da academia;
- [] O check-in só pode ser valida até 20 minutos após criado;
- [] O chech-n só pode ser validado por administradores;
- [] A academia só pode ser cadastrada por administradores;


## RNFs (Requisitos não funcionais)
- [] A senha do usuario precisa estar criptografada;
- [] os dados da aplicacao precisam estar persistidos em um banco PostgreSQL;
- [] Todas as listas de dados precisam estar paginadas com 20 itens por pagina;.
- [] O usuário deve ser identificado por um JWT (JSON Web Token);


## commands
-- docker
- start  containers: docker compose up -d
- stop   containers: docker compose stop
- delete containers: docker compose down

-- migrations
npx prisma migrate dev

-- visualize database 
npx prisma studio



