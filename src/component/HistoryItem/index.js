import './index.css'

const HistoryItem = props => {
  const {historyDetail, deleteUser} = props
  const {timeAccessed, logoUrl, id, title, domainUrl} = historyDetail
  const onDelete = () => {
    deleteUser(id, historyDetail)
  }
  return (
    <li className="main_container">
      <div className="first_container">
        <p className="time">{timeAccessed}</p>
        <img className="image" src={logoUrl} alt="domain logo" />
        <p className="main_heading">{title}</p>
        <p className="domain">{domainUrl}</p>
      </div>
      <div>
        <button type="button" data-testid="delete" onClick={onDelete}>
          <img
            className="deleted"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
