import React from "react";
import './style.css';

function CadastrarPacientes () {
    const handleSubmitForm = (event) => {
        event.preventDefault()
        const formValues = new FormData(event.target)
        const formObject = {
            id:Math.floor(Math.random() * 1000)
        }
        formValues.forEach((value, key) => {
            formObject[key] = value
        })

        const previousList = sessionStorage.getItem('pacientes') ? JSON.parse(sessionStorage.getItem('pacientes')) : []
        sessionStorage.setItem('pacientes', JSON.stringify([...previousList, formObject]))

        alert('Paciente cadastrado!')
        event.target.reset();
    }

    return (
        <div className = 'card'>
            <span className = 'title'>
                Cadastro de pacientes:
            </span>
            <form onSubmit={ handleSubmitForm }>
                <label htmlFor = 'nome'>Nome</label>
                <input name="nome" id='nome' placeholder="Digite seu nome..." />

                <label htmlFor = 'sobrenome'>Sobrenome</label>
                <input name="sobrenome" id='sobrenome' placeholder="Digite seu sobrenome..." />

                <label htmlFor = 'sexo'>Sexo</label>
                <input name="sexo" id='sexo' placeholder="Digite seu sexo..." />

                <label htmlFor = 'endereco'>Endereço</label>
                <input name="endereco" id='endereco' placeholder="Digite seu endereco..." />

                <label htmlFor = 'telefone'>Telefone</label>
                <input name="telefone" id='telefone' placeholder="Digite seu telefone..." />

                <button className = 'remove' type="reset">Cancelar</button>
                <button className = 'submit' type="submit">Salvar</button>
            </form>
        </div>
    );
}

export default CadastrarPacientes;