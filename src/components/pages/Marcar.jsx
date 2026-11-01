import { useState } from 'react'

const servicos = ['Corte de cabelo', 'Barba', 'Corte + Barba', 'Corte infantil']
const barbeiros = ['Qualquer', 'João', 'Miguel', 'Rui']
const horas = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00']

export default function Marcar() {
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    servico: servicos[0],
    barbeiro: barbeiros[0],
    data: '',
    hora: '',
  })
  const [marcacoes, setMarcacoes] = useState([])
  const [sucesso, setSucesso] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.nome || !form.telefone || !form.data || !form.hora) return

    const ocupado = marcacoes.some(
      (m) => m.data === form.data && m.hora === form.hora &&
        (m.barbeiro === form.barbeiro || form.barbeiro === 'Qualquer')
    )
    if (ocupado) {
      alert('Essa hora já está ocupada. Escolhe outra.')
      return
    }

    setMarcacoes([...marcacoes, { ...form, id: Date.now() }])
    setSucesso(true)
    setForm({ ...form, nome: '', telefone: '', data: '', hora: '' })
    setTimeout(() => setSucesso(false), 3000)
  }

  const cancelar = (id) => setMarcacoes(marcacoes.filter((m) => m.id !== id))

  return (
    <section className="page">
      <h2>Marcar</h2>

      <form className="form" onSubmit={handleSubmit}>
        <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} />
        <input name="telefone" placeholder="Telemóvel" value={form.telefone} onChange={handleChange} />

        <select name="servico" value={form.servico} onChange={handleChange}>
          {servicos.map((s) => <option key={s}>{s}</option>)}
        </select>

        <select name="barbeiro" value={form.barbeiro} onChange={handleChange}>
          {barbeiros.map((b) => <option key={b}>{b}</option>)}
        </select>

        <input type="date" name="data" value={form.data} onChange={handleChange}
          min={new Date().toISOString().split('T')[0]} />

        <select name="hora" value={form.hora} onChange={handleChange}>
          <option value="">Escolhe a hora</option>
          {horas.map((h) => <option key={h}>{h}</option>)}
        </select>

        <button className="btn" type="submit">Confirmar marcação</button>
        {sucesso && <p className="ok">✅ Marcação feita com sucesso!</p>}
      </form>

      {marcacoes.length > 0 && (
        <div className="lista">
          <h3>As tuas marcações</h3>
          {marcacoes.map((m) => (
            <div className="card" key={m.id}>
              <p><strong>{m.servico}</strong> com {m.barbeiro}</p>
              <p>{m.data} às {m.hora}</p>
              <button onClick={() => cancelar(m.id)}>Cancelar</button>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}