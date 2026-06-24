import PropTypes from 'prop-types'
import EventoCard from './EventoCard'

export default function ListaEventos({ eventos }) {
  if (!eventos || eventos.length === 0) {
    return <p className="no-eventos">No hay eventos que coincidan.</p>
  }

  return (
    <div className="event-grid lista-eventos">
      {eventos.map((ev) => (
        <EventoCard
          key={ev.id}
          nombre={ev.nombre}
          lugar={ev.lugar}
          duracion={ev.duracion}
          tipo={ev.tipo}
          descripcion={ev.descripcion}
          fechas={ev.fechas}
        />
      ))}
    </div>
  )
}

ListaEventos.propTypes = {
  eventos: PropTypes.arrayOf(PropTypes.object).isRequired,
}
