import PropTypes from 'prop-types'

const TIPOS = ['Todos', 'Concierto', 'Teatro', 'Exposicion']

export default function FiltroTipo({ tipoSeleccionado, onChange }) {
  return (
    <div className="filtro-tipo">
      <div className="filtro-buttons" role="tablist" aria-label="Filtrar por tipo">
        {TIPOS.map((t) => (
          <button
            key={t}
            type="button"
            className={"filtro-btn" + (t === tipoSeleccionado ? ' active' : '')}
            onClick={() => onChange(t)}
            aria-pressed={t === tipoSeleccionado}
          >
            {t}
          </button>
        ))}
      </div>

      <label className="filtro-select-label">
        <span className="sr-only">Filtrar por tipo</span>
        <select
          className="filtro-select"
          value={tipoSeleccionado}
          onChange={(e) => onChange(e.target.value)}
        >
          {TIPOS.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </label>
    </div>
  )
}

FiltroTipo.propTypes = {
  tipoSeleccionado: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
