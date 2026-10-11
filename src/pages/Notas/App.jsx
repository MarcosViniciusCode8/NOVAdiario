import './App.scss'

export default function Diario() {
  return (
    <div className="pagina-diario">
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
        <div className="criacao"></div>
        <div className="anotacoes"></div>
      </main>
    </div>
  )
}

