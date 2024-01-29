#APP

GymPass style app

## RFs (Requisitos funcionais)
- [OK] Deve ser possivel se cadastrar;
- [OK] Deve ser possivel se autenticar;
- [OK] Deve ser possivel obter o perfil de um usuario logado;
- [OK] Deve ser possivel obter o numero de check-ins realizados pelo usuario logado;
- [OK] Deve ser possivel o usuario obter seu historio de check-ins;
- [OK] Deve ser possível o usuário buscar academias próximas (até 10km);
- [] Deve ser possivel o usuario buscar academias pelo nome;
- [OK] Deve ser possivel o usuario realizar che-in em uma academia;
- [] Deve ser possivel validar o check-in de um usuario;
- [] Deve ser possivel cadastrar uma academia;

## RNs (Regras de negocio)
- [OK] O usuario não deve poder se cadastrar com um e-mail duplicado
- [] O usuario não pode fazer dois check-in no mesmo dia 
- [OK] O usuario não pode fazer check-in se não estiver perto(100m) da academia;
- [] O check-in só pode ser valida até 20 minutos após criado;
- [] O chech-n só pode ser validado por administradores;
- [] A academia só pode ser cadastrada por administradores;


## RNFs (Requisitos não funcionais)
- [OK] A senha do usuario precisa estar criptografada;
- [OK] os dados da aplicacao precisam estar persistidos em um banco PostgreSQL;
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



