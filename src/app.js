import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

class App extends React.Component {
  constructor(){
    super()

    this.state = {

    }

  }
  componentDidMount(){
    console.log('Component Mounted')
    axios
      .get('/api/books')
      .then( response => console.log(response))
  }

  render(){
    return(
      <h1>Hello World!</h1>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
