import './Index.scss'

export default function Login() {
  return (
    <div className="pagina-login">
      <main>
        <div className="login">
          <form>
            <div className='introducao'>
              <h2>Faça seu Login</h2>
              <p>Faça o login na NOVAdiário para poder acessar suas anotações</p>
            </div>

            <div className='entradas'>
              <div className='username'>
                <label htmlFor="username">Nome de usuário:</label>
                <input type="text" id="username" />
              </div>

              <div className='password'>
                <label htmlFor="password">Senha:</label>
                <input type="text" id="password" />
              </div>
            </div>
            <div className='resolucoes'>
              <button>Login</button>
              <p>Não consegue entrar na sua conta <a href="">Redefinir senha</a></p>
              <p>Não tem conta <a href="">Criar Conta</a></p>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

