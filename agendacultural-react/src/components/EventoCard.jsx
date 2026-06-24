import PropTypes from 'prop-types'

export default function EventoCard({ nombre, lugar, duracion, tipo, descripcion, fechas }) {
  const tipoKey = (() => {
    if (!tipo) return 'otro'
    const t = tipo.toLowerCase()
    if (t.includes('concierto')) return 'concierto'
    if (t.includes('teatro')) return 'teatro'
    if (t.includes('expos') || t.includes('exposición') || t.includes('exposicion')) return 'exposicion'
    return t.replace(/\s+/g, '-')
  })()

  return (
    <article className={`evento-card tipo-${tipoKey}`}>
      <header className="evento-header">
        <h3 className="evento-nombre">{nombre}</h3>
        <span className={`evento-tipo tipo-badge tipo-${tipoKey}`}>{tipo}</span>
      </header>
      <div className="evento-body">
        <p className="evento-descripcion">{descripcion}</p>
        <ul className="evento-meta">
          <li><strong>Lugar:</strong> {lugar}</li>
          <li><strong>Duración:</strong> {duracion > 0 ? `${duracion} min` : 'N/A'}</li>
          <li><strong>Fechas:</strong> {fechas && fechas.length ? fechas.join(', ') : 'Sin fechas'}</li>
        </ul>
      </div>
    </article>
  )
}

EventoCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  lugar: PropTypes.string,
  duracion: PropTypes.number,
  tipo: PropTypes.string,
  descripcion: PropTypes.string,
  fechas: PropTypes.arrayOf(PropTypes.string),
}

EventoCard.defaultProps = {
  lugar: '',
  duracion: 0,
  tipo: '',
  descripcion: '',
  fechas: [],
}
