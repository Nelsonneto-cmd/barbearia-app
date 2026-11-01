import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="navbar">
      <h1 className="logo">✂️ Barbearia</h1>
      <nav>
        <NavLink to="/">Início</NavLink>
        <NavLink to="/servicos">Serviços</NavLink>
        <NavLink to="/marcar">Marcar</NavLink>
      </nav>
    </header>
  )
}
