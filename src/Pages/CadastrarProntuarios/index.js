import React, { useState } from "react";
import './style.css';


function CadastrarProntuarios () {
    const [dados, setDados] = useState(sessionStorage.getItem('pacientes') ? JSON.parse(sessionStorage.getItem('pacientes')) : [])
    const [mostrarNovoForm, setMostrarNovoForm] = useState(false)
    const [novoProntuario, setNovoProntuario] = useState([])
        
    const adicionarProntuario = (id) => {
        const dadosCopy = [...dados]
        const pacienteIndex = dadosCopy.findIndex((value) => value.id === id)
        
        if (pacienteIndex !== -1) {
            dadosCopy[pacienteIndex].prontuario = novoProntuario
            setDados(dadosCopy)
            sessionStorage.setItem('pacientes', JSON.stringify(dadosCopy))
            setNovoProntuario(novoProntuario)
            setMostrarNovoForm(true)
        }
    }

    // const prontuarioSubmitForm = (event) => {
    //     event.preventDefault()
    //     const prontForm = dados.prontuario(event.target)

        


    //     alert('Prontuário cadastrado!')
    //     event.target.reset();
    // }
    

    return (
    <div className = 'card'>
        <div className = 'table-container'>
            <div className = 'title'>Cadastrar prontuários:</div>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>Prontuário</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dados.map((dado) => (
                            <tr key={dado.id}>
                                <td>{dado.nome}</td>
                                <td>{dado.sobrenome}</td>
                                <td>{dado.prontuario}</td>
                                <td><button className = 'remove' onClick={() => adicionarProntuario(dado.id)}>Adicionar prontuário</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        <div>
            {mostrarNovoForm && (
                <div className = 'novo-prontuario'>
                    <form> 
                        <label htmlFor = 'anamnese'>Anamnese</label>
                        <input name="anamnese" id='anamnese' placeholder="Anamnese" />
                        
                        <label htmlFor = 'sintomas'>Principais sintomas</label>
                        <input name="sintomas" id='sintomas' placeholder="Sintomas" />

                        <label htmlFor = 'sugestao'>Sugestão clínica</label>
                        <input name="sugestao" id='sugestao' placeholder="Sugestão clínica" />

                        <label htmlFor = 'tratamento'>Tratamento</label>
                        <input name="tratamento" id='tratamento' placeholder="Tratamento" />

                        <label htmlFor = 'status'>Status do paciente</label>
                        <input name="status" id='status' placeholder="Status" />

                        <button className = 'remove' type="reset">Cancelar</button>
                        <button className = 'submit' type="submit">Salvar</button>
                    </form>
                </div>
            )}
        </div>
    </div>
    )
}

export default CadastrarProntuarios;