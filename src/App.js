import './App.css';
import Navbar from './Components/Navbar/Navbar';

import VisualizarPacientes from "./Pages/VisualizarPacientes"; //Componente renderizável: jsx renderiza um html
import VisualizarProntuarios from "./Pages/VisualizarProntuarios";
import CadastrarPacientes from "./Pages/CadastrarPacientes";
import CadastrarProntuarios from "./Pages/CadastrarProntuarios";

import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
            path: "/VisualizarPacientes",
            element: <VisualizarPacientes />,
        },
        {
            path: "/VisualizarProntuarios",
            element: <VisualizarProntuarios />,
        },
        {
            path: "/CadastrarPacientes",
            element: <CadastrarPacientes />,
        },
        {
            path: "/CadastrarProntuarios",
            element: <CadastrarProntuarios />,
        },
      ]
    },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
