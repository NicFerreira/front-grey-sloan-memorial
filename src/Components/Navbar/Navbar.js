import "./Navbar.css";
import { Outlet, useNavigate } from "react-router-dom";


function Navbar() {
    const navigate = useNavigate();
    const menus = [
        {
            id: 1,
            route: '/VisualizarPacientes',
            label: 'Visualizar Pacientes',
        },
        {
            id: 2,
            route: '/VisualizarProntuarios',
            label: 'Visualizar Prontuários',
        },
        {
            id: 3,
            route: '/CadastrarPacientes',
            label: 'Cadastrar Pacientes',
        },
        {
            id: 4,
            route: '/CadastrarProntuarios',
            label: 'Cadastrar Prontuários',
        },
    ]

    return(
    <div>
        <header>Grey Sloan Memorial</header>
        <div className="menus">
            {
                menus.map((menu) => (
                    <button key={`menu-${menu.id}`} onClick={() => {navigate(menu.route)}}>{menu.label}</button>
                ))
            }
        </div>
        <Outlet />
    </div>
    )
}

export default Navbar;