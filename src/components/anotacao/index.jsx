import './index.scss';
import { useState } from 'react';

export default function anotacao(props) {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false)
    const [isModalEditOpen, setIsModalEditOpen] = useState(false)
    return (
        <div className="comp-anotacao">
            <div className="anotacao"  style={{ borderTop: `8px solid ${props.cor ?? "#a1a1a1"}` }}>
            <div className="cima">
                <h2>{props.titulo ?? "Titulo Indefinido"}</h2>
                <time dateTime="2026-10-13">{props.data ?? "Data Indefinida"}</time>
            </div>
            <div className="meio">
                <button type="button" className="abrir-texto" onClick={() => setIsModalOpen(true)}>Abrir texto</button>


                {isModalOpen && (
                    <div className="modal">
                        <div className="modal-content" style={{ borderTop: `8px solid ${props.cor ?? "#a1a1a1"}`}}  >
                            <button
                                className="modal-fechar"
                                onClick={() => setIsModalOpen(false)}
                            >
                                <i class="fa-solid fa-xmark"></i>
                            </button>

                            <h2>{props.titulo ?? "Titulo Indefinido"}</h2>
                            <p>{props.texto ?? "Texto Indefinido"}</p>
                        </div>
                    </div>
                )}
            </div>


            <div className="baixo">

                <button type="button" className="excluir" onClick={() => setIsModalDeleteOpen(true)}>Excluir</button>
                {isModalDeleteOpen && (
                    <div className="modal">
                        <div className="modal-content">
                            <button
                                className="modal-fechar"
                                onClick={() => setIsModalDeleteOpen(false)}
                            >
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                            <p>Deseja mesmo excluir essa anotação?</p>
                            <button className='excluirm'>Excluir</button>
                        </div>
                    </div>
                )}


                <button type="button" className="editar" onClick={() => setIsModalEditOpen(true)} >Editar</button>
                {isModalEditOpen && (
                    <div className="modal">
                        <div className="modal-content-edit">
                            <button
                                className="modal-fechar"
                                onClick={() => setIsModalEditOpen(false)}
                            >
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                            <p>Edite essa anotação</p>
                            <input type="text" placeholder='Alterar Titulo' />
                            <input type="text" placeholder='Alterar Texto' />
                            <button className='editarm'>Editar</button>
                        </div>
                    </div>

                )}
            </div>
        </div>
        </div >
    );
}