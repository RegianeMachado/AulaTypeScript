# Projeto Buscado de Produtos

# Autenticação

- login
  -Receber email e senha e retornar um token
- logout
  - Vai invalidar o token do usuario
- Reset Password

  - receber o email, e a nova senha para alterar o login do usuario

  UserController.ts

  - login(res.email, res.password)
    return token
  - logout (se logado - )
  - resetSenha(res.email, res.password){

  }
  routes/User.ts
  post/login
  post/logout
  post/resetPassword/:id

# Produtos

- Recebe um termo e retorna os produtos relacionados
  ProductsController.ts{
  index(res.buscado){}
  }
  get/produtos/term

- O usuario pode favoritar um produto especifico
  tabela aux para gravar os dados
  grava id usuário e id produto
  store

- O usuario pode deletar um produto favorito
  delete(res.id_usuario, res.id_senha)
  post/delete/:is

# Usuarios

- Cadastro de Usuario: Nome, email e senha

- Editar dados
- Ver produtos favoritos
