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

          <div className={`anotacao ${textoVisivel ? 'anotacao-aberta' : ''}`}>
            <div className='info'>
              <p>Comi 2 kg de merda</p>
              <p>2026/10/10</p>
            </div>
            <div className="sobre">

              <button><i class="fa-regular fa-star"></i></button>
              <button><i class="fa-solid fa-trash-can"></i></button>
              <button><i class="fa-solid fa-pen"></i></button>

              <button className='vermais' onClick={() => setTextoVisivel(!textoVisivel)}>
                {textoVisivel ? 'Ocultar seu texto' : 'Ver seu texto'}
              </button>


            </div>
            <div className="conteudo-nota">
              <p>Este é o texto completo da sua anotação. Ele aparece quando você clica em “Ver seu texto”.</p>
            </div>
          </div>
          <div className="anotacao">

          </div>
          <div className="anotacao">

          </div>
        </div>

      </main>
    </div>
  )
}
