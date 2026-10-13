import { useState } from 'react'
import './App.scss'

export default function Diario() {
  const [textoVisivel, setTextoVisivel] = useState(false)

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
        <div className="criacao">
          <form>
            <div className='L1'>
              <input type="text" placeholder='Titulo:' />
              <div className="cores">
                <div className="cor"></div>
                <div className="cor"></div>
                <div className="cor"></div>
                <div className="cor"></div>
                <div className="cor"></div>
                <div className="cor"></div>
                <div className="cor"></div>
                <div className="cor"></div>
                <div className="cor"></div>
                <div className="cor"></div>
                <div className="cor"></div>
              </div>
              <button>Criar Nota</button>
            </div>
            <div className="L2">
              <input type="text" placeholder='Texto:' />
              <div className="textos">
                <div className="texto">
                  <p> <span>&#123;</span>Nome<span>&#125;</span></p>
                </div>
                <div className="texto">
                  <p> <span>&#123;</span>Teste<span>&#125;</span></p>
                </div>
              </div>
            </div>

          </form>
        </div>
        <div className="anotacoes">


        </div>

      </main>
    </div>
  )
}
