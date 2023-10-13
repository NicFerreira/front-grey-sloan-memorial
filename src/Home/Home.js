import {useState} from 'react';
import "./Home.css";
import "./Visualizar-pacientes.js";

function Home() {
    const [currentMenu, setCurrentMenu] = useState()

    const menus = [
        {
            id: 1,
            route: './Visualizar-pacientes.js',
            label: 'Visualizar Pacientes',
            content: <visualizarPacientes />
        },
        {
            id: 2,
            route: '/visualizar-prontuario',
            label: 'Visualizar Prontuários',
            content: 'Visualizando prontuários...',
        },
        {
            id: 3,
            route: '/cadastrar-pacientes',
            label: 'Cadastrar Pacientes',
            content: 'Visualizando cadastro de pacientes...',
        },
        {
            id: 4,
            route: '/cadastrar-prontuarios',
            label: 'Cadastrar Prontuários',
            content: 'Visualizando cadastro de prontuários...',
        }
    ]

    const handleMenuClick = (menu) => {
        setCurrentMenu(menu)
    }

    return(
    <div>
        <header>Grey Sloan Memorial</header>
        <div className="menus">
            {
                menus.map((menu) => (
                    <button key={`menu-${menu.id}`} onClick={() => {handleMenuClick(menu)}}>{menu.label}</button>
                ))
            }
        </div>
        <div className='content'>
            {currentMenu?.content}
        </div>
    </div>
    )
}

export default Home;