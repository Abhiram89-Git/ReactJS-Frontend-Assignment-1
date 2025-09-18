import './index.css'
import { Component } from 'react'
import ListDetails from '../ListDetails'

class Home extends Component {
  state = { list: [], isLoading: true }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const response = await fetch(url)
    const data = await response.json()
    if (response.ok) {
      this.setState({ list: data, isLoading: false })
    }
  }

  render() {
    const { list, isLoading } = this.state
    return (
      <div className="home">
        {isLoading ? (
          <div class="sk-chase">
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
            </div> 
        ) : (
          <ul className="users-list">
            {list.map(each => (
              <ListDetails key={each.id} details={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
