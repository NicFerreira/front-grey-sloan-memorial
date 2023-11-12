import React, { useState } from "react";
import './style.css';
import { useParams } from "react-router-dom";

function CadastrarProntuarios () {
    const [pacientes, setPacientes] = useState(sessionStorage.getItem('pacientes') ? JSON.parse(sessionStorage.getItem('pacientes')) : [])
    const {id} = useParams()

    const prontuarioSubmitForm = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const formObject = {
            id:Math.floor(Math.random() * 1000)
        }
        formData.forEach((value, key) => {
            formObject[key] = value
        })
        
        const pacientesCopy = [...pacientes]
        pacientesCopy.forEach((paciente) => {
            if (paciente.id.toString() === id) {
                paciente.prontuario.push(formObject)
            }
        })
        setPacientes(pacientesCopy)
        sessionStorage.setItem('pacientes', JSON.stringify(pacientesCopy))

        alert('Prontuário cadastrado!')
        event.target.reset();
    }
    
    return (
        <div>
            <div className = 'novo-prontuario'>
                <form onSubmit={ prontuarioSubmitForm }> 
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
        </div>
    )
}

export default CadastrarProntuarios;