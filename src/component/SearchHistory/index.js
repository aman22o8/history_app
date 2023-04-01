import {Component} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

class SearchHistory extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteUser = (id, historyDetail) => {
    // const {usersDetailsList} = this.state
    const filteredUsersData = historyDetail.filter(each => each.id !== id)
    console.log(filteredUsersData)
  }

  render() {
    const {searchInput} = this.state
    const {historylist} = this.props
    const searchResults = historylist.filter(eachUser =>
      eachUser.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    // console.log(filteredUsersData)
    console.log(searchResults.length)

    return (
      <div className="container_main">
        <div className="header">
          <img
            className="history"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <button className="button" type="button">
            <img
              className="search"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
          </button>
          <input
            placeholder="Search History"
            type="search"
            className="search_box"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
        </div>
        <div className="footer">
          {searchResults.length !== 0 ? (
            <ul className="list_container">
              {searchResults.map(eachhistory => (
                <HistoryItem
                  historyDetail={eachhistory}
                  key={eachhistory.id}
                  deleteUser={this.deleteUser}
                />
              ))}
            </ul>
          ) : (
            <p className="noitems">There is no history to show</p>
          )}
        </div>
      </div>
    )
  }
}

export default SearchHistory
