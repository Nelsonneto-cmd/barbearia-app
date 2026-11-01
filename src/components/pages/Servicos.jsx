const servicos = [
  { id: 1, nome: 'Corte de cabelo', preco: 10, duracao: 30 },
  { id: 2, nome: 'Barba', preco: 7, duracao: 20 },
  { id: 3, nome: 'Corte + Barba', preco: 15, duracao: 45 },
  { id: 4, nome: 'Corte infantil', preco: 8, duracao: 25 },
]

export default function Servicos() {
  return (
    <section className="page">
      <h2>Serviços</h2>
      <div className="cards">
        {servicos.map((s) => (
          <div className="card" key={s.id}>
            <h3>{s.nome}</h3>
            <p>{s.duracao} min</p>
            <strong>{s.preco} €</strong>
          </div>
        ))}
      </div>
    </section>
  )
}