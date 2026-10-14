import './Index.scss'

export default function Configs() {
  return (
    <div className="pagina-configs">
      <aside>
        <div className="superior">
          <img src="./assets/images/logo-novadiario.png" alt="Logo da marca NOVAdiário" />

          <div className="funcionalidades">
            <div className="selecionado">
              <i class="fa-regular fa-note-sticky"></i>
              <p>Diário Online</p>
            </div>
            <div className="nselecionado">
              <i class="fa-solid fa-user-tie"></i>
              <p>Aŕea do Administrador</p>
            </div>
            <div className="nselecionado">
              <i class="fa-solid fa-sliders"></i>
              <p>Configurações</p>
            </div>
          </div>
        </div>
        <div className="logout">
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
          <p>Sair da conta</p>
        </div>
      </aside>
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

