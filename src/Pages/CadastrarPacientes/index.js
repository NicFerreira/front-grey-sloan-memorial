import React from "react";
import './style.css';
import { useForm } from "react-hook-form";

function CadastrarPacientes () {
    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const handleSubmitForm = (paciente) => {
        paciente.id = Math.floor(Math.random() * 1000)
        const previousList = sessionStorage.getItem('pacientes') ? JSON.parse(sessionStorage.getItem('pacientes')) : []
        sessionStorage.setItem('pacientes', JSON.stringify([...previousList, paciente]))

        alert('Paciente cadastrado!')
        reset();
    }

    return (
        <div className = 'card'>
            <span className = 'title'>
                Cadastro de pacientes:
            </span>
            <form onSubmit={ handleSubmit(handleSubmitForm) }>
                <label htmlFor = 'nome'>Nome</label>
                <input {...register('nome', { required: true })} id='nome' placeholder="Digite seu nome..." />
                {errors.nome?.type === "required" && (
                    <p role="alert">O nome é obrigatório</p>
                )}

                <label htmlFor = 'sobrenome'>Sobrenome</label>
                <input {...register('sobrenome', { required: true })} id='sobrenome' placeholder="Digite seu sobrenome..." />
                {errors.sobrenome?.type === "required" && (
                    <p role="alert">O Sobrenome é obrigatório</p>
                )}

                <label htmlFor = 'sexo'>Sexo</label>
                <input  {...register('sexo', { required: true })} id='sexo' placeholder="Digite seu sexo..." />
                {errors.sexo?.type === "required" && (
                    <p role="alert">O sexo é obrigatório</p>
                )}

                <label htmlFor = 'endereco'>Endereço</label>
                <input  {...register('endereco', { required: true })} id='endereco' placeholder="Digite seu endereco..." />
                {errors.endereco?.type === "required" && (
                    <p role="alert">O Endereço é obrigatório</p>
                )}

                <label htmlFor = 'telefone'>Telefone</label>
                <input  {...register('telefone', { required: true, setValueAs: (value)=> value.replace(/[^0-9]+/g, "") })} id='telefone' placeholder="Digite seu telefone..." />
                {errors.telefone?.type === "required" && (
                    <p role="alert">O telefone é obrigatório</p>
                )}

                <button className = 'remove' type="reset">Cancelar</button>
                <button className = 'submit' type="submit">Salvar</button>
            </form>
        </div>
    );
}

export default CadastrarPacientes;