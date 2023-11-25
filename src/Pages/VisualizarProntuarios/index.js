import React, { useRef, useState } from "react";
import './style.css';

function VisualizarProntuarios () {
    const pacientes = useRef(sessionStorage.getItem('pacientes') ? JSON.parse(sessionStorage.getItem('pacientes')) : [])
    const [paciente, setPaciente] = useState()

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const id = formData.get("pacienteSelecionado")
        const pacienteSelecionado = pacientes.current.find((dado) => dado.id.toString() === id)
        setPaciente(pacienteSelecionado)
    }

    return (
    <div className = 'card'>
        <div className = 'table-container'>
            <div className = 'title'>Prontuarios cadastrados:</div>
            <form onSubmit={ handleSubmit }>
                <select name="pacienteSelecionado">
                    <option value = {""}>Selecione o paciente...</option>
                    {
                        pacientes.current.map((dado) => (
                            <option value={dado.id}>{dado.nome}</option>
                        ))
                    }
                </select>
                <button className = 'submit' type="submit">Pesquisar</button>
            </form>
            {
                !!paciente?.prontuario&& (
                    <table>
                        <thead>
                            <tr>
                                <th>Paciente:</th>
                                <th>Anamnese</th>
                                <th>Sintomas</th>
                                <th>Sugestão</th>
                                <th>Tratamento</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                paciente.prontuario.map((prontuario) => (
                                    <tr key={prontuario.id}>
                                        <td>{paciente.nome}</td>
                                        <td>{prontuario.anamnese}</td>
                                        <td>{prontuario.sintomas}</td>
                                        <td>{prontuario.sugestao}</td>
                                        <td>{prontuario.tratamento}</td>
                                        <td>{prontuario.status}</td>
                                    </tr>
                                )) 
                            }
                        </tbody>
                    </table>
                )
            }
        </div>
    </div>
    );
}

export default VisualizarProntuarios;