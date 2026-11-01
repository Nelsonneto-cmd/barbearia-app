import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="hero">
      <h2>O teu estilo, a nossa arte</h2>
      <p>Cortes clássicos e modernos, barba e muito mais.</p>
      <Link to="/marcar" className="btn">Marcar agora</Link>
    </section>
  )
}