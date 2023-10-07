import {useState} from 'react';
import "./Home.css";

function Home() {
    const [currentMenu, setCurrentMenu] = useState()

    const menus = [
        {
            id: 1,
            route: '/visualizar-pacientes',
            label: 'Visualizar Pacientes',
            content: 'Visualizando pacientes...',
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
            label: 'cadastrar Prontuários',
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