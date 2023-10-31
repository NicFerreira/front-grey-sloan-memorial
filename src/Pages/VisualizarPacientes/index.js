import React, { useState } from "react";
import './style.css';
import { useNavigate } from 'react-router-dom'

// const Sexo = {
//     Masculino: 'M',
//     Feminino: 'F',
// }

function VisualizarPacientes () {
    const [dados, setDados] = useState(sessionStorage.getItem('pacientes') ? JSON.parse(sessionStorage.getItem('pacientes')) : [])
    const navigate = useNavigate()
    // const dados = Array(5).fill(
    //     {
    //         nome: 'Paciente',
    //         sobrenome: 'X',
    //         sexo: Sexo.Masculino,
    //         endereco: 'Rua da Amargura, 123',
    //         telefone: '45678901',
    //         emergencia: {
    //             nome: 'fulano',
    //             telefone: '88889999'
    //         }
    //     }).map((dado) => ({...dado, id:Math.floor(Math.random() * 1000)})) //Chave do ID criado aleatóriamente
    
    const removerPaciente = (id) => {
        const dadosCopy = [...dados]
        const removeIndex = dadosCopy.findIndex((value) => value.id === id) //Obtém a posição no array do objeto que possui um ID igual ao pesquisado.

        if (removeIndex > -1) {
            dadosCopy.splice(removeIndex, 1) //Remover um elemento do array numa posição específica
            setDados(dadosCopy) //Atualizar o valor da variável dados 
            sessionStorage.setItem('pacientes', JSON.stringify(dadosCopy)) //Atualizar o valor salvo globalmente no sessionStorage
        }
    }

    return (
    <div className = 'card'>
        <div className = 'table-container'>
            <div className = 'title'>Pacientes cadastrados:</div>
            <div className = 'actions'>
                <button onClick={() => navigate('/CadastrarPacientes')}>Cadastrar paciente</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>Sexo</th>
                        <th>Endereço</th>
                        <th>Telefone</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dados.map((dado) => (
                            <tr key={dado.id}>
                                <td>{dado.nome}</td>
                                <td>{dado.sobrenome}</td>
                                <td>{dado.sexo}</td>
                                <td>{dado.endereco}</td>
                                <td>{dado.telefone}</td>
                                <td><button className = 'remove' onClick={() => removerPaciente(dado.id)}>Remover paciente</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
    )
}

export default VisualizarPacientes;