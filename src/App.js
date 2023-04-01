import {Component} from 'react'
import HistoryItem from './component/HistoryItem'
import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
// const App = () => <SearchHistory historylist={initialHistoryList} />

class App extends Component {
  state = {searchInput: '', userList: initialHistoryList}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteUser = id => {
    const {userList} = this.state
    const filteredUsersData = userList.filter(each => each.id !== id)
    this.setState({
      userList: filteredUsersData,
    })
    console.log(filteredUsersData)
  }

  render() {
    const {searchInput, userList} = this.state
    // const {historylist} = this.props
    const searchResults = userList.filter(eachUser =>
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

export default App
