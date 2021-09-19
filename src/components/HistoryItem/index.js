import './index.css'

const HistoryItem = props => {
  const {historyItem, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem
  const deleteHistoryItem = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-item-container">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" className="domain-logo" />
      <p className="title">{title}</p>
      <p className="domain-url">{domainUrl}</p>
      <button
        testid="delete"
        type="button"
        className="btn"
        onClick={deleteHistoryItem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
